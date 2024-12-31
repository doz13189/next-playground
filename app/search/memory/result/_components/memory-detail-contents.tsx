"use client";

import { MainLayout } from "@/app/_components/main-layout";
import type { MemorySchema } from "@/app/_data/memory/schema";
import { Button } from "@/app/_parts/button";
import { Heading } from "@/app/_parts/heading";
import { Typography } from "@/app/_parts/typography";
import { css } from "@/styled-system/css";
import { Box, Flex } from "@/styled-system/jsx";
import Image from "next/image";
import { type FC, useState } from "react";
import type { z } from "zod";

const getMemoryContent = (
  activeTabState: number,
  memory: z.infer<typeof MemorySchema>,
) => {
  switch (activeTabState) {
    case 0:
      return memory.description.skilllv1;
    case 1:
      return memory.description.skilllv2;
    case 2:
      return memory.description.skilllv3;
    case 3:
      return memory.description.skilldxlv1;
    default:
      return memory.description.skilldxlv1;
  }
};

const getMemoryLevelLabel = (
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
    default:
      return "DX Lv.1";
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

export const MemoryDetailContents: FC<{
  memory: z.infer<typeof MemorySchema>;
}> = ({ memory }) => {
  const initialActiveTabState = memory.rarity === "r" || memory.rarity === "n" ? 2 : 3;
  const [activeTabState, setActiveTabState] = useState<0 | 1 | 2 | 3>(
    initialActiveTabState,
  );


  return (
    <Box>
      <MainLayout>
        <Heading>{`詳細（${getMemoryLevelLabel(activeTabState)}）`}</Heading>
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
          {memory.rarity === "r" || memory.rarity === "n" ? null : (
            <Button
              onClick={() => setActiveTabState(3)}
              className={linkStyle(activeTabState === 3)}
            >
              DX Lv.1
            </Button>
          )}
        </Flex>


        <Box marginBottom={"4"}>
          <Box marginBottom={"1"}>
            <Typography color={"primary"}>
              効果
            </Typography>
          </Box>

          <Typography>
            {getMemoryContent(activeTabState, memory)}
          </Typography>

        </Box>
      </MainLayout>

      <MainLayout>
        <Heading>フルイメージ</Heading>
        <Box className={css({
          position: "relative",
          width: "full",
          height: "64",
        })}>
          <Image
            src={`/memory-image/memory_l_${memory.id}.webp`}
            style={{ objectFit: "contain" }}
            fill
            priority={false}
            alt="memory"
          />
        </Box>
      </MainLayout>
    </Box>
  );
};
