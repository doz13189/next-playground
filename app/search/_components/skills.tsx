import type { CharacterSchema } from "@/app/_data/character/schema";
import type { MemorySchema } from "@/app/_data/memory/schema";
import { Typography } from "@/app/_parts/typography";
import { css } from "@/styled-system/css";
import type { FC } from "react";
import type { z } from "zod";

export const Skills: FC<{
  skills:
  | z.infer<typeof CharacterSchema>["skills"]
  | z.infer<typeof MemorySchema>["skills"];
}> = ({ skills }) => {
  return (
    <>
      {Array.from(new Set(skills))
        .sort()
        .map((tag) => (
          <span
            key={tag}
            className={css({
              display: 'inline-block',
              bg: 'tertiary',
              color: 'black',
              paddingY: '1',
              paddingX: '2',
              marginRight: '2',
              marginY: '1',
              borderRadius: "6px",
            })}
          >
            <Typography>{tag}</Typography>
          </span>
        ))}
    </>
  );
};
