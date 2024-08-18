import { NoData } from "@/app/search/_components/no-data";
import { AllPage, BackPage, NextPage } from "../../../_components/paging";
import { queryCharacters } from "@/app/_lib/query/characters";
import { CharacterDefaultInfo } from "./characterDefaultInfo";

export async function Characters({ args }: {
	args: {
		searchParams: { rarity: string; type: string; name: string; skills: string; tags: string, offset: string, limit: string };
	}
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
		limit: argLimit
	});

	const result = response.result;
	const characters = response.characters;

	if (!characters) {
		return <NoData />;
	}

	if (characters.length === 0) {
		return <NoData />;
	}

	return (<>
		<div className="flex my-3">
			<div className="mr-2">
				<p className="text-xs">
					{`検索結果: ${result.total} 件`}
				</p>
			</div>
			<div className="mr-2">
				<p className="text-xs">
					{`表示件数: ${result.offset + 1}-${result.offset + result.limit >= result.total ? result.total : result.offset + result.limit} 件`}
				</p>
			</div>
		</div>
		{characters.map((character) =>
			<div key={character.id} className="p-2 mb-1 bg-very-light-gray rounded-md">
				<CharacterDefaultInfo key={character.id} character={character} />
			</div>)}
		<div className="flex my-3">
			<div className="flex-1">
				<BackPage pathname="character" total={result.total} rarity={argRarity} type={argType} name={argName} skills={argSkills?.split(",")} tags={argTags} offset={argOffset} limit={argLimit} />
			</div>
			<div className="flex-1">
				<NextPage pathname="character" total={result.total} rarity={argRarity} type={argType} name={argName} skills={argSkills?.split(",")} tags={argTags} offset={argOffset} limit={argLimit} />
			</div>
			<div className="flex-1">
				<AllPage pathname="character" total={result.total} rarity={argRarity} type={argType} name={argName} skills={argSkills?.split(",")} tags={argTags} offset={argOffset} limit={argLimit} />
			</div>
		</div>
	</>)
};
