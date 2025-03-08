import { MainLayout } from "@/app/_components/main-layout";
import { characters } from "@/app/_data/character/object";
import { queryCharacter } from "@/app/_lib/query/character";
import { Skeleton } from "@/app/_parts/skeleton";
import { Box } from "@/styled-system/jsx";
import { Suspense } from "react";
import { CharacterDefaultInfo } from "../_components/character-default-info";
import { CharacterDetailContents } from "../_components/character-detail-contents";

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

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
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
    }
    >
      <CharacterContent id={params.id} />
    </Suspense>
  );
}
