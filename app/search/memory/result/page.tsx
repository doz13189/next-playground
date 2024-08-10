import { Suspense } from "react";
import { Memories } from "./_components/list";
import { SearchFilters } from "../../_components/search-filters";
import { EditFilterButton } from "../../_components/edit-filter-button";
import { Loading } from "../../_components/Loading";

export default function Page(args: {
	searchParams: { rarity: string; skills: string, name: string, offset: string, limit: string };
}) {
	const argRarity = args.searchParams?.rarity;
	const argSkills = args.searchParams?.skills?.split(",");
	const argName = args.searchParams?.name;

	return (
		<div className="min-h-screen container mx-auto py-1 px-3">
			<div className="mb-3">
				<SearchFilters rarity={argRarity} skills={argSkills} name={argName} />
				<div
					className="
					flex
					justify-end
				"
				>
					<EditFilterButton pathname={"memory"} rarity={argRarity} skills={argSkills} name={argName} />
				</div>
			</div>

			<Suspense fallback={<Loading />}>
				<Memories args={args} />
			</Suspense>
		</div>
	);
}
