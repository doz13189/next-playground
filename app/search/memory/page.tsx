"use client";

import { MemorySkills } from "@/app/_data/_common/schema";
import { FilterButton } from "../_components/filter-button";
import { RarityForm } from "../_components/rarity-form";
import { ResetButton } from "../_components/reset-button";
import { SearchFilters } from "../_components/search-filters";
import { SkillForm } from "../_components/skill-form";
import { useState } from "react";

export default function Search(args: {
	searchParams: { rarity: string; skills: string };
}) {
	const argRarity = args.searchParams?.rarity;
	const argSkills = args.searchParams?.skills?.split(",");

	const [rarity, setRarity] = useState(argRarity || "");
	const [skills, setSkills] = useState<string[]>(argSkills || []);

	return (
		<div className="py-1 px-3">
			<div className="mb-3">
				<div>
					<RarityForm rarity={rarity} setRarity={setRarity} />
				</div>

				<div className="my-2">
					<SkillForm skills={skills} setSkills={setSkills} skillArray={MemorySkills} />
				</div>

				<SearchFilters rarity={rarity} skills={skills} />

				<label
					htmlFor="search"
					className="text-sm font-medium text-gray-900 sr-only text-white"
				>
					Search
				</label>
				<div className="flex justify-end">
					<div className="flex-initial">
						<ResetButton setRarity={setRarity} setSkills={setSkills} />
					</div>
					<div className="flex-initial">
						<FilterButton pathname="memory" rarity={rarity} skills={skills} />
					</div>
				</div>
			</div>

			{/*
			<div className="fixed bottom-3 left-1">
				<Link
					href={"/message"}
					className="
						my-1
						mx-1
						px-4
						py-1
						text-sm
						bg-yellow
						border-2
						border-grey
						rounded-lg
					"
				>
					Question
				</Link>
			</div>
			*/}
		</div>
	);
}
