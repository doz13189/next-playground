import { memories } from "@/app/_data/memory/object";
import { queryMemory } from "@/app/_lib/query/memory";
import { NavigationLoading } from "@/app/_parts/navigation-loading";
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
    <Suspense fallback={<NavigationLoading />}>
      <MemoryContent id={params.id} />
    </Suspense>
  );
}
