import { memories } from "@/app/_data/memory/object";
import { queryMemory } from "@/app/_lib/query/memory";
import { Loading } from "@/app/_parts/Loading";
import { Suspense } from "react";
import { MemoryDefaultInfo } from "../_components/memoryDefaultInfo";
import { MemoryDetailContents } from "../_components/memoryDetailContents";

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
    <div className="min-h-screen container mx-auto py-1 px-3">
      <MemoryDefaultInfo memory={memory} />
      <MemoryDetailContents memory={memory} />
    </div>
  );
}

export default function Page({ params }: { params: { id: string } }) {
  return (
    <Suspense fallback={<Loading />}>
      <MemoryContent id={params.id} />
    </Suspense>
  );
}
