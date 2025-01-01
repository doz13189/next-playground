import { css } from "@/styled-system/css"
import { ark } from "@ark-ui/react";
import type { FC, ReactNode } from "react";

export const Skeleton: FC<{ children: ReactNode }> = ({ children }) => (
    <ark.div
        className={css({
            animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            backgroundClip: 'padding-box',
            color: 'transparent',
            cursor: 'default',
            pointerEvents: 'none',
            userSelect: 'none',
            backgroundColor: "grey.100",
            borderRadius: "6px",
            '&::before, &::after, *': {
                visibility: 'hidden',
            },
        })}
    >{children}</ark.div>
)
