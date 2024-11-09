"use client";

import { useRouter } from "next/navigation";
import type { FC } from "react";
import { SubmitButton } from "../../_parts/SubmitButton";
import { createQuery } from "../_lib/create-query";

export const EditFilterButton: FC<{
  pathname: string;
  rarity: string;
  skills: string[];
  type?: string;
  name?: string;
  tags?: string;
}> = ({ pathname, rarity, type, skills, name, tags }) => {
  const router = useRouter();

  return (
    <SubmitButton
      onClick={() =>
        router.push(
          `/search/${pathname}?${createQuery({ rarity, skills, name, tags, type })}`,
        )
      }
    >
      {"検索条件変更"}
    </SubmitButton>
  );
};
