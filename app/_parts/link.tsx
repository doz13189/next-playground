"use client";

import type { ark } from "@ark-ui/react";
import { default as NextLink } from "next/link";
import { type ButtonHTMLAttributes, type ComponentProps, type FC, useRef, useState } from "react";
import { Button } from "./button";

type NextLinkProps = ComponentProps<typeof NextLink>;
type ArkButtonProps = Omit<ComponentProps<typeof ark.button>, "asChild">;

type Props = {
  width?: string;
  height?: string;
  loading?: boolean;
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement> & NextLinkProps &
  ArkButtonProps;

export const Link: FC<Props> = ({
  width = "32",
  height = "8",
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

    if (trulyDisabled || trulyLoading) {
      return;
    }

    setInsideLoading(true);
    if (linkRef.current) {
      linkRef.current.click();
    }
  };

  return (
    <Button
      height={height}
      width={width}
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
