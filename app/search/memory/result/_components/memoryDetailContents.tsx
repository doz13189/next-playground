"use client";

import { FC, useState } from "react";
import { z } from "zod";
import { MemorySchema } from "@/app/_data/memory/schema";
import Image from "next/image";

const getMemoryContent = (activeTabState: number, memory: z.infer<typeof MemorySchema>) => {
	switch (activeTabState) {
		case 0:
			return memory.description.skilllv1;
		case 1:
			return memory.description.skilllv2;
		case 2:
			return memory.description.skilllv3;
		case 3:
			return memory.description.skilldxlv1;
		default:
			return memory.description.skilldxlv1;
	}
}

export const MemoryDetailContents: FC<{ memory: z.infer<typeof MemorySchema> }> = ({
	memory,
}) => {
	const initialActiveTabState = memory.rarity === "r" ? 2 : 3;
	const [activeTabState, setActiveTabState] = useState<0 | 1 | 2 | 3>(initialActiveTabState);

	return (
		<div>
			<ul className="my-3 flex flex-wrap text-xs font-medium text-center text-gray-500">
				<li className="me-2">
					<button
						onClick={() => setActiveTabState(0)}
						className={`
						inline-block px-2 py-1 rounded-lg
						${activeTabState === 0 ? "text-white bg-orange active" : "hover:text-gray-900 hover:bg-gray-100"}
				`} aria-current="page">Lv.1</button>
				</li>
				<li className="me-2">
					<button
						onClick={() => setActiveTabState(1)}
						className={`
					inline-block px-2 py-1 rounded-lg
					${activeTabState === 1 ? "text-white bg-orange active" : "hover:text-gray-900 hover:bg-gray-100"}
				`}>Lv.2</button>
				</li>
				<li className="me-2">
					<button
						onClick={() => setActiveTabState(2)}
						className={`
					inline-block px-2 py-1 rounded-lg
					${activeTabState === 2 ? "text-white bg-orange active" : "hover:text-gray-900 hover:bg-gray-100"}
				`}>Lv.3</button>
				</li>
				{memory.rarity === "r" ? null : <li className="me-2">
					<button
						onClick={() => setActiveTabState(3)}
						className={`
					inline-block px-2 py-1 rounded-lg
					${activeTabState === 3 ? "text-white bg-orange active" : "hover:text-gray-900 hover:bg-gray-100"}
				`}>DX Lv.1</button>
				</li>}

			</ul>

			<div className="py-2">
				<p className="text-orange text-xs">効果</p>

				<div className="
					mt-1
					p-1
					text-xs
					bg-very-light-gray
					rounded-lg
				">{(getMemoryContent(activeTabState, memory))}</div>

			</div>

			<div className="py-2">
				<div className="relative w-full h-64">
					<p className="absolute top-0 left-0 text-orange text-xs">フルイメージ</p>
					<Image
						src={`/memory-image/memory_l_${memory.id}.webp`}
						style={{ objectFit: "contain" }}
						fill
						priority={false}
						alt="memory"
					/>
				</div>
			</div>

		</div>

	);
};

