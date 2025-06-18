"use client";

import { MainLayout } from "@/app/_components/main-layout";
import { MemorySkills, Rarity } from "@/app/_data/_common/schema";
import { useDebounce } from "@/app/_hooks/use-debounce";
import { Button } from "@/app/_parts/button";
import { Input } from "@/app/_parts/field";
import { Link } from "@/app/_parts/link";
import { Select } from "@/app/_parts/select";
import { Box, HStack, Spacer, VStack } from "@/styled-system/jsx";
import { useMemo, useState } from "react";
import { ResetButton } from "../_components/reset-button";
import { createQuery } from "../_lib/create-query";

export default function Page(args: {
  searchParams: { rarity: string; skills: string; name: string, skillDescriptions: string; };
}) {
  const argRarity = args.searchParams?.rarity;
  const argSkills = args.searchParams?.skills?.split(",");
  const argName = args.searchParams?.name;
  const argSkillDescriptions = args.searchParams?.skillDescriptions?.split(",") || [""];

  const [rarity, setRarity] = useState(argRarity || "");
  const [skills, setSkills] = useState<string[]>(argSkills || []);
  const [name, setName] = useState(argName || "");
  const [skillDescriptions, setSkillDescriptions] = useState<string[]>(argSkillDescriptions);

  // biome-ignore lint/correctness/useExhaustiveDependencies:
  const memorizedQuery = useMemo(() => {
    return createQuery({ rarity, skills, name, skillDescriptions: skillDescriptions });
  }, [rarity, JSON.stringify(skills), name, skillDescriptions]);

  const [query, debounceState] = useDebounce(memorizedQuery, 500)

  const addSkillDescriptionField = () => {
    setSkillDescriptions([...skillDescriptions, ""]);
  };

  const removeSkillDescriptionField = (index: number) => {
    if (skillDescriptions.length > 1) {
      const newDescriptions = skillDescriptions.filter((_, i) => i !== index);
      setSkillDescriptions(newDescriptions);
    }
  };

  const updateSkillDescription = (index: number, value: React.SetStateAction<string>) => {
    const newDescriptions = [...skillDescriptions];
    const actualValue = typeof value === 'function' ? value(skillDescriptions[index]) : value;
    newDescriptions[index] = actualValue;
    setSkillDescriptions(newDescriptions);
  };

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

      <Box marginBottom={"2"}>
        <VStack alignItems="flex-start" gap="2">
          <Box fontWeight="medium" fontSize="sm">
            スキル効果（フリーワード）
          </Box>
          {skillDescriptions.map((description, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey:
            <HStack key={index} width="full" gap="2">
              <Box flex="1">
                <Input
                  setValue={(value) => updateSkillDescription(index, value)}
                  value={description}
                  label=""
                  placeholder="フリーワードを入力"
                />
              </Box>
              {skillDescriptions.length > 1 && (
                <Button
                  height={"8"}
                  width={"16"}
                  backgroundColor={"#5D5D5D"}
                  onClick={() => removeSkillDescriptionField(index)}
                >
                  削除
                </Button>
              )}
            </HStack>
          ))}

          <Button
            height={"8"}
            width={"32"}
            backgroundColor={"#5D5D5D"}
            disabled={skillDescriptions.length >= 5}
            onClick={addSkillDescriptionField}
          >
            <span>+</span>
            フリーワード追加
          </Button>
        </VStack>
      </Box>

      <HStack>
        <Spacer />
        <Box>
          <ResetButton
            setRarity={setRarity}
            setSkills={setSkills}
            setName={setName}
            setSkillDescriptions={setSkillDescriptions}
          />
        </Box>
        <Box>
          <Link
            href={`/search/memory/result?${query}`}
            disabled={(skills.length === 0 && !rarity && !name && skillDescriptions.filter(value => value !== "").length === 0) || debounceState !== "ready"}
            // NOTE: クエリーが空の状態で遷移は発生しないため prefetch を抑止する
            prefetch={query !== ""}
            loading={debounceState === "idle" || debounceState === "debouncing"}
          >{"検索"}</Link>
        </Box>
      </HStack>
    </MainLayout>
  );
}