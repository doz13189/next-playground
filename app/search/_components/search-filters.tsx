
import { FC } from "react";
import { getTypeLabel } from "../_lib/utils";
import { Type } from "@/app/_data/_common/schema";
import { z } from "zod";

export const SearchFilters: FC<{ rarity: string; skills: string[], type?: string;  name?: string; tags?: string }> = ({
	rarity,
	type,
	skills,
	name,
	tags
}) => {
	return (
		<div className="relative">
			<div className="inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
				<svg
					className="w-4 h-4 text-gray-500 text-gray-400"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 20 20"
				>
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
					/>
				</svg>
			</div>
			<div className="ps-10">
				{rarity &&
					<span
						key={rarity}
						className="inline-block text-xs"
					>
						{`${rarity.toUpperCase()},`}
					</span>
				}
				{type &&
					<span
						key={type}
						className="inline-block text-xs"
					>
						{`${getTypeLabel(type as z.infer<typeof Type>)},`}
					</span>
				}
				{name &&
					<span
						key={name}
						className="inline-block text-xs"
					>
						{`${name},`}
					</span>
				}
				{tags &&
					<span
						key={tags}
						className="inline-block text-xs"
					>
						{`${tags},`}
					</span>
				}
				{skills?.map((skill) => (
					<span
						key={skill}
						className="inline-block text-xs"
					>
						{`${skill},`}
					</span>
				))}
			</div>

		</div>
	);
};