import { css } from "@/styled-system/css";
import { Field } from "@ark-ui/react/field";
import type { InputHTMLAttributes } from "react";
import { Typography } from "./Typography";

type Props = InputHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  helperText?: string;
  errorText?: string;
};

export const Textarea = ({ label, helperText, errorText, ...props }: Props) => {
  return (
    <Field.Root className="flex flex-col gap-1.5">
      {label && (
        <Field.Label>
          <Typography>{label}</Typography>
        </Field.Label>
      )}
      <Field.Textarea
        className={css({
          appearance: "none",
          background: "none",
          outline: 0,
          paddingX: "1.5",
          fontSize: { base: "3", sm: "3", md: "3", lg: "3.5" },
          height: "32",
          width: "full",
          backgroundColor: "grey.80",
          borderRadius: "6px",
          borderWidth: "1px",
          borderColor: "primary",
          _focus: {
            borderColor: "blue.800",
          },
          _disabled: {
            opacity: 0.4,
            cursor: "not-allowed",
          },
          _invalid: {
            borderColor: "primary",
            backgroundColor: "red.100",
            _focus: {
              borderColor: "primary",
              backgroundColor: "red.100"
            },
          },
        })}
        name="contents"
        required
        {...props}
      />
      {helperText && (
        <Field.HelperText>
          <Typography>{helperText}</Typography>
        </Field.HelperText>
      )}
      {errorText && (
        <Field.ErrorText>
          <Typography>{errorText}</Typography>
        </Field.ErrorText>
      )}
    </Field.Root>
  );
};
