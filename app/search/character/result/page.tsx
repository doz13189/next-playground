import { MainLayout } from "@/app/_components/main-layout";
import { Link } from "@/app/_parts/link";
import { Skeleton } from "@/app/_parts/skeleton";
import { css } from "@/styled-system/css";
import { Box, Flex, Spacer } from "@/styled-system/jsx";
import { Suspense, use } from "react";
import { SearchFilters } from "../../_components/search-filters";
import { createQuery } from "../../_lib/create-query";
import { Characters } from "./_components/list";

export default async function Page(args: {
  searchParams: Promise<{
    rarity: string;
    type: string;
    name: string;
    skills: string;
    tags: string;
    offset: string;
    limit: string;
  }>;
}) {
  const searchParams = use(args.searchParams)
  const argRarity = searchParams?.rarity;
  const argType = searchParams?.type;
  const argName = searchParams?.name;
  const argSkills = searchParams?.skills?.split(",");
  const argTags = searchParams?.tags;

  return (

    <Box>
      <Box>
        <SearchFilters
          rarity={argRarity}
          type={argType}
          name={argName}
          skills={argSkills}
          tags={argTags}
        />
        <Flex
          className={css({
            justifyContent: "end",
          })}
        >
          <Spacer />
          <Link href={`/search/character?${createQuery({ rarity: argRarity, skills: argSkills, name: argName, tags: argTags, type: argType })}`} prefetch={false}>{"検索条件変更"}</Link>
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
        <Characters args={args} />
      </Suspense>
    </Box>
  );
}
