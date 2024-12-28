"use client";

import { MainLayout } from "@/app/_components/MainLayout";
import { MiniMemoryIcon } from "@/app/_components/MiniMemoryIcon";
import type { MemorySchema } from "@/app/_data/memory/schema";
import { Typography } from "@/app/_parts/Typography";
import { Skills } from "@/app/search/_components/skills";
import { Box, Flex, Spacer, VStack } from "@/styled-system/jsx";
import Link from "next/link";
import type { FC } from "react";
import type { z } from "zod";

export const MemoryDefaultInfo: FC<{
  memory: z.infer<typeof MemorySchema>;
}> = ({ memory }) => {
  return (
    <Link href={`/search/memory/result/${memory.id}`}>
      <MainLayout key={memory.id}>
        <Flex>
          <MiniMemoryIcon memory={memory} />
          <VStack marginX={"2"}>
            <Spacer />
            <Typography>{`${memory.name}`}</Typography>
            <Spacer />
          </VStack>
        </Flex>
        <Box marginTop={"4"}>
          <Skills skills={[...memory.skills]} />
        </Box>
      </MainLayout>
    </Link>
  );
};
