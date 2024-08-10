"use client";

import { FC } from "react";
import { z } from "zod";
import { MemorySchema } from "@/app/_data/memory/schema";
import Image from "next/image";
import Link from "next/link";
import { getImageNameByRarity } from "@/app/search/_lib/utils";
import { Skills } from "@/app/search/_components/skills";

export const MemoryDefaultInfo: FC<{ memory: z.infer<typeof MemorySchema> }> = ({
	memory,
}) => {
	return (
		<Link href={`/search/memory/result/${memory.id}`}>
			<div className="flex">
				<div className="relative w-12 h-12">
					<Image
						src={`/memory-icon/icon_m_${memory.id}.webp`}
						width={50}
						height={50}
						alt="memory icon"
						className="absolute top-0 left-0"
					/>
					<Image
						src={`/frame/chara_frame_10${getImageNameByRarity(memory.rarity)}.webp`}
						width={50}
						height={50}
						alt="memory icon"
						className="absolute top-0 left-0"
					/>
					<Image
						src={`/rarity/card_rarity_0${getImageNameByRarity(memory.rarity)}.webp`}
						width={20}
						height={20}
						alt="memory icon"
						className="absolute top-0 left-0"
					/>
				</div>
				<div className="content-center mx-3">{`${memory.name}`}</div>
			</div>
			<Skills skills={[...memory.skills]} />
		</Link>
	);
};