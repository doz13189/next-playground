import { cva } from "@/styled-system/css"
import { styled } from "@/styled-system/jsx"

const typographyStyle = cva({
  base: {
    fontSize: { base: "3", sm: "3", md: "3", lg: "3.5" },
    color: "black.100",
  },
})

export const Typography = styled("p", typographyStyle)
