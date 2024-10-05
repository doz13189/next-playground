import type { Rarity, Type } from "@/app/_data/_common/schema";
import type { z } from "zod";

export const getImageNameByRarity = (rarity: z.infer<typeof Rarity>) => {
  switch (rarity) {
    case "ur":
      return "4";
    case "sr":
      return "3";
    case "r":
      return "2";
    case "n":
      return "1";
    default:
      const _: never = rarity;
  }
};

export const getImageNameByAttribute = (rarity: z.infer<typeof Type>) => {
  switch (rarity) {
    case "str":
      return "1";
    case "abl":
      return "2";
    case "int":
      return "3";
    case "mnd":
      return "4";
    case "dst":
      return "5";
    default:
      const _: never = rarity;
  }
};

export const getTypeLabel = (type: z.infer<typeof Type>) => {
  switch (type) {
    case "str":
      return "力";
    case "abl":
      return "技";
    case "int":
      return "知";
    case "mnd":
      return "信";
    case "dst":
      return "破";
    default:
      const _: never = type;
      throw new Error("Unknown type");
  }
};
