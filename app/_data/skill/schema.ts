import { z } from "zod";
import { CharacterSkills, MemorySkills } from "../_common/schema";

export const SkillSchema = z.object({
  name: z.union([MemorySkills, CharacterSkills]),
  description: z.string(),
  iconUrl: z.string().optional(),
});

export const SkillsSchema = z.object({
  skills: z.array(SkillSchema),
});
