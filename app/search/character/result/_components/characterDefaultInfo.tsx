"use client";

import type { CharacterSchema } from "@/app/_data/character/schema";
import { Skills } from "@/app/search/_components/skills";
import {
  getImageNameByAttribute,
  getImageNameByRarity,
} from "@/app/search/_lib/utils";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import type { z } from "zod";

export const CharacterDefaultInfo: FC<{
  character: z.infer<typeof CharacterSchema>;
}> = ({ character }) => {
  return (
    <Link href={`/search/character/result/${character.id}`}>
      <div className="flex">
        <div className="relative w-12 h-12">
          <Image
            src={`/bg/chara_bg_10${getImageNameByRarity(character.rarity)}.webp`}
            width={50}
            height={50}
            alt="character icon"
            className="absolute top-0 left-0"
          />
          <Image
            src={`/character-icon/icon_m_${character.id}_00.webp`}
            width={50}
            height={50}
            alt="character icon"
            className="absolute top-0 left-0"
          />
          <Image
            src={`/frame/chara_frame_10${getImageNameByRarity(character.rarity)}.webp`}
            width={50}
            height={50}
            alt="character icon"
            className="absolute top-0 left-0"
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
            className="absolute top-0 left-0"
          />
        </div>
        <div className="content-center mx-3">{`${character.epithet} ${character.name}`}</div>
      </div>
      <Skills skills={[...character.skills]} />
    </Link>
  );
};
