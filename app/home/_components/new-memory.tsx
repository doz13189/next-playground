import { queryMemory } from "@/app/_lib/query/memory";
import { Typography } from "@/app/_parts/Typography";
import { getImageNameByRarity } from "@/app/search/_lib/utils";
import { css } from "@/styled-system/css";
import { Box, Flex, Spacer, VStack } from "@/styled-system/jsx";
import Image from "next/image";
import Link from "next/link";

export async function NewMemory({
  id,
}: {
  id: string;
}) {
  const memory = await queryMemory(id);
  return (
    <Link href={`/search/memory/result/${memory.id}`}>
      <Flex>
        <Box className={css({
          position: 'relative',
          width: '48px',
          height: '48px'
        })}>
          <Image
            src={`/bg/chara_bg_10${getImageNameByRarity(memory.rarity)}.webp`}
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
        <VStack marginX={"2"}>
          <Spacer />
          <Typography>{`${memory.name}`}</Typography>
          <Spacer />
        </VStack>
      </Flex>
    </Link>
  );
}
