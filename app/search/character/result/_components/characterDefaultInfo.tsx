"use client";

import type { CharacterSchema } from "@/app/_data/character/schema";
import { Typography } from "@/app/_parts/Typography";
import { Skills } from "@/app/search/_components/skills";
import {
  getImageNameByAttribute,
  getImageNameByRarity,
} from "@/app/search/_lib/utils";
import { css } from "@/styled-system/css";
import { Box, Flex, Spacer, VStack } from "@/styled-system/jsx";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import type { z } from "zod";

export const CharacterDefaultInfo: FC<{
  character: z.infer<typeof CharacterSchema>;
}> = ({ character }) => {
  return (
    <Link href={`/search/character/result/${character.id}`}>
      <Flex>
        <Box className={css({
          position: 'relative',
          width: '48px',
          height: '48px'
        })}>
          <Image
            src={`/bg/chara_bg_10${getImageNameByRarity(character.rarity)}.webp`}
            width={50}
            height={50}
            alt="character icon"
            className={css({
              position: 'absolute',
              top: 0,
              left: 0
            })}
          />
          <Image
            src={`/character-icon/icon_m_${character.id}_00.webp`}
            width={50}
            height={50}
            alt="character icon"
            className={css({
              position: 'absolute',
              top: 0,
              left: 0
            })}
          />
          <Image
            src={`/frame/chara_frame_10${getImageNameByRarity(character.rarity)}.webp`}
            width={50}
            height={50}
            alt="character icon"
            className={css({
              position: 'absolute',
              top: 0,
              left: 0
            })}
          />
          <Image
            src={`/attribute/card_attribute_0${getImageNameByAttribute(character.type)}.webp`}
            width={15}
            height={15}
            alt="character icon"
            className="absolute bottom-0 left-0"
          />
          <Image
            src={`/rarity/card_rarity_0${getImageNameByRarity(character.rarity)}.webp`}
            width={20}
            height={20}
            alt="character icon"
            className={css({
              position: 'absolute',
              top: 0,
              left: 0
            })}
          />
        </Box>
        <VStack marginX={"2"}>
          <Spacer />
          <Typography>{`${character.epithet} ${character.name}`}</Typography>
          <Spacer />
        </VStack>
      </Flex>
      <Skills skills={[...character.skills]} />
    </Link>
  );
};
