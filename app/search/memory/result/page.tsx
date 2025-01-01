import { MainLayout } from "@/app/_components/main-layout";
import { Link } from "@/app/_parts/link";
import { Skeleton } from "@/app/_parts/skeleton";
import { css } from "@/styled-system/css";
import { Box, Flex } from "@/styled-system/jsx";
import { Suspense } from "react";
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
    <Box>
      <Box>
        <SearchFilters rarity={argRarity} skills={argSkills} name={argName} />
        <Flex
          className={css({
            justifyContent: "end",
          })}
        >
          <Link href={`/search/memory?${createQuery({ rarity: argRarity, skills: argSkills, name: argName })}`} prefetch={false}>{"検索条件変更"}</Link>
        </Flex>
      </Box>

      <Suspense fallback={
        Array.from({ length: 10 }, (_, index) => index).map((_) => (
          <MainLayout key={_}>
            <Skeleton>
              <Box height={"96px"} margin={"1"} paddingY={"2"} />
            </Skeleton>
          </MainLayout>)
        )
      }>
        <Memories args={args} />
      </Suspense>
    </Box>
  );
}
