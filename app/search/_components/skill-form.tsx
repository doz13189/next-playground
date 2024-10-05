"use client";

import type { CharacterSkills, MemorySkills } from "@/app/_data/_common/schema";
import type { Dispatch, FC, SetStateAction } from "react";
import { Select } from "../_parts/Select";

export const SkillForm: FC<{
  skills: string[];
  setSkills: Dispatch<SetStateAction<string[]>>;
  skillArray: typeof MemorySkills | typeof CharacterSkills;
}> = ({ skills, setSkills, skillArray }) => {
  return (
    <Select
      items={skillArray.options
        .map((skill) => ({ label: skill, value: skill }))
        .sort((a, b) => a.label.localeCompare(b.label))}
      label="スキル効果"
      placeholderText={"スキル効果を選んでください"}
      value={skills}
      setValue={setSkills}
      isMultiple={true}
    />
  );
};
