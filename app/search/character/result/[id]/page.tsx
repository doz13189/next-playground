import { characters } from "@/app/_data/character/object";
import { queryCharacter } from "@/app/_lib/query/character";
import { NavigationLoading } from "@/app/_parts/navigation-loading";
import { Box } from "@/styled-system/jsx";
import { Suspense } from "react";
import { CharacterDefaultInfo } from "../_components/characterDefaultInfo";
import { CharacterDetailContents } from "../_components/characterDetailContents";

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
    <Box>
      <CharacterDefaultInfo character={character} />
      <CharacterDetailContents character={character} />
    </Box>
  );
}

export default function Page({ params }: { params: { id: string } }) {
  return (
    <Suspense fallback={<NavigationLoading />}>
      <CharacterContent id={params.id} />
    </Suspense>
  );
}
