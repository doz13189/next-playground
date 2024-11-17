
import { type ButtonHTMLAttributes, forwardRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "./Button";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  enabledColor?: string;
  disabledColor?: string;
};

export const SubmitButton = forwardRef<HTMLButtonElement, Props>(
  (
    {
      enabledColor = "bg-yellow",
      disabledColor = "bg-gray-300 text-gray-500",
      ...props
    },
    ref,
  ) => {
    const { disabled, children, onClick, ...rest } =
      props;

    const [loading, setLoading] = useState(false);
    const { pending } = useFormStatus();
    const trulyDisabled = loading || disabled || pending;
    const trulyLoading = loading || pending;

    const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
      setLoading(true);
      onClick && (await onClick(event));
      setLoading(false);
    };

    return (
      <Button
        type="submit"
        disabled={trulyDisabled}
        loading={trulyLoading}
        ref={ref}
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
        onClick={handleClick}
        {...rest}
      >
        {children}
      </Button>
    );
  },
);
