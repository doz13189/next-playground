import { css } from "@/styled-system/css";
import { Box } from "@/styled-system/jsx";
import Image from "next/image";
import type { FC } from "react";
import type { z } from "zod";
import type { CharacterSchema } from "../_data/character/schema";
import { getImageNameByAttribute, getImageNameByRarity } from "../search/_lib/utils";

type Props = {
  character: z.infer<typeof CharacterSchema>;
}

export const MiniCharacterIcon: FC<Props> = ({ character }) => {

  return (
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
        className={css({
          position: 'absolute',
          bottom: 0,
          left: 0
        })}
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
  );
};
