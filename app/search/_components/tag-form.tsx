"use client";

import { Tags } from "@/app/_data/_common/schema";
import {
  ChangeEvent,
  type Dispatch,
  type FC,
  type SetStateAction,
} from "react";
import { Select } from "../../_parts/Select";

export const TagForm: FC<{
  tags: string;
  setTags: Dispatch<SetStateAction<string>>;
}> = ({ tags, setTags }) => {
  return (
    <Select
      items={Tags.options.map((tag) => ({ label: tag, value: tag }))}
      label="所属"
      placeholderText={"所属を選んでください"}
      value={[tags]}
      // @ts-ignore
      setValue={(values: string[]) => {
        values.length > 0 && setTags(values[0]);
      }}
      isMultiple={false}
    />
  );
};
