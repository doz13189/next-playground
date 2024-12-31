import { MiniCharacterIcon } from "@/app/_components/mini-character-icon";
import { queryCharacter } from "@/app/_lib/query/character";
import { Typography } from "@/app/_parts/typography";
import { Flex, Spacer, VStack } from "@/styled-system/jsx";
import Link from "next/link";

export async function NewCharacter({ id }: { id: string }) {
  const character = await queryCharacter(id);

  return (
    <Link href={`/search/character/result/${character.id}`}>
      <Flex>
        <MiniCharacterIcon character={character} />
        <VStack marginX={"2"}>
          <Spacer />
          <Typography>{`${character.epithet} ${character.name}`}</Typography>
          <Spacer />
        </VStack>
      </Flex>
    </Link>
  );
}
