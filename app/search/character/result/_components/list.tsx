import { queryCharacters } from "@/app/_lib/query/characters";
import { Typography } from "@/app/_parts/Typography";
import { NoData } from "@/app/search/_components/no-data";
import { Box, Flex } from "@/styled-system/jsx";
import { AllPage, BackPage, NextPage } from "../../../_components/paging";
import { CharacterDefaultInfo } from "./characterDefaultInfo";

export async function Characters({
  args,
}: {
  args: {
    searchParams: {
      rarity: string;
      type: string;
      name: string;
      skills: string;
      tags: string;
      offset: string;
      limit: string;
    };
  };
}) {
  const argRarity = args.searchParams?.rarity;
  const argType = args.searchParams?.type;
  const argSkills = args.searchParams?.skills;
  const argName = args.searchParams?.name;
  const argTags = args.searchParams?.tags;

  const argOffset = args.searchParams?.offset || "0";
  const argLimit = args.searchParams?.limit || "10";

  const response = await queryCharacters({
    rarity: argRarity,
    type: argType,
    name: argName,
    tags: argTags,
    skills: argSkills,
    offset: argOffset,
    limit: argLimit,
  });

  const result = response.result;
  const characters = response.characters;

  if (!characters) {
    return <NoData />;
  }

  if (characters.length === 0) {
    return <NoData />;
  }

  return (
    <>
      <Flex gap={"2"} marginY={"2"}>
        <Box>
          <Typography>
            {`検索結果: ${result.total} 件`}
          </Typography>
        </Box>
        <Box>
          <Typography>
            {`表示件数: ${result.offset + 1}-${result.offset + result.limit >= result.total ? result.total : result.offset + result.limit} 件`}
          </Typography>
        </Box>
      </Flex>
      {characters.map((character) => (
        <CharacterDefaultInfo key={character.id} character={character} />
      ))}
      <Flex width={"full"} justifyContent={"center"} gap={"1"}>
        <BackPage
          pathname="character"
          total={result.total}
          rarity={argRarity}
          type={argType}
          name={argName}
          skills={argSkills?.split(",")}
          tags={argTags}
          offset={argOffset}
          limit={argLimit}
        />
        <NextPage
          pathname="character"
          total={result.total}
          rarity={argRarity}
          type={argType}
          name={argName}
          skills={argSkills?.split(",")}
          tags={argTags}
          offset={argOffset}
          limit={argLimit}
        />
        <AllPage
          pathname="character"
          total={result.total}
          rarity={argRarity}
          type={argType}
          name={argName}
          skills={argSkills?.split(",")}
          tags={argTags}
          offset={argOffset}
          limit={argLimit}
        />
      </Flex>
    </>
  );
}
