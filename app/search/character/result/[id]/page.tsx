import { CharacterDetailContents } from "../_components/characterDetailContents";
import { Suspense } from "react";
import { Loading } from "@/app/search/_components/Loading";
import { queryCharacter } from "@/app/_lib/query/character";
import { characters } from "@/app/_data/character/object";
import { CharacterDefaultInfo } from "../_components/characterDefaultInfo";
import { queryCharacterRating } from "@/app/_lib/query/characterRaring";
import { CharacterRatingForm } from "../_components/CharacterRatingForm";

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


const calculateAverage = (numbers: number[]): number => {
    if (numbers.length === 0) {
        return 0;
    }
    
    const sum = numbers.reduce((acc, current) => acc + current, 0);
    return sum / numbers.length;
}

async function CharacterRatingContent({ id }: { id: string }) {
	const response = await queryCharacterRating(id);

	if (!response.character) {
		return (
			<div className="min-h-screen container mx-auto py-1 px-3">
				<>{"データがありません"}</>
				<CharacterRatingForm id={id} />
			</div>
		);
	}

	const { arena, circleFestival, veTower } = response.character;
	const arenaAverage = calculateAverage(arena)
	const circleFestivalAverage = calculateAverage(circleFestival);
	const veTowerAverage = calculateAverage(veTower);
	
	return (
		<div className="min-h-screen container mx-auto py-1 px-3">
			{!response.character}
			<p className="text-xs">
				{`arena: ${arenaAverage === 0 ? "データなし" : arenaAverage.toFixed(2)}`}
			</p>
			<p className="text-xs">
				{`circle festival: ${circleFestivalAverage === 0 ? "データなし" : circleFestivalAverage.toFixed(2)}`}
			</p>
			<p className="text-xs">
				{`ve tower: ${veTowerAverage === 0 ? "データなし" : veTowerAverage.toFixed(2)}`}
			</p>
			<CharacterRatingForm id={id} />
		</div>
	);
}

export default function Page({ params }: { params: { id: string } }) {
	return (
		<>
			<Suspense fallback={<Loading />}>
				<CharacterContent id={params.id} />
			</Suspense>
			<Suspense fallback={<Loading />}>
				<CharacterRatingContent id={params.id} />
			</Suspense>
		</>
	);
}