import { MiniMemoryIcon } from "@/app/_components/MiniMemoryIcon";
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
        <MiniMemoryIcon memory={memory} />
        <VStack marginX={"2"}>
          <Spacer />
          <Typography>{`${memory.name}`}</Typography>
          <Spacer />
        </VStack>
      </Flex>
    </Link>
  );
}
