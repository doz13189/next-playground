import type { CharacterSchema } from "@/app/_data/character/schema";
import type { z } from "zod";

type H = z.infer<typeof CharacterSchema>;
export const typeLabel = (type: H["type"]) => {
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
  }
};
