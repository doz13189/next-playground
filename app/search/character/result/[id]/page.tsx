import { CharacterDetailContents } from "../_components/characterDetailContents";
import { Suspense } from "react";
import { Loading } from "@/app/search/_components/Loading";
import { queryCharacter } from "@/app/_lib/query/character";
import { characters } from "@/app/_data/character/object";
import { CharacterDefaultInfo } from "../_components/characterDefaultInfo";

export async function generateStaticParams() {
	return characters.characters.map((character) => ({
		params: {
			id: character.id,
		},
	}));
}

async function CharacterContent({ id }: { id: string }) {
	const character = await queryCharacter(id);
	return (
		<div className="min-h-screen container mx-auto py-1 px-3">
			<CharacterDefaultInfo character={character} />
			<CharacterDetailContents character={character} />
		</div>
	);
}

export default function Page({ params }: { params: { id: string } }) {
	return (
		<Suspense fallback={<Loading />}>
			<CharacterContent id={params.id} />
		</Suspense>
	);
}