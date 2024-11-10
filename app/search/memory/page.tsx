"use client";

import { MemorySkills, Rarity } from "@/app/_data/_common/schema";
import { Input } from "@/app/_parts/Field";
import { Link } from "@/app/_parts/Link";
import { Select } from "@/app/_parts/Select";
import { useState } from "react";
import { ResetButton } from "../_components/reset-button";
import { createQuery } from "../_lib/create-query";

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
          <Input setValue={setName} value={name} label="メモリー名" />
        </div>

        <div className="my-2">
          <Select
            items={Rarity.options.map((rarity) => ({
              label: rarity.toUpperCase(),
              value: rarity,
            }))}
            label="レアリティ"
            placeholderText={"レアリティを選択してください"}
            value={[rarity]}
            // @ts-ignore
            setValue={(values: string[]) => {
              values.length > 0 && setRarity(values[0]);
            }}
            isMultiple={false}
          />
        </div>

        <div className="my-2">
          <Select
            items={MemorySkills.options
              .map((skill) => ({ label: skill, value: skill }))
              .sort((a, b) => a.label.localeCompare(b.label))}
            label="スキル効果"
            placeholderText={"スキル効果を選んでください"}
            value={skills}
            setValue={setSkills}
            isMultiple={true}
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
            <Link href={`/search/memory?${createQuery({ rarity: argRarity, skills: argSkills, name: argName })}`} disabled={skills.length === 0 && !rarity && !name}>{"検索"}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
