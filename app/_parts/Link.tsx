import { ark } from "@ark-ui/react";
import { default as NextLink } from "next/link";
import type { ComponentProps, FC } from "react";

type Props = ComponentProps<typeof NextLink> & {
  disabled?: boolean;
  enabledColor?: "bg-yellow"
  disabledColor?: "bg-gray-300 text-gray-500"
}

export const Link: FC<Props> = ({
  enabledColor = "bg-yellow",
  disabledColor = "bg-gray-300 text-gray-500",
  ...props
}) => {
  return (
    <NextLink
      {...props}
    >
      <ark.div
        className={`
            my-1
            px-4
            py-1
            w-32
            text-sm
            border-2
            border-grey
            rounded-lg
            flex
            justify-center
            ${props.disabled ? disabledColor : enabledColor}
        `}
      >{props.children}</ark.div>
    </NextLink>
  );
};
