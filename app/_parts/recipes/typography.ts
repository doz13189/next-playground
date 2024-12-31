import { cva } from "@/styled-system/css";
import { styled } from "@/styled-system/jsx";

export const typographyRecipe = cva({
  base: {
    fontSize: { base: "3", sm: "3", md: "3", lg: "3.5" },
    color: "black.100",
  },
});
