"use client";

import { Button } from "@/app/_parts/button";
import { createQuery } from "@/app/search/_lib/create-query";
import { useRouter } from "next/navigation";
import type { FC } from "react";

export const NextPage: FC<{
  pathname: string;
  total: number;
  rarity: string;
  skills: string[];
  type?: string;
  name?: string;
  skillDescriptions?: string[];
  tags?: string;
  offset?: string;
  limit?: string;
}> = ({ pathname, total, rarity, skills, type, name, skillDescriptions, tags, offset, limit }) => {
  const router = useRouter();
  const nextOffset = Number(offset) + Number(limit);
  const disable = total <= nextOffset;

  return (
    <Button
      type="submit"
      height={"8"}
      width={"32"}
      onClick={() =>
        router.push(
          `/search/${pathname}/result?${createQuery({ rarity, skills, type, name, skillDescriptions, tags, offset: String(nextOffset), limit })}`,
        )
      }
      disabled={disable}
    >次ページへ</Button>
  );
};

export const BackPage: FC<{
  pathname: string;
  total: number;
  rarity: string;
  skills: string[];
  skillDescriptions?: string[];
  type?: string;
  name?: string;
  tags?: string;
  offset?: string;
  limit?: string;
}> = ({ pathname, rarity, skills, type, name, skillDescriptions, tags, offset, limit }) => {
  const router = useRouter();
  const nextOffset = Number(offset) - Number(limit);
  const disable = nextOffset < 0;

  return (
    <Button
      type="submit"
      height={"8"}
      width={"32"}
      onClick={() =>
        router.push(
          `/search/${pathname}/result?${createQuery({ rarity, skills, type, name, skillDescriptions, tags, offset: String(nextOffset), limit })}`,
        )
      }
      disabled={disable}
    >前のページへ</Button>
  );
};

export const AllPage: FC<{
  pathname: string;
  total: number;
  rarity: string;
  skills: string[];
  type?: string;
  name?: string;
  skillDescriptions?: string[];
  tags?: string;
  offset?: string;
  limit?: string;
}> = ({ pathname, total, rarity, skills, type, name, skillDescriptions, tags, offset, limit }) => {
  const router = useRouter();
  const disable = Number(limit) >= total;

  return (
    <Button
      type="submit"
      height={"8"}
      width={"32"}
      onClick={() =>
        router.push(
          `/search/${pathname}/result?${createQuery({ rarity, skills, type, name, skillDescriptions, tags, offset: String(0), limit: String(total) })}`,
        )
      }
      disabled={disable}
    >
      全て表示する
    </Button>
  );
};
