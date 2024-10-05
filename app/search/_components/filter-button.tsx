"use client";

import { useRouter } from "next/navigation";
import type { FC } from "react";
import { createQuery } from "../_lib/create-query";
import { SubmitButton } from "../_parts/SubmitButton";

export const FilterButton: FC<{
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
      onClick={() => {
        router.push(
          `/search/${pathname}/result?${createQuery({
            rarity,
            skills,
            name,
            tags,
            type,
          })}`,
        );
      }}
      disabled={skills.length === 0 && !rarity && !type && !name && !tags}
    >
      {"検索"}
    </SubmitButton>
  );
};
