import { cva } from "@/styled-system/css";

export const buttonRecipe = cva({
  base: {
    fontSize: { base: "3", sm: "3", md: "3", lg: "3.5" },
    fontWeight: "bold",
    height: "6",
    width: "20",
    textAlign: "center",
    alignContent: "center",
    color: "secondary",
    borderRadius: "6px",
    backgroundColor: "primary",
    cursor: "pointer",
    _disabled: {
      color: "grey",
      backgroundColor: "grey.80",
      borderColor: "grey.100",
      borderWidth: "2px",
      cursor: "not-allowed",
    },
  },
  variants: {
    active: {
      true: {
        color: "secondary",
        backgroundColor: "primary",
      },
      false: {
        color: "primary",
        backgroundColor: "secondary",
        borderColor: "primary",
        borderWidth: "2px",
      },
    },
    // FIXME: カスタムの link コンポーネントを定義して width を指定可能にする
    fullWidth: {
      true: {
        width: "full",
        height: "8",
      },
    },
  },
});
