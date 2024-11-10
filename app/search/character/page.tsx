"use client";

import { CharacterSkills, Name, Rarity, Tags, Type } from "@/app/_data/_common/schema";
import { Link } from "@/app/_parts/Link";
import { Select } from "@/app/_parts/Select";
import { useMemo, useState } from "react";
import { ResetButton } from "../_components/reset-button";
import { createQuery } from "../_lib/create-query";
import { getTypeLabel } from "../_lib/utils";

export default function Page(args: {
  searchParams: {
    rarity?: string;
    type?: string;
    name?: string;
    skills?: string;
    tags?: string;
  };
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

  const searchUrl = useMemo(() => {
    const query = createQuery({ rarity, skills, name, tags, type });
    return `/search/character/result?${query}`;
  }, [rarity, skills, name, tags, type]);

  return (
    <div className="py-1 px-3">
      <div className="mb-3">
        <div>
          <Select
            items={Rarity.options.map((rarity) => ({
              label: rarity.toUpperCase(),
              value: rarity,
            }))}
            label="レアリティ"
            placeholdertext={"レアリティを選択してください"}
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
            items={Type.options.map((type) => ({
              label: getTypeLabel(type),
              value: type,
            }))}
            label="タイプ"
            placeholdertext={"タイプを選んでください"}
            value={[type]}
            // @ts-ignore
            setValue={(values: string[]) => {
              values.length > 0 && setType(values[0]);
            }}
            isMultiple={false}
          />
        </div>

        <div className="my-2">
          <Select
            items={Name.options.map((name) => ({ label: name, value: name }))}
            label="キャラクター名"
            placeholdertext={"キャラクター名を選んでください"}
            value={[name]}
            // @ts-ignore
            setValue={(values: string[]) => {
              values.length > 0 && setName(values[0]);
            }}
            isMultiple={false}
          />
        </div>

        <div className="my-2">
          <Select
            items={Tags.options.map((tag) => ({ label: tag, value: tag }))}
            label="所属"
            placeholdertext={"所属を選んでください"}
            value={[tags]}
            // @ts-ignore
            setValue={(values: string[]) => {
              values.length > 0 && setTags(values[0]);
            }}
            isMultiple={false}
          />
        </div>

        <div className="my-2">
          <Select
            items={CharacterSkills.options
              .map((skill) => ({ label: skill, value: skill }))
              .sort((a, b) => a.label.localeCompare(b.label))}
            label="スキル効果"
            placeholdertext={"スキル効果を選んでください"}
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
              setType={setType}
              setName={setName}
              setSkills={setSkills}
              setTags={setTags}
            />
          </div>
          <div className="flex-initial">
            <Link href={searchUrl} disabled={skills.length === 0 && !rarity && !type && !name && !tags}>{"検索"}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
