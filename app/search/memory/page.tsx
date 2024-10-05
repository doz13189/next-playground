"use client";

import { MemorySkills, Rarity } from "@/app/_data/_common/schema";
import { useState } from "react";
import { FilterButton } from "../_components/filter-button";
import { MemoryNameForm } from "../_components/memory-name-form";
import { RarityForm } from "../_components/rarity-form";
import { ResetButton } from "../_components/reset-button";
import { SkillForm } from "../_components/skill-form";

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
          <SkillForm
            skills={skills}
            setSkills={setSkills}
            skillArray={MemorySkills}
          />
        </div>

        <label
          htmlFor="search"
          className="text-sm font-medium text-gray-900 sr-only text-white"
        >
          Search
        </label>
        <div className="flex justify-end">
          <div className="flex-initial">
            <ResetButton
              setRarity={setRarity}
              setSkills={setSkills}
              setName={setName}
            />
          </div>
          <div className="flex-initial">
            <FilterButton
              pathname="memory"
              rarity={rarity}
              skills={skills}
              name={name}
            />
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
