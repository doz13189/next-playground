import { Field, ark } from "@ark-ui/react";
import type { Dispatch, InputHTMLAttributes, SetStateAction } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  helperText?: string;
  errorText?: string;
};

export const Text = ({
  label,
  helperText,
  errorText,
  className = "",
  ...props
}: Props) => {
  return (
    <Field.Root className="flex flex-col gap-1.5">
      <Field.Label>{label}</Field.Label>
      <Field.Input
        className="rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        name="name"
        required
        {...props}
      />
      {helperText && <Field.HelperText>{helperText}</Field.HelperText>}
      {errorText && <Field.ErrorText>{errorText}</Field.ErrorText>}
    </Field.Root>
  );
};
