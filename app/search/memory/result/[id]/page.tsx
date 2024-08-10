import { MemoryDetailContents } from "../_components/memoryDetailContents";
import { Suspense } from "react";
import { Loading } from "@/app/search/_components/Loading";
import { queryMemory } from "@/app/_lib/query/memory";
import { memories } from "@/app/_data/memory/object";
import { MemoryDefaultInfo } from "../_components/memoryDefaultInfo";

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