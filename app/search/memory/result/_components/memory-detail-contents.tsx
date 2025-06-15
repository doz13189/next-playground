"use client";

import { MainLayout } from "@/app/_components/main-layout";
import { memories } from "@/app/_data/memory/object";
import type { MemorySchema } from "@/app/_data/memory/schema";
import { Button } from "@/app/_parts/button";
import { Heading } from "@/app/_parts/heading";
import { Typography } from "@/app/_parts/typography";
import { css } from "@/styled-system/css";
import { Box, Flex, HStack } from "@/styled-system/jsx";
import Image from "next/image";
import { type FC, useState } from "react";
import type { z } from "zod";

type SkillActiveTabState = 0 | 1 | 2 | 3
type StatusActiveTabState = 0 | 4 | 5

const getMemoryContent = (
  activeTabState: SkillActiveTabState,
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

const getMemoryStatus = (
  activeTabState: StatusActiveTabState,
  memory: z.infer<typeof MemorySchema>,
) => {

  switch (activeTabState) {
    case 0:
      return memory.stats[0];
    case 4:
      return memory.stats[4];
    case 5:
      return memory.stats[5];
    default:
      return memory.stats[5];
  }
};

const getValueRank = ({ type, rarity, activeTabState, targetValue }: { type: "hp" | "power" | "speed", rarity: string, activeTabState: StatusActiveTabState, targetValue: string }) => {

  const values = memories.memories.flatMap((memory) => {
    if (memory.rarity === rarity) {
      return Number(memory.stats[activeTabState][type])
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


const getCharacterLevelLabel = (
  activeTabState: StatusActiveTabState,
  rarity: "n" | "r" | "sr" | "ur",
) => {
  switch (activeTabState) {
    case 0:
      switch (rarity) {
        case "n":
          return "Lv.50";
        case "r":
          return "Lv.60";
        case "sr":
          return "Lv.70";
        case "ur":
          return "Lv.80";
        default:
          return "Lv.80";
      }
    case 4:
      switch (rarity) {
        case "n":
          return "Lv.70";
        case "r":
          return "Lv.80";
        case "sr":
          return "Lv.90";
        case "ur":
          return "Lv.100";
        default:
          return "Lv.100";
      }
    case 5:
      switch (rarity) {
        case "n":
          return "--";
        case "r":
          return "--";
        case "sr":
          return "Lv.95";
        case "ur":
          return "Lv.105";
        default:
          return "Lv.105";
      }
    default:
      return "--";
  }
};

export const MemoryDetailContents: FC<{
  memory: z.infer<typeof MemorySchema>;
}> = ({ memory }) => {
  const initialSkillActiveTabState = memory.rarity === "r" || memory.rarity === "n" ? 2 : 3;
  const [skillActiveTabState, setSkillActiveTabState] = useState<SkillActiveTabState>(
    initialSkillActiveTabState,
  );

  const initialStatusActiveTabState = memory.rarity === "r" || memory.rarity === "n" ? 4 : 5;
  const [statusActiveTabState, setStatusActiveTabState] = useState<StatusActiveTabState>(initialStatusActiveTabState);


  return (
    <Box>

      <MainLayout>
        <Heading>ステータス値</Heading>
        <Flex justifyContent={"center"} marginY={"4"} gap={"1"}>
          <Button
            onClick={() => setStatusActiveTabState(0)}
            active={statusActiveTabState === 0}
          >
            {getCharacterLevelLabel(0, memory.rarity)}
          </Button>
          <Button
            onClick={() => setStatusActiveTabState(4)}
            active={statusActiveTabState === 4}
          >
            {getCharacterLevelLabel(4, memory.rarity)}
          </Button>
          {memory.rarity === "r" || memory.rarity === "n" ? null : (
            <Button
              onClick={() => setStatusActiveTabState(5)}
              active={statusActiveTabState === 5}
            >
              {getCharacterLevelLabel(5, memory.rarity)}
            </Button>
          )}

        </Flex>

        <Box marginBottom={"4"}>
          <HStack marginBottom={"1"}>
            <Typography>
              {"HP"}
            </Typography>
            <Typography color={"primary"}>
              {`${getMemoryStatus(statusActiveTabState, memory).hp}`}
            </Typography>
            <Typography color={"tertiary"}>
              {`（評価${getValueRank({
                type: "hp",
                rarity: memory.rarity,
                activeTabState: statusActiveTabState,
                targetValue:
                  getMemoryStatus(statusActiveTabState, memory).hp
              })}）`}
            </Typography>
          </HStack>

          <HStack marginBottom={"1"}>
            <Typography>
              {"パワー"}
            </Typography>
            <Typography color={"primary"}>
              {`${getMemoryStatus(statusActiveTabState, memory).power}`}
            </Typography>
            <Typography color={"tertiary"}>
              {`（評価${getValueRank({
                type: "power",
                rarity: memory.rarity,
                activeTabState: statusActiveTabState,
                targetValue:
                  getMemoryStatus(statusActiveTabState, memory).power
              })}）`}
            </Typography>
          </HStack>

          <HStack marginBottom={"1"}>
            <Typography>
              {"スピード"}
            </Typography>
            <Typography color={"primary"}>
              {`${getMemoryStatus(statusActiveTabState, memory).speed}`}
            </Typography>
            <Typography color={"tertiary"}>
              {`（評価${getValueRank({
                type: "speed",
                rarity: memory.rarity,
                activeTabState: statusActiveTabState,
                targetValue:
                  getMemoryStatus(statusActiveTabState, memory).speed
              })}）`}
            </Typography>
          </HStack>

          <Box marginTop={"2"}>
            <Typography fontSize={"xs"}>
              {"評価はS,A,B,Cの4つで、Sは上位25%、Aは上位25%〜50%、Bは上位50%〜75%、Cは下位25%です。また、評価は同じレアリティ、かつ、同じレベルのメモリーの中で比較をしています。"}
            </Typography>
          </Box>

        </Box>
      </MainLayout>

      <MainLayout>
        <Heading>スキル詳細</Heading>
        <Flex justifyContent={"center"} gap="1" marginY={"4"}>
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
          {memory.rarity === "r" || memory.rarity === "n" ? null : (
            <Button
              onClick={() => setSkillActiveTabState(3)}
              active={skillActiveTabState === 3}
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
            {getMemoryContent(skillActiveTabState, memory)}
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
