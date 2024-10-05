import { z } from "zod";
import {
  CharacterSkills,
  Name,
  Rarity,
  Sex,
  Tags,
  Type,
} from "../_common/schema";

const SkillSchema = z.object({
  plusUltra: z.object({
    name: z.string(),
    description: z.string(),
  }),
  actionSkill1: z.object({
    name: z.string(),
    description: z.string(),
    coolTime: z.string(),
  }),
  actionSkill2: z.object({
    name: z.string(),
    description: z.string(),
    coolTime: z.string(),
  }),
  autoSkill1: z.object({
    name: z.string(),
    description: z.string(),
  }),
  autoSkill2: z.object({
    name: z.string(),
    description: z.string(),
  }),
});

export const CharacterSchema = z.object({
  id: z.string(),
  epithet: z.string(),
  name: Name,
  rarity: Rarity,
  type: Type,
  sex: Sex,
  skills: z.array(CharacterSkills),
  tags: z.array(Tags),
  stats: z.array(
    z.object({
      hp: z.string(),
      power: z.string(),
      speed: z.string(),
      defense: z.string(),
      critical: z.string(),
    }),
  ),
  skill: z.object({
    levelone: SkillSchema,
    leveltwo: SkillSchema,
    levelthree: SkillSchema,
    dxlevelone: SkillSchema,
    dxleveltwo: SkillSchema,
  }),
  uniqueSkills: z.array(z.string()),
});

export const CharactersSchema = z.object({
  characters: z.array(CharacterSchema),
});

export const CharactersResponseSchema = z.object({
  characters: z.array(CharacterSchema),
  result: z.object({
    offset: z.number(),
    limit: z.number(),
    total: z.number(),
  }),
});
