import { MainLayout } from "@/app/_components/main-layout";
import { MiniCharacterIcon } from "@/app/_components/mini-character-icon";
import type { CharacterSchema } from "@/app/_data/character/schema";
import { Dialog } from "@/app/_parts/Dialog";
import { Button } from "@/app/_parts/button";
import { Heading } from "@/app/_parts/heading";
import { Typography } from "@/app/_parts/typography";
import { Skills } from "@/app/search/_components/skills";
import { Box, Flex, HStack, Spacer, VStack } from "@/styled-system/jsx";
import Link from "next/link";
import type { FC } from "react";
import type { z } from "zod";

export const CharacterDefaultInfo: FC<{
  character: z.infer<typeof CharacterSchema>;
}> = ({ character }) => {
  return (
    <Link href={`/search/character/result/${character.id}`}>
      <MainLayout key={character.id}>
        <Flex>
          <MiniCharacterIcon
            character={character}
          />
          <VStack marginX={"2"}>
            <Spacer />
            <Typography>{`${character.epithet} ${character.name}`}</Typography>
            <Spacer />
          </VStack>
          <Spacer />
          <Dialog
            dialogButton={
              <Button
                paddingX={"1"}
                width="8"
                height="8"
                backgroundColor={"#E8E8E8"}
                color={"primary"}
              >
                <HStack marginX={"1"} justifyContent={"center"} alignItems={"center"}>
                  <svg xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <title>external link</title>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </HStack>
              </Button>
            }
            content={<Box>
              <Heading>{`${character.epithet} ${character.name}`}</Heading>

              <Box marginY={"4"}>
                <Box marginBottom={"1"}>
                  <Typography color={"primary"}>
                    {`プルスウルトラ技（${character.skill.dxleveltwo.plusUltra.name}）`}
                  </Typography>
                </Box>

                <Typography
                  // biome-ignore lint/security/noDangerouslySetInnerHtml:
                  dangerouslySetInnerHTML={{
                    __html: character.skill.dxleveltwo.plusUltra
                      .description,
                  }}
                />
              </Box>

              <Box marginBottom={"4"}>
                <Box marginBottom={"1"}>
                  <Typography color={"primary"}>
                    {`アクションスキル（${character.skill.dxleveltwo.actionSkill1.name}）`}
                  </Typography>
                </Box>

                <Typography>
                  {`クールタイム ${character.skill.dxleveltwo.actionSkill1.coolTime} ターン`}
                </Typography>

                <Typography
                  // biome-ignore lint/security/noDangerouslySetInnerHtml:
                  dangerouslySetInnerHTML={{
                    __html: character.skill.dxleveltwo.actionSkill1
                      .description,
                  }}
                />
              </Box>

              <Box marginBottom={"4"}>
                <Box marginBottom={"1"}>
                  <Typography color={"primary"}>
                    {`アクションスキル（${character.skill.dxleveltwo.actionSkill2.name}）`}
                  </Typography>
                </Box>

                <Typography >
                  {`クールタイム ${character.skill.dxleveltwo.actionSkill2.coolTime} ターン`}
                </Typography>

                <Typography
                  // biome-ignore lint/security/noDangerouslySetInnerHtml:
                  dangerouslySetInnerHTML={{
                    __html: character.skill.dxleveltwo.actionSkill2
                      .description,
                  }}
                />
              </Box>

              <Box marginBottom={"4"}>
                <Box marginBottom={"1"}>
                  <Typography color={"primary"}>
                    {`オートスキル（${character.skill.dxleveltwo.autoSkill1.name}）`}
                  </Typography>
                </Box>

                <Typography
                  // biome-ignore lint/security/noDangerouslySetInnerHtml:
                  dangerouslySetInnerHTML={{
                    __html: character.skill.dxleveltwo.autoSkill1
                      .description,
                  }}
                />
              </Box>

              <Box marginBottom={"4"}>
                <Box marginBottom={"1"}>
                  <Typography color={"primary"}>
                    {`オートスキル（${character.skill.dxleveltwo.autoSkill2.name}）`}
                  </Typography>
                </Box>
                <Typography
                  // biome-ignore lint/security/noDangerouslySetInnerHtml:
                  dangerouslySetInnerHTML={{
                    __html: character.skill.dxleveltwo.autoSkill2
                      .description
                  }}
                />
              </Box>
            </Box>}
          />
        </Flex>
        <Box marginTop={"4"}>
          <Skills skills={[...character.skills]} />
        </Box>
      </MainLayout>
    </Link>
  );
};
