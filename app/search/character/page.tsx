"use client";

import { MainLayout } from "@/app/_components/main-layout";
import { CharacterSkills, Name, Rarity, Tags, Type } from "@/app/_data/_common/schema";
import { useDebounce } from "@/app/_hooks/use-debounce";
import { Link } from "@/app/_parts/link";
import { Select } from "@/app/_parts/select";
import { Box, HStack, Spacer } from "@/styled-system/jsx";
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

  // biome-ignore lint/correctness/useExhaustiveDependencies:
  const memorizedQuery = useMemo(() => {
    return createQuery({ rarity, skills, name, tags, type });
  }, [rarity, JSON.stringify(skills), name, tags, type]);
  const [query, debounceState] = useDebounce(memorizedQuery, 500);

  return (
    <MainLayout>
      <Box marginBottom={"2"}>
        <Box marginBottom={"2"}>
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
        </Box>

        <Box marginBottom={"2"}>
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
        </Box>

        <Box marginBottom={"2"}>
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
        </Box>

        <Box marginBottom={"2"}>
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
        </Box>

        <Box marginBottom={"2"}>
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
        </Box>

        <HStack>
          <Spacer />
          <Box>
            <ResetButton
              setRarity={setRarity}
              setType={setType}
              setName={setName}
              setSkills={setSkills}
              setTags={setTags}
            />
          </Box>
          <Box>
            <Link
              href={`/search/character/result?${query}`}
              disabled={(skills.length === 0 && !rarity && !type && !name && !tags) || debounceState !== "ready"}
              // NOTE: クエリーが空の状態で遷移は発生しないため prefetch を抑止する
              prefetch={(query !== "")}
              loading={debounceState === "idle" || debounceState === "debouncing"}
            >{"検索"}</Link>
          </Box>
        </HStack>
      </Box>
    </MainLayout>
  );
}
