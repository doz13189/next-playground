import { MainLayout } from "@/app/_components/main-layout";
import { MiniCharacterIcon } from "@/app/_components/mini-character-icon";
import type { CharacterSchema } from "@/app/_data/character/schema";
import { Typography } from "@/app/_parts/typography";
import { Skills } from "@/app/search/_components/skills";
import { Box, Flex, Spacer, VStack } from "@/styled-system/jsx";
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
        </Flex>
        <Box marginTop={"4"}>
          <Skills skills={[...character.skills]} />
        </Box>
      </MainLayout>
    </Link>
  );
};
