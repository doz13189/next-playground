import { cva } from "@/styled-system/css";

export const buttonRecipe = cva({
  base: {
    fontSize: { base: "3", sm: "3", md: "3", lg: "3.5" },
    fontWeight: "bold",
    height: "6",
    width: "20",
    textAlign: "center",
    color: "secondary",
    borderRadius: "6px",
    backgroundColor: "primary",
  },
  variants: {
    disabled: {
      true: {
        color: "grey",
        backgroundColor: "grey.80",
        cursor: "not-allowed",
      },
      false: {
        color: "secondary",
        backgroundColor: "primary",
      },
    },
  },
});
