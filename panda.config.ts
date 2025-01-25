import { defineConfig } from "@pandacss/dev";

const baseSize = {
  0: { value: "0rem" },
  0.5: { value: "0.125rem" },
  1: { value: "0.25rem" },
  1.5: { value: "0.375rem" },
  2: { value: "0.5rem" },
  2.5: { value: "0.625rem" },
  3: { value: "0.75rem" },
  3.5: { value: "0.875rem" },
  4: { value: "1rem" },
  4.5: { value: "1.125rem" },
  5: { value: "1.25rem" },
  5.5: { value: "1.375rem" },
  6: { value: "1.5rem" },
  7: { value: "1.75rem" },
  8: { value: "2rem" },
  9: { value: "2.25rem" },
  10: { value: "2.5rem" },
  11: { value: "2.75rem" },
  12: { value: "3rem" },
  14: { value: "3.5rem" },
  16: { value: "4rem" },
  20: { value: "5rem" },
  24: { value: "6rem" },
  28: { value: "7rem" },
  32: { value: "8rem" },
  36: { value: "9rem" },
  40: { value: "10rem" },
  44: { value: "11rem" },
  48: { value: "12rem" },
  52: { value: "13rem" },
  56: { value: "14rem" },
  60: { value: "15rem" },
  64: { value: "16rem" },
  72: { value: "18rem" },
  80: { value: "20rem" },
  96: { value: "24rem" },
} as const;

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./app/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      breakpoints: {
        sm: "375px", // NOTE: mobile
        md: "768px", // NOTE: tablet
        lg: "1920px", // NOTE: pc
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "slide-in": {
          "0%": { opacity: "0", transform: "translateY(64px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-out": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(64px)" },
        },
      },
      tokens: {
        colors: {
          yellow: { 100: { value: "#FAC00F" } },
          orange: { 100: { value: "#F8784A" }, 80: { value: "#FFA07A" } },
          grey: { 100: { value: "#DBDBDB" }, 80: { value: "#F5F5F5" } },
          white: { 100: { value: "#F8F9FA" } },
          black: { 100: { value: "#262626" } },
        },
        sizes: baseSize,
        spacing: baseSize,
        fontSizes: baseSize,
        easings: {
          "ease-in": { value: "cubic-bezier(0.05, 0.7, 0.1, 1.0)" },
          "ease-out": { value: "cubic-bezier(0.3, 0.0, 0.8, 0.15)" },
        },
      },
      semanticTokens: {
        colors: {
          primary: { value: "{colors.orange.100}" },
          secondary: { value: "{colors.white.100}" },
          tertiary: { value: "{colors.yellow.100}" },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",

  // REF: https://panda-css.com/docs/guides/minimal-setup#re-using-panda-presets
  presets: ["@pandacss/preset-base", "@pandacss/preset-panda"],

  jsxFramework: "react",
});
