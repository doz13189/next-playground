"use client";

import { css } from "@/styled-system/css";
import { Box } from "@/styled-system/jsx";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { type FC, useTransition } from "react";
import { NavigationLoading } from "../_parts/NavigationLoading";

const linkStyle = (isActive: boolean) => css({
  width: 'full',
  fontSize: 'xs',
  margin: '1',
  paddingY: '2',
  display: 'flex',
  justifyContent: 'center',
  borderWidth: '2px',
  borderRadius: 'lg',
  backgroundColor: isActive ? 'primary' : "white",
  color: isActive ? 'white' : "primary",
  borderColor: 'primary',
});

export const Menu: FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const isHome = pathname.includes("/home");
  const isCharacterPage = pathname.includes("/search/character");
  const isMemoryPage = pathname.includes("/search/memory");

  return (
    <Box className={css({
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: 'full',
    })}>
      {isPending && <NavigationLoading />}

      <Link
        href="/home"
        className={linkStyle(isHome)}
        onClick={() => {
          startTransition(() => {
            router.push("/home");
          });
        }}
      >
        ホーム
      </Link>
      <Link
        href="/search/character"
        className={linkStyle(isCharacterPage)}
        onClick={() => {
          startTransition(() => {
            router.push("/search/character");
          });
        }}
        prefetch={false}
      >
        プレイキャラ検索
      </Link>
      <Link
        href="/search/memory"
        className={linkStyle(isMemoryPage)}
        onClick={() => {
          startTransition(() => {
            router.push("/search/memory");
          });
        }}
        prefetch={false}
      >
        メモリー検索
      </Link>
    </Box>
  );
};
