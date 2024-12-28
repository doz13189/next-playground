"use client";

import { MainLayout } from "@/app/_components/MainLayout";
import type { CharacterSchema } from "@/app/_data/character/schema";
import { Button } from "@/app/_parts/Button";
import { Heading } from "@/app/_parts/Heading";
import { Typography } from "@/app/_parts/Typography";
import { css } from "@/styled-system/css";
import { Box, Flex } from "@/styled-system/jsx";
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

const getCharacterLevelLabel = (
  activeTabState: number,
) => {
  switch (activeTabState) {
    case 0:
      return "Lv.1";
    case 1:
      return "Lv.2";
    case 2:
      return "Lv.3";
    case 3:
      return "DX Lv.1";
    case 4:
      return "DX Lv.2";
    default:
      return "DX Lv.2";
  }
};

const linkStyle = (isActive: boolean) => css({
  width: "full",
  fontSize: 'xs',
  margin: '1',
  paddingX: '1',
  display: 'flex',
  justifyContent: 'center',
  borderWidth: '2px',
  borderRadius: 'lg',
  backgroundColor: isActive ? 'primary' : "secondary",
  color: isActive ? 'secondary' : "primary",
  borderColor: 'primary',
});

export const CharacterDetailContents: FC<{
  character: z.infer<typeof CharacterSchema>;
}> = ({ character }) => {
  const [activeTabState, setActiveTabState] = useState<0 | 1 | 2 | 3 | 4>(4);

  return (
    <Box>

      <MainLayout>
        <Heading>{`詳細（${getCharacterLevelLabel(activeTabState)}）`}</Heading>

        <Flex justifyContent={"center"} marginY={"4"}>
          <Button
            onClick={() => setActiveTabState(0)}
            className={linkStyle(activeTabState === 0)}
          >
            Lv.1
          </Button>
          <Button
            onClick={() => setActiveTabState(1)}
            className={linkStyle(activeTabState === 1)}
          >
            Lv.2
          </Button>
          <Button
            onClick={() => setActiveTabState(2)}
            className={linkStyle(activeTabState === 2)}
          >
            Lv.3
          </Button>
          <Button
            onClick={() => setActiveTabState(3)}
            className={linkStyle(activeTabState === 3)}
          >
            DX Lv.1
          </Button>
          <Button
            onClick={() => setActiveTabState(4)}
            className={linkStyle(activeTabState === 4)}
          >
            DX Lv.2
          </Button>
        </Flex>

        <Box marginBottom={"4"}>
          <Box marginBottom={"1"}>
            <Typography color={"primary"}>
              {`プルスウルトラ技（${getCharacterContent(activeTabState, character).plusUltra.name}）`}
            </Typography>
          </Box>

          <Typography
            // biome-ignore lint/security/noDangerouslySetInnerHtml:
            dangerouslySetInnerHTML={{
              __html: getCharacterContent(activeTabState, character).plusUltra
                .description,
            }}
          />
        </Box>

        <Box marginBottom={"4"}>
          <Box marginBottom={"1"}>
            <Typography color={"primary"}>
              {`アクションスキル（${getCharacterContent(activeTabState, character).actionSkill1.name}）`}
            </Typography>
          </Box>

          <Typography>
            {`クールタイム ${getCharacterContent(activeTabState, character).actionSkill1.coolTime} ターン`}
          </Typography>

          <Typography
            // biome-ignore lint/security/noDangerouslySetInnerHtml:
            dangerouslySetInnerHTML={{
              __html: getCharacterContent(activeTabState, character).actionSkill1
                .description,
            }}
          />
        </Box>

        <Box marginBottom={"4"}>
          <Box marginBottom={"1"}>
            <Typography color={"primary"}>
              {`アクションスキル（${getCharacterContent(activeTabState, character).actionSkill2.name}）`}
            </Typography>
          </Box>

          <Typography >
            {`クールタイム ${getCharacterContent(activeTabState, character).actionSkill2.coolTime} ターン`}
          </Typography>

          <Typography
            // biome-ignore lint/security/noDangerouslySetInnerHtml:
            dangerouslySetInnerHTML={{
              __html: getCharacterContent(activeTabState, character).actionSkill2
                .description,
            }}
          />
        </Box>

        <Box marginBottom={"4"}>
          <Box marginBottom={"1"}>
            <Typography color={"primary"}>
              {`オートスキル（${getCharacterContent(activeTabState, character).autoSkill1.name}）`}
            </Typography>
          </Box>

          <Typography
            // biome-ignore lint/security/noDangerouslySetInnerHtml:
            dangerouslySetInnerHTML={{
              __html: getCharacterContent(activeTabState, character).autoSkill1
                .description,
            }}
          />
        </Box>

        <Box marginBottom={"4"}>
          <Box marginBottom={"1"}>
            <Typography color={"primary"}>
              {`オートスキル（${getCharacterContent(activeTabState, character).autoSkill2.name}）`}
            </Typography>
          </Box>
          <Typography
            // biome-ignore lint/security/noDangerouslySetInnerHtml:
            dangerouslySetInnerHTML={{
              __html: getCharacterContent(activeTabState, character).autoSkill2
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
