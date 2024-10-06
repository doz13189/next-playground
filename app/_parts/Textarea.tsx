import { Field } from "@ark-ui/react/field";
import type { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  helperText?: string;
  errorText?: string;
};

export const Textarea = ({ label, helperText, errorText, ...props }: Props) => {
  return (
    <Field.Root className="flex flex-col gap-1.5">
      {label && (
        <Field.Label className="text-sm font-medium text-gray-900 disabled:text-gray-400">
          {label}
        </Field.Label>
      )}
      <Field.Textarea
        className="rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        name="message"
        required
        {...props}
      />
      {helperText && (
        <Field.HelperText className="text-sm text-gray-500 disabled:text-gray-400">
          Some additional Info
        </Field.HelperText>
      )}
      {errorText && (
        <Field.ErrorText className="inline-flex items-center gap-2 text-sm text-red-600 disabled:text-gray-400">
          Error Info
        </Field.ErrorText>
      )}
    </Field.Root>
  );
};
