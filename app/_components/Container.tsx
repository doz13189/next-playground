
import { cva } from "@/styled-system/css"
import { styled } from "@/styled-system/jsx"
import { ark } from "@ark-ui/react/factory"

const containerStyle = cva({
    base: {
        paddingY: { base: "10", sm: "10", md: "10", lg: "10" },
        paddingX: { base: "5", sm: "5", md: "5", lg: "10" },
        marginY: { base: "5", sm: "5", md: "5", lg: "10" },
        marginX: { base: "5", sm: "5", md: "5", lg: "32" },
    },
})

export const Container = styled(ark.div, containerStyle)