import { ark } from "@ark-ui/react";
import { type ButtonHTMLAttributes, forwardRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { Spinner } from "./Spinner";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  loadingText?: React.ReactNode;
  enabledColor?: string;
  disabledColor?: string;
  className?: string;
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
    const { disabled, loadingText, className, children, onClick, ...rest } =
      props;

    const [loading, setLoading] = useState(false);
    const { pending } = useFormStatus();
    const trulyDisabled = loading || disabled || pending;

    const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
      setLoading(true);
      onClick && (await onClick(event));
      setLoading(false);
    };

    return (
      <ark.button
        type="submit"
        disabled={trulyDisabled}
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
        {loading && !loadingText ? (
          <ark.div className="flex justify-center items-center w-full h-full">
            <Spinner />
          </ark.div>
        ) : loadingText ? (
          loadingText
        ) : (
          children
        )}
      </ark.button>
    );
  },
);
