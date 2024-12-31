"use client";

import { MainLayout } from "@/app/_components/main-layout";
import { MemorySkills, Rarity } from "@/app/_data/_common/schema";
import { useDebounce } from "@/app/_hooks/use-debounce";
import { Input } from "@/app/_parts/Field";
import { Select } from "@/app/_parts/Select";
import { Link } from "@/app/_parts/link";
import { Box, HStack, Spacer } from "@/styled-system/jsx";
import { useMemo, useState } from "react";
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

  // biome-ignore lint/correctness/useExhaustiveDependencies:
  const memorizedQuery = useMemo(() => {
    return createQuery({ rarity, skills, name });
  }, [rarity, JSON.stringify(skills), name]);

  const [query, debounceState] = useDebounce(memorizedQuery, 500)

  return (
    <MainLayout>
      <Box marginBottom={"2"}>
        <Input setValue={setName} value={name} label="メモリー名" />
      </Box>

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
          items={MemorySkills.options
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
            setSkills={setSkills}
            setName={setName}
          />
        </Box>
        <Box>
          <Link
            href={`/search/memory/result?${query}`}
            disabled={(skills.length === 0 && !rarity && !name) || debounceState !== "ready"}
            // NOTE: クエリーが空の状態で遷移は発生しないため prefetch を抑止する
            prefetch={query !== ""}
            loading={debounceState === "idle" || debounceState === "debouncing"}
          >{"検索"}</Link>
        </Box>
      </HStack>
    </MainLayout>
  );
}
