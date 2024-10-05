import { Rarity } from "@/app/_data/_common/schema";
import type { Dispatch, FC, SetStateAction } from "react";
import { Select } from "../_parts/Select";

export const RarityForm: FC<{
  rarity: string;
  setRarity: Dispatch<SetStateAction<string>>;
}> = ({ rarity, setRarity }) => {
  return (
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
  );
};
