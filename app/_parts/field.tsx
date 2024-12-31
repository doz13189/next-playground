import { css } from "@/styled-system/css";
import { Field } from "@ark-ui/react";
import type { Dispatch, InputHTMLAttributes, SetStateAction } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  label: string;
  helperText?: string;
  errorText?: string;
};

export const Input = ({
  value,
  setValue,
  label,
  helperText,
  errorText,
  className = "",
  ...props
}: Props) => {
  return (
    <Field.Root>
      <Field.Label>{label}</Field.Label>
      <Field.Input
        className={css({
          appearance: "none",
          background: "none",
          outline: 0,
          paddingX: "2.5",
          fontSize: { base: "3", sm: "3", md: "3", lg: "3.5" },
          height: "10",
          width: "full",
          backgroundColor: "grey.80",
          borderRadius: "6px",
          borderWidth: "1px",
          borderColor: "tertiary",
          _focus: {
            borderColor: "blue.100",
          },
          _disabled: {
            opacity: 0.4,
            cursor: "not-allowed",
          },
          _invalid: {
            borderColor: "primary",
            backgroundColor: "red.20",
            _focus: {
              borderColor: "primary",
              backgroundColor: "red.20",
            },
          },
        })}
        onChange={(event) => setValue(event.target.value)}
        value={value}
        {...props}
      />
      {helperText && <Field.HelperText>{helperText}</Field.HelperText>}
      {errorText && <Field.ErrorText>{errorText}</Field.ErrorText>}
    </Field.Root>
  );
};
