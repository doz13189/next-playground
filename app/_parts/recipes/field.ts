import { cva } from "@/styled-system/css";

export const fieldRecipe = cva({
  base: {
    appearance: "none",
    background: "none",
    outline: 0,
    paddingX: "2.5",
    fontSize: { base: "3", sm: "3", md: "3", lg: "3.5" },
    height: "10",
    width: "full",
    backgroundColor: "grey.80",
    borderRadius: "6px",
    borderWidth: "1px",
    borderColor: "tertiary",
    _focus: {
      borderColor: "blue.100",
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed",
    },
    _invalid: {
      borderColor: "primary",
      backgroundColor: "red.20",
      _focus: {
        borderColor: "primary",
        backgroundColor: "red.20",
      },
    },
  }
})