import { Field } from "@ark-ui/react";
import { Dispatch, InputHTMLAttributes, SetStateAction } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
	value: string;
	setValue: Dispatch<SetStateAction<string>>;
	label: string;
	helperText?: string;
	errorText?: string;
  }

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
        className={`
			block
			p-2.5
			bg-gray
			border-2
			border-grey
			rounded-lg
			w-full
			${className}
		`}
        onChange={(event) => setValue(event.target.value)}
        value={value}
		{...props}
      />
      {helperText && <Field.HelperText>{helperText}</Field.HelperText>}
      {errorText &&  <Field.ErrorText>{errorText}</Field.ErrorText>}
    </Field.Root>
  );
};
