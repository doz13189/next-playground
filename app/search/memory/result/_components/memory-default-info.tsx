import { MainLayout } from "@/app/_components/main-layout";
import { MiniMemoryIcon } from "@/app/_components/mini-memory-icon";
import type { MemorySchema } from "@/app/_data/memory/schema";
import { Dialog } from "@/app/_parts/Dialog";
import { Button } from "@/app/_parts/button";
import { Heading } from "@/app/_parts/heading";
import { Typography } from "@/app/_parts/typography";
import { Skills } from "@/app/search/_components/skills";
import { Box, Flex, HStack, Spacer, VStack } from "@/styled-system/jsx";
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
          <Spacer />
          <Dialog
            dialogButton={
              <Button
                paddingX={"1"}
                width="8"
                height="8"
                backgroundColor={"#E8E8E8"}
              >
                <HStack marginX={"1"} justifyContent={"center"} alignItems={"center"}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#F8784A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <title>external link</title>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </HStack>
              </Button>
            }
            content={<Box>
              <Box>
                <Heading>効果</Heading>
              </Box>
              <Box marginY={"4"}>
                <Typography>
                  {
                    memory.rarity === "r" || memory.rarity === "n" ? memory.description.skilllv3 : memory.description.skilldxlv1
                  }
                </Typography>

              </Box>
            </Box>}
          />
        </Flex>
        <Box marginTop={"4"}>
          <Skills skills={[...memory.skills]} />
        </Box>
      </MainLayout>
    </Link >
  );
};
