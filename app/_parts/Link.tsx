"use client";

import type { ark } from "@ark-ui/react";
import { default as NextLink } from "next/link";
import { type ComponentProps, type FC, useRef, useState } from "react";
import { Button } from "./Button";

type NextLinkProps = ComponentProps<typeof NextLink>;
type ArkButtonProps = Omit<ComponentProps<typeof ark.button>, "asChild">;

type Props = {
  enabledColor?: string;
  disabledColor?: string;
  loading?: boolean;
  children: React.ReactNode;
} & NextLinkProps &
  ArkButtonProps;

export const Link: FC<Props> = ({
  enabledColor = "bg-yellow",
  disabledColor = "bg-gray-300 text-gray-500",
  disabled,
  loading,
  children,
  ...props
}) => {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const [insideLoading, setInsideLoading] = useState(false);
  const trulyDisabled = insideLoading || loading || disabled;
  const trulyLoading = loading || insideLoading;

  const handleClick = async (event: React.MouseEvent) => {
    event.preventDefault();

    setInsideLoading(true);
    if (linkRef.current) {
      linkRef.current.click();
    }
  };

  return (
    <Button
      className={`
        my-1
        px-4
        py-1
        w-32
        text-sm
        border-2
        border-grey
        rounded-lg
        ${trulyDisabled ? disabledColor : enabledColor}
      `}
      disabled={trulyDisabled}
      loading={trulyLoading}
      onClick={handleClick}
      {...props}
    >
      {trulyDisabled || trulyLoading ? (
        children
      ) : (
        <NextLink {...props} ref={linkRef}>
          {children}
        </NextLink>
      )}
    </Button>
  );
};
