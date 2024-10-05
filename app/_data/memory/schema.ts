import { z } from "zod";
import { MemorySkills, Rarity } from "../_common/schema";

export const MemorySchema = z.object({
  id: z.string(),
  name: z.string(),
  rarity: Rarity,
  skills: z.array(MemorySkills),
  stats: z.array(
    z.object({
      hp: z.string(),
      power: z.string(),
      speed: z.string(),
    }),
  ),
  description: z.object({
    skilllv1: z.string(),
    skilllv2: z.string(),
    skilllv3: z.string(),
    skilldxlv1: z.string(),
  }),
});

export const MemoriesSchema = z.object({
  memories: z.array(MemorySchema),
});

export const MemoriesResponseSchema = z.object({
  memories: z.array(MemorySchema),
  result: z.object({
    offset: z.number(),
    limit: z.number(),
    total: z.number(),
  }),
});
