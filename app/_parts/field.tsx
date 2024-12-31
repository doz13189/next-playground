import { css, cva } from "@/styled-system/css";
import { styled } from "@/styled-system/jsx";
import type { ComponentProps } from "@/styled-system/types";
import { Field, ark } from "@ark-ui/react";
import type { Dispatch, InputHTMLAttributes, SetStateAction } from "react";
import { fieldRecipe } from "./recipes/field";

const BaseInput = styled(ark.input, fieldRecipe)

type Props = InputHTMLAttributes<HTMLInputElement> & ComponentProps<typeof BaseInput> & {
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
      <BaseInput
        className={css()}
        onChange={(event) => setValue(event.target.value)}
        value={value}
        {...props}
      />
      {helperText && <Field.HelperText>{helperText}</Field.HelperText>}
      {errorText && <Field.ErrorText>{errorText}</Field.ErrorText>}
    </Field.Root>
  );
};
