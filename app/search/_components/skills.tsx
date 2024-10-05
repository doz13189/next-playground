import type { CharacterSchema } from "@/app/_data/character/schema";
import type { MemorySchema } from "@/app/_data/memory/schema";
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
            className="inline-block bg-yellow text-yellow-800 text-xs me-2 px-3.5 py-0.5 rounded"
          >
            {tag}
          </span>
        ))}
    </>
  );
};
