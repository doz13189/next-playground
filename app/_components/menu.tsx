"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { type FC, useTransition } from "react";
import { NavigationLoading } from "../_parts/NavigationLoading";

export const Menu: FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const isHome = pathname.includes("/home");
  const isCharacterPage = pathname.includes("/search/character");
  const isMemoryPage = pathname.includes("/search/memory");

  return (
    <div className="flex">
      {isPending && <NavigationLoading />}
      <div className="flex-1">

        <Link
          href="/home"
          className={`
					text-xs
					m-1
					py-2
					flex
					justify-center
					border-2
					border-grey
					rounded-lg
					${isHome ? "bg-orange" : "bg-soft-orange text-grey"}
				`}
          onClick={() => {
            startTransition(() => {
              router.push("/home");
            });
          }}
        >
          ホーム
        </Link>
      </div>
      <div className="flex-1">
        <Link
          href="/search/character"
          className={`
					text-xs
					m-1
					py-2
					flex
					justify-center
					border-2
					border-grey
					rounded-lg
					${isCharacterPage ? "bg-orange" : "bg-soft-orange text-grey"}
				`}
          onClick={() => {
            startTransition(() => {
              router.push("/search/character");
            });
          }}
          prefetch={false}
        >
          プレイキャラ検索
        </Link>
      </div>
      <div className="flex-1">
        <Link
          href="/search/memory"
          className={`
					text-xs
					m-1
					py-2
					flex
					justify-center
					border-2
					border-grey
					rounded-lg
					${isMemoryPage ? "bg-orange" : "bg-soft-orange text-grey"}
					`}
          onClick={() => {
            startTransition(() => {
              router.push("/search/memory");
            });
          }}
          prefetch={false}
        >
          メモリー検索
        </Link>
      </div>
    </div>
  );
};
