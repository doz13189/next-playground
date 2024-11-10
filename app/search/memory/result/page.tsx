import { Link } from "@/app/_parts/Link";
import { Suspense } from "react";
import { Loading } from "../../../_parts/Loading";
import { SearchFilters } from "../../_components/search-filters";
import { createQuery } from "../../_lib/create-query";
import { Memories } from "./_components/list";

export default function Page(args: {
  searchParams: {
    rarity: string;
    skills: string;
    name: string;
    offset: string;
    limit: string;
  };
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
          <Link href={`/search/memory?${createQuery({ rarity: argRarity, skills: argSkills, name: argName })}`} >{"検索条件変更"}</Link>
        </div>
      </div>

      <Suspense fallback={<Loading />}>
        <Memories args={args} />
      </Suspense>
    </div>
  );
}
