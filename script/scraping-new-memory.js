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

const getMemoryIcon = async (memoryId) => {
  const fullImageUrl = new URL(
    `https://myheroui.com/assets/mem_icons/icon_m_${memoryId}.webp`,
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

const getMemoryFullImage = async (memoryId) => {
  const fullImageUrl = new URL(
    `https://myheroui.com/assets/mem_arts/memory_l_${memoryId}.webp`,
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

const getMemoryBaseInfo = async (memoryId) => {
  const response = await request("https://jp.myheroui.com/memories");
  const $ = cheerio.load(response);
  let memory;

  $("a.chara-list").each((index, element) => {
    const id = $(element).attr("href");
    const name = $(element).attr("data-charaname");
    const rarity = $(element).attr("data-rarity");
    const skills = $(element).attr("data-skills");

    if (`/memory/${memoryId}` !== id) {
      return;
    }

    memory = {
      id: id.replace("/memory/", ""),
      name: name,
      rarity: rarity,
      skills: skills.split(",").map((skill) => skill.trim()),
      stats: [],
      description: {
        skilllv1: "",
        skilllv2: "",
        skilllv3: "",
        skilldxlv1: "",
      },
    };
  });

  return memory;
};

const getMemoryDetailInfo = async (memory) => {
  const response = await request(`https://jp.myheroui.com/memory/${memory.id}`);
  const $ = cheerio.load(response);

  $("#BaseStats").each((index, element) => {
    const tmpStats = {
      hp: 0,
      power: 0,
      speed: 0,
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
        }
      });

    memory.stats.push(tmpStats);
  });

  $("#skilllv1").each((index, element) => {
    let skill = "";
    $(element)
      .find(".ps-2")
      .map((i, el) => {
        skill = $(el).text().trim().replaceAll(".", "、");
      });
    memory.description.skilllv1 = skill;
  });

  $("#skilllv2").each((index, element) => {
    $(element)
      .find(".ps-2")
      .map((i, el) => {
        skill = $(el).text().trim().replaceAll(".", "、");
      });
    memory.description.skilllv2 = skill;
  });

  $("#skilllv3").each((index, element) => {
    $(element)
      .find(".ps-2")
      .map((i, el) => {
        skill = $(el).text().trim().replaceAll(".", "、");
      });
    memory.description.skilllv3 = skill;
  });

  $("#skilldxlv1").each((index, element) => {
    let skill = "";
    $(element)
      .find(".ps-2")
      .map((i, el) => {
        skill = $(el).text().trim().replaceAll(".", "、");
      });
    memory.description.skilldxlv1 = skill;
  });

  return memory;
};

(async () => {
  const memories = [];
  for (const memoryId of ["2400160", "2300211", "2300212"]) {
    await getMemoryIcon(memoryId);
    await getMemoryFullImage(memoryId);
    const memoryBaseInfo = await getMemoryBaseInfo(memoryId);
    const memoryDetailInfo = await getMemoryDetailInfo(memoryBaseInfo);
    memories.push(memoryDetailInfo);
  }

  const f = path.join(__dirname, "tmp", "memories.json");
  await fs.writeFile(f, JSON.stringify(memories), (error) => {
    if (error) {
      console.error("Error writing file:", error);
    } else {
      console.info("File successfully written!");
    }
  });
})();
