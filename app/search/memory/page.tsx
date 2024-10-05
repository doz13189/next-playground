"use client";

import { MemorySkills } from "@/app/_data/_common/schema";
import { FilterButton } from "../_components/filter-button";
import { RarityForm } from "../_components/rarity-form";
import { ResetButton } from "../_components/reset-button";
import { SkillForm } from "../_components/skill-form";
import { useState } from "react";
import { MemoryNameForm } from "../_components/memory-name-form";

export default function Page(args: {
	searchParams: { rarity: string; skills: string; name: string };
}) {
	const argRarity = args.searchParams?.rarity;
	const argSkills = args.searchParams?.skills?.split(",");
	const argName = args.searchParams?.name;

	const [rarity, setRarity] = useState(argRarity || "");
	const [skills, setSkills] = useState<string[]>(argSkills || []);
	const [name, setName] = useState(argName || "");

	return (
		<div className="py-1 px-3">
			<div className="mb-3">
				<div>
					<MemoryNameForm name={name} setName={setName} />
				</div>

				<div className="my-2">
					<RarityForm rarity={rarity} setRarity={setRarity} />
				</div>

				<div className="my-2">
					<SkillForm skills={skills} setSkills={setSkills} skillArray={MemorySkills} />
				</div>

				<label
					htmlFor="search"
					className="text-sm font-medium text-gray-900 sr-only text-white"
				>
					Search
				</label>
				<div className="flex justify-end">
					<div className="flex-initial">
						<ResetButton setRarity={setRarity} setSkills={setSkills} setName={setName} />
					</div>
					<div className="flex-initial">
						<FilterButton pathname="memory" rarity={rarity} skills={skills} name={name} />
					</div>
				</div>
			</div>
		</div>
	);
}
