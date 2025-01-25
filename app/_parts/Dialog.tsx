"use client"

import { cva } from "@/styled-system/css"
import { Box, HStack, VStack, styled } from "@/styled-system/jsx"
import { Dialog as ArkDialog } from "@ark-ui/react"
import { type ReactElement, cloneElement, useState } from "react"
import { MainLayout } from "../_components/main-layout"
import { Button, type ButtonProps } from "./button"


const InnerBackdrop = styled(
    ArkDialog.Backdrop,
    cva({
        base: {
            background: "rgba(0, 0, 0, 0.5)",
            width: "full",
            height: "full",
            left: "0",
            position: "fixed",
            top: "0",
            zIndex: "1300",
            _open: {
                animation: "fade-in 250ms token(easings.ease-in)",
            },
            _closed: {
                animation: "fade-out 200ms token(easings.ease-out)",
            },
        },
    }),
)

const InnerPositioner = styled(
    ArkDialog.Positioner,
    cva({
        base: {
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            left: "0",
            overflow: "auto",
            position: "fixed",
            top: "0",

            width: "full",
            height: "full",
            zIndex: "1400",
        },
    }),
)

const InnerContent = styled(
    ArkDialog.Content,
    cva({
        base: {
            width: "full",
            height: "full",
            overflowY: "scroll",
            maxWidth: "768px",
            position: "relative",
            _open: {
                animation: "slide-in 400ms token(easings.easeIn)",
            },
            _closed: {
                animation: "slide-out 200ms token(easings.easeOut)",
            },
        },
    }),
)

type Props = {
    dialogButton: ReactElement<ButtonProps>
    content: ReactElement
}

export const Dialog = ({ dialogButton, content }: Props) => {
    const [isOpen, setIsOpen] = useState(false)

    const clonedButton = cloneElement(dialogButton, {
        ...dialogButton.props,
        onClick: (event: React.MouseEvent<HTMLButtonElement>) => {
            event.preventDefault();

            if (dialogButton.props.onClick) {
                dialogButton.props.onClick(event)
            }

            setIsOpen((prev) => !prev)
        },
    })

    return (
        <ArkDialog.Root open={isOpen}>
            <ArkDialog.Trigger asChild>{clonedButton}</ArkDialog.Trigger>
            <InnerBackdrop />
            <InnerPositioner>
                <InnerContent>
                    <MainLayout margin={"4"}>
                        <VStack>
                            <Box width={"full"} marginBottom={"4"}>
                                {content}
                            </Box>
                            <HStack width={"full"} justifyContent={"flex-end"}>
                                <ArkDialog.CloseTrigger asChild>
                                    <Button
                                        width="full"
                                        height={"12"}
                                        backgroundColor={"#5D5D5D"}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setIsOpen((isOpen) => !isOpen);
                                        }}
                                    >
                                        閉じる
                                    </Button>
                                </ArkDialog.CloseTrigger>
                            </HStack>
                        </VStack>
                    </MainLayout>
                </InnerContent>
            </InnerPositioner>
        </ArkDialog.Root>
    )
}
