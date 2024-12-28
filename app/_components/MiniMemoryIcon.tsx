"use client";

import { css } from "@/styled-system/css";
import { Box } from "@/styled-system/jsx";
import Image from "next/image";
import type { FC } from "react";
import type { z } from "zod";
import type { MemorySchema } from "../_data/memory/schema";
import { getImageNameByRarity } from "../search/_lib/utils";

type Props = {
  memory: z.infer<typeof MemorySchema>;
}

export const MiniMemoryIcon: FC<Props> = ({ memory }) => {

  return (
    <Box className={css({
      position: 'relative',
      width: '48px',
      height: '48px'
    })}>
      <Image
        src={`/memory-icon/icon_m_${memory.id}.webp`}
        width={50}
        height={50}
        alt="memory icon"
        className={css({
          position: 'absolute',
          top: 0,
          left: 0
        })}
      />
      <Image
        src={`/frame/chara_frame_10${getImageNameByRarity(memory.rarity)}.webp`}
        width={50}
        height={50}
        alt="memory icon"
        className={css({
          position: 'absolute',
          top: 0,
          left: 0
        })}
      />
      <Image
        src={`/rarity/card_rarity_0${getImageNameByRarity(memory.rarity)}.webp`}
        width={20}
        height={20}
        alt="memory icon"
        className={css({
          position: 'absolute',
          top: 0,
          left: 0
        })}
      />
    </Box>
  );
};
