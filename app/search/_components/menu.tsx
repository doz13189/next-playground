"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { FC } from "react";

export const Menu: FC = () => {
  const pathname = usePathname();
  const isHome = pathname.includes("/home");
  const isCharacterPage = pathname.includes("/search/character");
  const isMemoryPage = pathname.includes("/search/memory");
  return (
    <div className="flex">
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
        >
          メモリー検索
        </Link>
      </div>
    </div>
  );
};
