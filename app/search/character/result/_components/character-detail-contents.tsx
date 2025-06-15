"use client";

import { MainLayout } from "@/app/_components/main-layout";
import { characters } from "@/app/_data/character/object";
import type { CharacterSchema } from "@/app/_data/character/schema";
import { Button } from "@/app/_parts/button";
import { Heading } from "@/app/_parts/heading";
import { Typography } from "@/app/_parts/typography";
import { Box, Flex, HStack } from "@/styled-system/jsx";
import { type FC, useState } from "react";
import type { z } from "zod";

const getCharacterContent = (
  activeTabState: number,
  character: z.infer<typeof CharacterSchema>,
) => {
  switch (activeTabState) {
    case 0:
      return character.skill.levelone;
    case 1:
      return character.skill.leveltwo;
    case 2:
      return character.skill.levelthree;
    case 3:
      return character.skill.dxlevelone;
    case 4:
      return character.skill.dxleveltwo;
    default:
      return character.skill.dxleveltwo;
  }
};

const getCharacterStatus = (
  activeTabState: number,
  character: z.infer<typeof CharacterSchema>,
) => {
  switch (activeTabState) {
    case 0:
      return character.stats[0];
    case 1:
      return character.stats[1];
    case 2:
      return character.stats[2];
    case 3:
      return character.stats[3];
    default:
      return character.stats[3];
  }
};

const getValueRank = ({ type, rarity, activeTabState, targetValue }: { type: "hp" | "power" | "speed", rarity: string, activeTabState: number, targetValue: string }) => {

  const values = characters.characters.flatMap((character) => {
    if (character.rarity === rarity) {
      return Number(character.stats[activeTabState][type])
    }

    return [];
  });

  const sortedValues = values.sort((a, b) => a - b);
  const rank = sortedValues.filter(value => value < Number(targetValue)).length;
  const percentile = (rank / values.length) * 100;

  if (percentile >= 75) {
    return "S";
  }

  if (percentile >= 50) {
    return "A";
  }

  if (percentile >= 25) {
    return "B";
  }

  return "C";
}


export const CharacterDetailContents: FC<{
  character: z.infer<typeof CharacterSchema>;
}> = ({ character }) => {
  const [skillActiveTabState, setSkillActiveTabState] = useState<0 | 1 | 2 | 3 | 4>(4);
  const [statusActiveTabState, setStatusActiveTabState] = useState<0 | 1 | 2 | 3>(3);

  return (
    <Box>

      <MainLayout>
        <Heading>ステータス値</Heading>
        <Flex justifyContent={"center"} marginY={"4"} gap={"1"}>
          <Button
            onClick={() => setStatusActiveTabState(0)}
            active={statusActiveTabState === 0}
          >
            Lv.1
          </Button>
          <Button
            onClick={() => setStatusActiveTabState(1)}
            active={statusActiveTabState === 1}
          >
            {character.rarity === "r" ? "Lv.60" : character.rarity === "sr" ? "Lv.70" : "Lv.80"}
          </Button>
          <Button
            onClick={() => setStatusActiveTabState(2)}
            active={statusActiveTabState === 2}
          >
            Lv.MAX
          </Button>
          <Button
            onClick={() => setStatusActiveTabState(3)}
            active={statusActiveTabState === 3}
          >
            Adv+
          </Button>
        </Flex>

        <Box marginBottom={"4"}>
          <HStack marginBottom={"1"}>
            <Typography>
              {"HP"}
            </Typography>
            <Typography color={"primary"}>
              {`${getCharacterStatus(statusActiveTabState, character).hp}`}
            </Typography>
            <Typography color={"tertiary"}>
              {`（評価${getValueRank({
                type: "hp",
                rarity: character.rarity,
                activeTabState: statusActiveTabState,
                targetValue: getCharacterStatus(statusActiveTabState, character).hp
              })}）`}
            </Typography>
          </HStack>

          <HStack marginBottom={"1"}>
            <Typography>
              {"パワー"}
            </Typography>
            <Typography color={"primary"}>
              {`${getCharacterStatus(statusActiveTabState, character).power}`}
            </Typography>
            <Typography color={"tertiary"}>
              {`（評価${getValueRank({
                type: "power",
                rarity: character.rarity,
                activeTabState: statusActiveTabState,
                targetValue: getCharacterStatus(statusActiveTabState, character).power
              })}）`}
            </Typography>
          </HStack>

          <HStack marginBottom={"1"}>
            <Typography>
              {"スピード"}
            </Typography>
            <Typography color={"primary"}>
              {`${getCharacterStatus(statusActiveTabState, character).speed}`}
            </Typography>
            <Typography color={"tertiary"}>
              {`（評価${getValueRank({
                type: "speed",
                rarity: character.rarity,
                activeTabState: statusActiveTabState,
                targetValue: getCharacterStatus(statusActiveTabState, character).speed
              })}）`}
            </Typography>
          </HStack>

          <HStack marginBottom={"1"}>
            <Typography>
              {"クリティカル"}
            </Typography>
            <Typography color={"primary"}>
              {`${getCharacterStatus(statusActiveTabState, character).critical}`}
            </Typography>
          </HStack>

          <Box marginTop={"2"}>
            <Typography fontSize={"xs"}>
              {"評価はS,A,B,Cの4つで、Sは上位25%、Aは上位25%〜50%、Bは上位50%〜75%、Cは下位25%です。また、評価は同じレアリティ、かつ、同じレベルのキャラクターの中で比較をしています。"}
            </Typography>
          </Box>

        </Box>
      </MainLayout>

      <MainLayout>
        <Heading>スキル詳細</Heading>
        <Flex justifyContent={"center"} marginY={"4"} gap={"1"}>
          <Button
            onClick={() => setSkillActiveTabState(0)}
            active={skillActiveTabState === 0}
          >
            Lv.1
          </Button>
          <Button
            onClick={() => setSkillActiveTabState(1)}
            active={skillActiveTabState === 1}
          >
            Lv.2
          </Button>
          <Button
            onClick={() => setSkillActiveTabState(2)}
            active={skillActiveTabState === 2}
          >
            Lv.3
          </Button>
          <Button
            onClick={() => setSkillActiveTabState(3)}
            active={skillActiveTabState === 3}
          >
            DX Lv.1
          </Button>
          <Button
            onClick={() => setSkillActiveTabState(4)}
            active={skillActiveTabState === 4}
          >
            DX Lv.2
          </Button>
        </Flex>

        <Box marginBottom={"4"}>
          <Box marginBottom={"1"}>
            <Typography color={"primary"}>
              {`プルスウルトラ技（${getCharacterContent(skillActiveTabState, character).plusUltra.name}）`}
            </Typography>
          </Box>

          <Typography
            // biome-ignore lint/security/noDangerouslySetInnerHtml:
            dangerouslySetInnerHTML={{
              __html: getCharacterContent(skillActiveTabState, character).plusUltra
                .description,
            }}
          />
        </Box>

        <Box marginBottom={"4"}>
          <Box marginBottom={"1"}>
            <Typography color={"primary"}>
              {`アクションスキル（${getCharacterContent(skillActiveTabState, character).actionSkill1.name}）`}
            </Typography>
          </Box>

          <Typography>
            {`クールタイム ${getCharacterContent(skillActiveTabState, character).actionSkill1.coolTime} ターン`}
          </Typography>

          <Typography
            // biome-ignore lint/security/noDangerouslySetInnerHtml:
            dangerouslySetInnerHTML={{
              __html: getCharacterContent(skillActiveTabState, character).actionSkill1
                .description,
            }}
          />
        </Box>

        <Box marginBottom={"4"}>
          <Box marginBottom={"1"}>
            <Typography color={"primary"}>
              {`アクションスキル（${getCharacterContent(skillActiveTabState, character).actionSkill2.name}）`}
            </Typography>
          </Box>

          <Typography >
            {`クールタイム ${getCharacterContent(skillActiveTabState, character).actionSkill2.coolTime} ターン`}
          </Typography>

          <Typography
            // biome-ignore lint/security/noDangerouslySetInnerHtml:
            dangerouslySetInnerHTML={{
              __html: getCharacterContent(skillActiveTabState, character).actionSkill2
                .description,
            }}
          />
        </Box>

        <Box marginBottom={"4"}>
          <Box marginBottom={"1"}>
            <Typography color={"primary"}>
              {`オートスキル（${getCharacterContent(skillActiveTabState, character).autoSkill1.name}）`}
            </Typography>
          </Box>

          <Typography
            // biome-ignore lint/security/noDangerouslySetInnerHtml:
            dangerouslySetInnerHTML={{
              __html: getCharacterContent(skillActiveTabState, character).autoSkill1
                .description,
            }}
          />
        </Box>

        <Box marginBottom={"4"}>
          <Box marginBottom={"1"}>
            <Typography color={"primary"}>
              {`オートスキル（${getCharacterContent(skillActiveTabState, character).autoSkill2.name}）`}
            </Typography>
          </Box>
          <Typography
            // biome-ignore lint/security/noDangerouslySetInnerHtml:
            dangerouslySetInnerHTML={{
              __html: getCharacterContent(skillActiveTabState, character).autoSkill2
                .description
            }}
          />
        </Box>
      </MainLayout>

      <MainLayout>
        <Heading>EXオートスキル</Heading>
        {character.uniqueSkills.map((skill, index) => {
          return (
            <Box key={skill} marginY={"2"}>
              <Typography>{`(${index + 1}) ${skill}`}</Typography>
            </Box>
          );
        })}
      </MainLayout>
    </Box >
  );
};
