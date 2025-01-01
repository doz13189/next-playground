"use client";

import { css } from "@/styled-system/css";
import { Box } from "@/styled-system/jsx";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { type FC, useTransition } from "react";
import { NavigationLoading } from "../_parts/navigation-loading";
import { buttonRecipe } from "../_parts/recipes/button";

export const Menu: FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const isHomePage = pathname.includes("/home");
  const isCharacterPage = pathname.includes("/search/character");
  const isMemoryPage = pathname.includes("/search/memory");

  return (
    <Box className={css({
      display: 'flex',
      flexDirection: 'row',
      justifyContent: "space-around",
      width: 'full',
    })}>
      {isPending && <NavigationLoading />}

      <Box width={"full"} margin={"1"} paddingY={"2"}>
        <Link
          href="/home"
          onClick={() => {
            startTransition(() => {
              router.push("/home");
            });
          }}
        >
          <Box
            className={buttonRecipe({ active: isHomePage, fullWidth: true })}
          >
            ホーム
          </Box>
        </Link >
      </Box>


      <Box width={"full"} margin={"1"} paddingY={"2"}>
        <Link
          href="/search/character"
          onClick={() => {
            startTransition(() => {
              router.push("/search/character");
            });
          }}
          prefetch={false}
        >
          <Box
            className={buttonRecipe({ active: isCharacterPage, fullWidth: true })}
          >
            プレイキャラ検索
          </Box>

        </Link>
      </Box>

      <Box width={"full"} margin={"1"} paddingY={"2"}>
        <Link
          href="/search/memory"
          onClick={() => {
            startTransition(() => {
              router.push("/search/memory");
            });
          }}
          prefetch={false}
        >
          <Box
            className={buttonRecipe({ active: isMemoryPage, fullWidth: true })}
          >
            メモリー検索
          </Box>
        </Link >
      </Box>
    </Box >
  );
};
