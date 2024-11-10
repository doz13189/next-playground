import { Link } from "@/app/_parts/Link";
import { Suspense } from "react";
import { Loading } from "../../../_parts/Loading";
import { SearchFilters } from "../../_components/search-filters";
import { createQuery } from "../../_lib/create-query";
import { Characters } from "./_components/list";

export default async function Page(args: {
  searchParams: {
    rarity: string;
    type: string;
    name: string;
    skills: string;
    tags: string;
    offset: string;
    limit: string;
  };
}) {
  const argRarity = args.searchParams?.rarity;
  const argType = args.searchParams?.type;
  const argName = args.searchParams?.name;
  const argSkills = args.searchParams?.skills?.split(",");
  const argTags = args.searchParams?.tags;

  return (
    <div className="min-h-screen container mx-auto py-1 px-3">
      <div className="mb-3">
        <SearchFilters
          rarity={argRarity}
          type={argType}
          name={argName}
          skills={argSkills}
          tags={argTags}
        />
        <div
          className="
					flex
					justify-end
				"
        >
          <Link href={`/search/character?${createQuery({ rarity: argRarity, skills: argSkills, name: argName, tags: argTags, type: argType })}`} prefetch={false}>{"検索条件変更"}</Link>
        </div>
      </div>

      <Suspense fallback={<Loading />}>
        <Characters args={args} />
      </Suspense>
    </div>
  );
}
