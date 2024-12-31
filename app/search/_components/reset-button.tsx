"use client";

import { Button } from "@/app/_parts/button";
import type { FC, SetStateAction } from "react";

export const ResetButton: FC<{
  setRarity: (value: SetStateAction<string>) => void;
  setSkills: (value: SetStateAction<string[]>) => void;
  setType?: (value: SetStateAction<string>) => void;
  setName?: (value: SetStateAction<string>) => void;
  setTags?: (value: SetStateAction<string>) => void;
}> = ({ setRarity, setSkills, setType, setName, setTags }) => {
  return (
    <Button
      type="submit"
      height={"8"}
      width={"32"}
      onClick={() => {
        setRarity("");
        setSkills([]);
        setType?.("")
        setName?.("");
        setTags?.("");
      }}
    >
      リセット
    </Button>
  );
};
