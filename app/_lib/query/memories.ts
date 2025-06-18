import type { MemorySkills } from "@/app/_data/_common/schema";
import { memories } from "@/app/_data/memory/object";
import type { MemorySchema } from "@/app/_data/memory/schema";
import type { z } from "zod";

export const queryMemories = async ({
  rarity,
  skills,
  name,
  skillDescriptions,
  offset,
  limit,
}: {
  rarity: string;
  skills: string;
  name: string;
  skillDescriptions: string;
  offset: string;
  limit: string;
}) => {
  let response = memories.memories;
  if (rarity) {
    response = response.filter((memory: z.infer<typeof MemorySchema>) => {
      return memory.rarity === rarity;
    });
  }

  if (skills) {
    skills?.split(",").map((skill) => {
      response = response.filter((memory: z.infer<typeof MemorySchema>) => {
        return memory.skills.includes(skill as z.infer<typeof MemorySkills>);
      });
    });
  }

  if (name) {
    response = response.filter((memory: z.infer<typeof MemorySchema>) => {
      return memory.name.includes(name);
    });
  }

  if (skillDescriptions) {
    skillDescriptions?.split(",").map((skillDescription) => {
      response = response.filter((memory: z.infer<typeof MemorySchema>) => {
        return (
          memory.description.skilllv1.includes(skillDescription) ||
          memory.description.skilllv1.includes(skillDescription) ||
          memory.description.skilllv2.includes(skillDescription) ||
          memory.description.skilllv3.includes(skillDescription) ||
          memory.description.skilldxlv1.includes(skillDescription)
        );
      });
    });
  }

  return {
    memories: response.slice(
      Number.parseInt(offset),
      Number.parseInt(offset) + Number.parseInt(limit)
    ),
    result: {
      offset: Number.parseInt(offset),
      limit: Number.parseInt(limit),
      total: response.length,
    },
  };
};
