import { cva } from "@/styled-system/css";
import { styled } from "@/styled-system/jsx";

export const headingRecipe = cva({
  base: {
    fontSize: { base: "4", sm: "4", md: "4", lg: "5" },
    fontWeight: "bold",
    color: "primary",
    borderColor: "primary",
  },
});
