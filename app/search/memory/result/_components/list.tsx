import { queryMemories } from "@/app/_lib/query/memories";
import { Typography } from "@/app/_parts/typography";
import { NoData } from "@/app/search/_components/no-data";
import { AllPage, BackPage, NextPage } from "@/app/search/_components/paging";
import { Box, Flex } from "@/styled-system/jsx";
import { MemoryDefaultInfo } from "./memory-default-info";

export async function Memories({
  args,
}: {
  args: {
    searchParams: {
      rarity: string;
      skills: string;
      name: string;
      skillDescription: string;
      offset: string;
      limit: string;
    };
  };
}) {
  const argRarity = args.searchParams?.rarity;
  const argSkills = args.searchParams?.skills;
  const argName = args.searchParams?.name;
  const argSkillDescription = args.searchParams?.skillDescription;

  const argOffset = args.searchParams?.offset || "0";
  const argLimit = args.searchParams?.limit || "10";

  const response = await queryMemories({
    rarity: argRarity,
    skills: argSkills,
    name: argName,
    skillDescription: argSkillDescription,
    offset: argOffset,
    limit: argLimit,
  });

  const result = response.result;
  const memories = response.memories;

  if (!memories) {
    return <NoData />;
  }

  if (memories.length === 0) {
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

      {memories.map((memory) => (
        <MemoryDefaultInfo key={memory.id} memory={memory} />
      ))}

      <Flex width={"full"} justifyContent={"center"} gap={"1"}>
        <BackPage
          pathname="memory"
          total={result.total}
          rarity={argRarity}
          skills={argSkills?.split(",")}
          name={argName}
          skillDescription={argSkillDescription}
          offset={argOffset}
          limit={argLimit}
        />
        <NextPage
          pathname="memory"
          total={result.total}
          rarity={argRarity}
          skills={argSkills?.split(",")}
          name={argName}
          skillDescription={argSkillDescription}
          offset={argOffset}
          limit={argLimit}
        />
        <AllPage
          pathname="memory"
          total={result.total}
          rarity={argRarity}
          skills={argSkills?.split(",")}
          name={argName}
          skillDescription={argSkillDescription}
          offset={argOffset}
          limit={argLimit}
        />
      </Flex>
    </>
  );
}
