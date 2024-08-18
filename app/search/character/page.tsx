"use client";

import { CharacterSkills } from "@/app/_data/_common/schema";
import { FilterButton } from "../_components/filter-button";
import { RarityForm } from "../_components/rarity-form";
import { ResetButton } from "../_components/reset-button";
import { SearchFilters } from "../_components/search-filters";
import { SkillForm } from "../_components/skill-form";
import { useState } from "react";
import { NameForm } from "../_components/name-form";
import { TagForm } from "../_components/tag-form";
import { TypeForm } from "../_components/type-form";

export default function Page(args: {
	searchParams: { rarity?: string; type?: string; name?: string; skills?: string; tags?: string };
}) {
	const argRarity = args.searchParams?.rarity;
	const argType = args.searchParams?.type;
	const argSkills = args.searchParams?.skills?.split(",");
	const argName = args.searchParams?.name;
	const argTags = args.searchParams?.tags;

	const [rarity, setRarity] = useState(argRarity || "");
	const [type, setType] = useState(argType || "");
	const [skills, setSkills] = useState<string[]>(argSkills || []);
	const [name, setName] = useState(argName || "");
	const [tags, setTags] = useState<string>(argTags || "");

	return (
		<div className="py-1 px-3">
			<div className="mb-3">
				<div>
					<RarityForm rarity={rarity} setRarity={setRarity} />
				</div>

				<div className="my-2">
					<TypeForm type={type} setType={setType} />
				</div>

				<div className="my-2">
					<NameForm name={name} setName={setName} />
				</div>

				<div className="my-2">
					<TagForm tags={tags} setTags={setTags} />
				</div>

				<div className="my-2">
					<SkillForm skills={skills} setSkills={setSkills} skillArray={CharacterSkills} />
				</div>

				<label
					htmlFor="search"
					className="text-sm font-medium text-gray-900 sr-only text-white"
				>
					Search
				</label>
				
				<div className="flex justify-end">
					<div className="flex-initial">
						<ResetButton setRarity={setRarity} setType={setType} setName={setName} setSkills={setSkills} setTags={setTags} />
					</div>
					<div className="flex-initial">
						<FilterButton pathname="character" rarity={rarity} type={type} name={name} skills={skills} tags={tags} />
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
