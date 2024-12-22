import { cva } from "@/styled-system/css"
import { styled } from "@/styled-system/jsx"
import { ark } from "@ark-ui/react/factory"

const mainLayoutStyle = cva({
    base: {
        padding: { base: "5", sm: "5", md: "5", lg: "10" },
        marginY: { base: "5", sm: "5", md: "5", lg: "10" },
        backgroundColor: "secondary",
        borderStyle: "solid",
        borderTop: "6px",
        borderRadius: "6px",
        borderColor: "primary",
    },
})

export const MainLayout = styled(ark.div, mainLayoutStyle)
