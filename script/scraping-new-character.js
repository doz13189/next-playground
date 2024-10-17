const cheerio = require("cheerio");
const axios = require("axios");
const path = require("path");
const fs = require("fs");

const request = async (url) => {
  const { data } = await axios.get(url);
  return data;
};

// 画像を保存する関数
const downloadImage = async (url, savePath) => {
  const writer = fs.createWriteStream(savePath);

  const response = await axios({
    url,
    method: "GET",
    responseType: "stream",
  });

  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on("finish", resolve);
    writer.on("error", reject);
  });
};

const getCharacterIcon = async (characterId) => {
  const fullImageUrl = new URL(
    `https://myheroui.com/assets/card_m_icons/icon_m_${characterId}_00.webp`,
  ).href;
  const imageName = fullImageUrl.split("/").pop();
  const savePath = path.join(`${__dirname}/tmp`, imageName);

  try {
    await downloadImage(fullImageUrl, savePath);
    console.info("アイコンを保存しました:", savePath);
  } catch (error) {
    console.error("画像の保存中にエラーが発生しました:", error);
  }
};

const getCharacterBaseInfo = async (characterId) => {
  const response = await request("https://jp.myheroui.com/characters");
  const $ = cheerio.load(response);
  let character;

  $("a.chara-list").each((index, element) => {
    const rawHref = $(element).attr("href");
    const rawName = $(element).attr("data-charaname");
    const rawRarity = $(element).attr("data-rarity");
    const rawType = $(element).attr("data-element");
    const rawSex = $(element).attr("data-sex");
    const rawSkills = $(element).attr("data-skills");
    const rawTags = $(element).attr("data-tags");

    const id = rawHref.replace("/character/", "");
    const name = rawName.split("]")[1].trim();
    const epithet = rawName.split("]")[0].trim().replace("[", "");
    const rarity = rawRarity;
    const type = rawType;
    const sex = rawSex;
    const skills = rawSkills.split(",").map((skill) => skill.trim());
    const tags = rawTags.split(",").map((tag) => tag.trim());

    if (id !== characterId) {
      return;
    }

    character = {
      id: id,
      epithet: epithet,
      name: name,
      rarity: rarity,
      type: type,
      sex: sex,
      skills: skills,
      tags: tags,
      stats: [],
      uniqueSkills: [],
      skill: {
        levelone: {
          plusUltra: {
            name: "",
            description: "",
          },
          actionSkill1: {
            name: "",
            description: "",
            coolTime: "",
          },
          actionSkill2: {
            name: "",
            description: "",
            coolTime: "",
          },
          autoSkill1: {
            name: "",
            description: "",
          },
          autoSkill2: {
            name: "",
            description: "",
          },
        },
        leveltwo: {
          plusUltra: {
            name: "",
            description: "",
          },
          actionSkill1: {
            name: "",
            description: "",
            coolTime: "",
          },
          actionSkill2: {
            name: "",
            description: "",
            coolTime: "",
          },
          autoSkill1: {
            name: "",
            description: "",
          },
          autoSkill2: {
            name: "",
            description: "",
          },
        },
        levelthree: {
          plusUltra: {
            name: "",
            description: "",
          },
          actionSkill1: {
            name: "",
            description: "",
            coolTime: "",
          },
          actionSkill2: {
            name: "",
            description: "",
            coolTime: "",
          },
          autoSkill1: {
            name: "",
            description: "",
          },
          autoSkill2: {
            name: "",
            description: "",
          },
        },
        dxlevelone: {
          plusUltra: {
            name: "",
            description: "",
          },
          actionSkill1: {
            name: "",
            description: "",
            coolTime: "",
          },
          actionSkill2: {
            name: "",
            description: "",
            coolTime: "",
          },
          autoSkill1: {
            name: "",
            description: "",
          },
          autoSkill2: {
            name: "",
            description: "",
          },
        },
        dxleveltwo: {
          plusUltra: {
            name: "",
            description: "",
          },
          actionSkill1: {
            name: "",
            description: "",
            coolTime: "",
          },
          actionSkill2: {
            name: "",
            description: "",
            coolTime: "",
          },
          autoSkill1: {
            name: "",
            description: "",
          },
          autoSkill2: {
            name: "",
            description: "",
          },
        },
      },
    };
  });

  return character;
};

const getCharacterDetailInfo = async (character) => {
  const response = await request(
    `https://jp.myheroui.com/character/${character.id}`,
  );
  const $ = cheerio.load(response);

  $("#BaseStats").each((index, element) => {
    const tmpStats = {
      hp: 0,
      power: 0,
      speed: 0,
      defense: 0,
      critical: 0,
    };
    $(element)
      .find("p")
      .map((i, el) => {
        const stats = $(el).text();
        switch (i) {
          case 0: {
            tmpStats.hp = stats.replace("HP:", "").trim();
            break;
          }
          case 1: {
            tmpStats.power = stats.replace("Power:", "").trim();
            break;
          }
          case 2: {
            tmpStats.speed = stats.replace("Speed:", "").trim();
            break;
          }
          case 3: {
            tmpStats.defense = stats.replace("Defense:", "").trim();
            break;
          }
          case 4: {
            tmpStats.critical = stats.replace("Critical Rate:", "").trim();
            break;
          }
        }
      });

    character.stats.push(tmpStats);
  });

  for (const htmlId of [
    "levelone",
    "leveltwo",
    "levelthree",
    "dxlevelone",
    "dxleveltwo",
  ]) {
    $(`#${htmlId}`).each((index, element) => {
      $(element)
        .find("div.ps-2")
        .map((i, el) => {
          text = $(el).text().trim();
          html = $(el).html();

          switch (i) {
            case 0: {
              character.skill[htmlId].plusUltra.name = text;
              break;
            }
            case 1: {
              character.skill[htmlId].plusUltra.description = html
                .replaceAll("\n", "")
                .trim();
              break;
            }
            case 2: {
              character.skill[htmlId].actionSkill1.name = text;
              break;
            }
            case 3: {
              character.skill[htmlId].actionSkill1.description = html
                .replaceAll("\n", "")
                .trim()
                .split("<hr")[0]
                .trim();
              character.skill[htmlId].actionSkill1.coolTime = text
                .split("\n")[1]
                .replace("Cool Down:", "")
                .replace("Turns", "")
                .trim();
              break;
            }
            case 4: {
              character.skill[htmlId].actionSkill2.name = text;
              break;
            }
            case 5: {
              character.skill[htmlId].actionSkill2.description = html
                .replaceAll("\n", "")
                .trim()
                .split("<hr")[0]
                .trim();
              character.skill[htmlId].actionSkill2.coolTime = text
                .split("\n")[1]
                .replace("Cool Down:", "")
                .replace("Turns", "")
                .trim();
              break;
            }
            case 6: {
              character.skill[htmlId].autoSkill1.name = text;
              break;
            }
            case 7: {
              character.skill[htmlId].autoSkill1.description = html
                .replaceAll("\n", "")
                .trim();
              break;
            }
            case 8: {
              character.skill[htmlId].autoSkill2.name = text;
              break;
            }
            case 9: {
              character.skill[htmlId].autoSkill2.description = html
                .replaceAll("\n", "")
                .trim();
              break;
            }
          }
        });
    });
  }

  $("#uniqueex3").each((index, element) => {
    const uniqueSkills = [];
    $(element)
      .find(".ps-2")
      .map((i, el) => {
        if (i % 2 === 1) {
          const uniqueSkill = $(el).text().trim().replaceAll(".", "、");
          uniqueSkills.push(uniqueSkill);
        }
      });
    character.uniqueSkills = uniqueSkills;
  });

  return character;
};

(async () => {
  const characterId = "1186006";
  await getCharacterIcon(characterId);
  const characterBaseInfo = await getCharacterBaseInfo(characterId);
  const characterDetailInfo = await getCharacterDetailInfo(characterBaseInfo);
  console.info(JSON.stringify(characterDetailInfo));

  const f = path.join(__dirname, "tmp", `character_${characterId}.json`);
  await fs.writeFile(f, JSON.stringify(characterDetailInfo), (error) => {
    if (error) {
      console.error("Error writing file:", error);
    } else {
      console.info("File successfully written!");
    }
  });
})();
