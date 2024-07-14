"use client";

import { FC } from "react";
import { useRouter } from "next/navigation";
import { createQuery } from "@/app/search/_lib/create-query";

export const NextPage: FC<{ pathname: string, total: number, rarity: string; skills: string[], name?: string; tags?: string[], offset?: string, limit?: string }> = ({
	pathname,
	total,
	rarity,
	skills,
	name,
	tags,
	offset,
	limit,
}) => {
	const router = useRouter();
	const nextOffset = Number(offset) + Number(limit);
	const disable = total <= nextOffset;

	return (
		<button
		type="submit"
		className={`
		my-1
		px-4
		py-1
		text-sm
		border-2
		border-grey
		rounded-lg
		${disable ? "bg-gray-300 text-gray-500" : "bg-yellow"}

  `}
		onClick={() =>
			router.push(`/search/${pathname}/result?${createQuery(rarity, skills, name, tags, String(nextOffset), limit)}`)
		}
		disabled={disable}
	>
		次ページへ
	</button>
	);
};


export const BackPage: FC<{ pathname: string, total: number, rarity: string; skills: string[], name?: string; tags?: string[], offset?: string, limit?: string }> = ({
	pathname,
	rarity,
	skills,
	name,
	tags,
	offset,
	limit,
}) => {
	const router = useRouter();
	const nextOffset = Number(offset) - Number(limit);
	const disable = nextOffset < 0;

	return (
		<button
		type="submit"
		className={`
		my-1
		px-4
		py-1
		text-sm
		border-2
		border-grey
		rounded-lg
		${disable ? "bg-gray-300 text-gray-500" : "bg-yellow"}
  `}
     		
		onClick={() =>
			router.push(`/search/${pathname}/result?${createQuery(rarity, skills, name, tags, String(nextOffset), limit)}`)
		}
		disabled={disable}
	>
		前のページへ
	</button>
	);
};


export const AllPage: FC<{ pathname: string, total: number, rarity: string; skills: string[], name?: string; tags?: string[], offset?: string, limit?: string }> = ({
	pathname,
	total,
	rarity,
	skills,
	name,
	tags,
	offset,
	limit,
}) => {
	const router = useRouter();
	const disable = Number(limit) >= total;

	return (
		<button
		type="submit"
		className={`
		my-1
		px-4
		py-1
		text-sm
		border-2
		border-grey
		rounded-lg
		${disable ? "bg-gray-300 text-gray-500" : "bg-yellow"}

  `}
		onClick={() =>
			router.push(`/search/${pathname}/result?${createQuery(rarity, skills, name, tags, String(0), String(total))}`)
		}
		disabled={disable}
	>
		全て表示する
	</button>
	);
};
