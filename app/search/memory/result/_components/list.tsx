import { queryMemories } from "@/app/_lib/query/memories";
import { NoData } from "@/app/search/_components/no-data";
import { AllPage, BackPage, NextPage } from "@/app/search/_components/paging";
import { MemoryDefaultInfo } from "./memoryDefaultInfo";

export async function Memories({
  args,
}: {
  args: {
    searchParams: {
      rarity: string;
      skills: string;
      name: string;
      offset: string;
      limit: string;
    };
  };
}) {
  const argRarity = args.searchParams?.rarity;
  const argSkills = args.searchParams?.skills;
  const argName = args.searchParams?.name;

  const argOffset = args.searchParams?.offset || "0";
  const argLimit = args.searchParams?.limit || "10";

  const response = await queryMemories({
    rarity: argRarity,
    skills: argSkills,
    name: argName,
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
      <div className="flex my-3">
        <div className="mr-2">
          <p className="text-xs">{`検索結果: ${result.total} 件`}</p>
        </div>
        <div className="mr-2">
          <p className="text-xs">
            {`表示件数: ${result.offset + 1}-${result.offset + result.limit >= result.total ? result.total : result.offset + result.limit} 件`}
          </p>
        </div>
      </div>

      {memories.map((memory) => (
        <div key={memory.id} className="p-2 mb-1 bg-very-light-gray rounded-md">
          <MemoryDefaultInfo key={memory.id} memory={memory} />
        </div>
      ))}

      <div className="flex my-3">
        <div className="flex-1">
          <BackPage
            pathname="memory"
            total={result.total}
            rarity={argRarity}
            skills={argSkills?.split(",")}
            name={argName}
            offset={argOffset}
            limit={argLimit}
          />
        </div>
        <div className="flex-1">
          <NextPage
            pathname="memory"
            total={result.total}
            rarity={argRarity}
            skills={argSkills?.split(",")}
            name={argName}
            offset={argOffset}
            limit={argLimit}
          />
        </div>
        <div className="flex-1">
          <AllPage
            pathname="memory"
            total={result.total}
            rarity={argRarity}
            skills={argSkills?.split(",")}
            name={argName}
            offset={argOffset}
            limit={argLimit}
          />
        </div>
      </div>
    </>
  );
}
