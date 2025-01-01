import { MainLayout } from "@/app/_components/main-layout";
import { memories } from "@/app/_data/memory/object";
import { queryMemory } from "@/app/_lib/query/memory";
import { Skeleton } from "@/app/_parts/skeleton";
import { Box } from "@/styled-system/jsx";
import { Suspense } from "react";
import { MemoryDefaultInfo } from "../_components/memory-default-info";
import { MemoryDetailContents } from "../_components/memory-detail-contents";

export async function generateStaticParams() {
  return memories.memories.map((memory) => ({
    params: {
      id: memory.id,
    },
  }));
}

async function MemoryContent({ id }: { id: string }) {
  const memory = await queryMemory(id);

  return (
    <Box>
      <MemoryDefaultInfo memory={memory} />
      <MemoryDetailContents memory={memory} />
    </Box>
  );
}

export default function Page({ params }: { params: { id: string } }) {
  return (
    <Suspense fallback={
      <Box>
        <MainLayout>
          <Skeleton>
            <Box height={"96px"} margin={"1"} paddingY={"2"} />
          </Skeleton>
        </MainLayout>
        <MainLayout>
          <Skeleton>
            <Box height={"192"} margin={"1"} paddingY={"2"} />
          </Skeleton>
        </MainLayout>
        <MainLayout>
          <Skeleton>
            <Box height={"96px"} margin={"1"} paddingY={"2"} />
          </Skeleton>
        </MainLayout>
      </Box>
    }>
      <MemoryContent id={params.id} />
    </Suspense>
  );
}
