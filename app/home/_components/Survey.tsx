"use client";

import { Text } from "@/app/_parts/Text";
import { Textarea } from "@/app/_parts/Textarea";
import { SubmitButton } from "@/app/search/_parts/SubmitButton";
import { ark } from "@ark-ui/react";
import { useOptimistic } from "react";
import { useFormState } from "react-dom";
import { type SurveyFormData, submitSurvey } from "../_lib/mutate/submitSurvey";

const initialState: {
  message: string | null;
} = {
  message: null,
};

const createFormData = <T extends FormData>(fields: Record<string, FormDataEntryValue | null>): T => {
  const formData = new FormData() as T;

  for (const [key, value] of Object.entries(fields)) {
    if (value !== null) {
      formData.append(key, value);
    }
  }

  return formData;
};


// interface CustomFormProps extends Omit<React.FormHTMLAttributes<HTMLFormElement>, 'action'> {
//   action?: string | ((formData: SurveyFormData) => void) | undefined;
// }

// const CustomForm: React.FC<CustomFormProps> = ({ action, ...props }) => {
//   const handleAction = action && typeof action === 'function'
//     ? (formData: FormData) => action(formData as unknown as SurveyFormData)
//     : action;

//   return <form action={handleAction} {...props} />;
// };

export function Survey() {
  const [state, formAction] = useFormState(submitSurvey, initialState);
  const [optimisticMessages, addOptimisticMessage] = useOptimistic<
    typeof initialState,
    typeof initialState
  >(state, (currentState, optimisticState) => ({
    ...currentState,
    ...optimisticState,
  }));

  return (
    <>
      <p className="my-1">{"当サイトの感想など適当にご記入ください。"}</p>
      <p className="my-1 text-red">
        {"アンケートは24時間に1回のみ回答できます。"}
      </p>
      <form action={async (formData: FormData) => {
        addOptimisticMessage({
          message: "送信中です...",
        });

        formAction(createFormData({
          name: formData.get("name"),
          message: formData.get("message"),
        }));
      }}>
        <ark.div className="my-2">
          <Text label="名前" />
        </ark.div>
        <ark.div className="my-2">
          <Textarea label="内容" />
        </ark.div>
        <ark.div className="my-2 flex justify-end">
          <SubmitButton>{"送信"}</SubmitButton>
        </ark.div>
        {!!optimisticMessages.message && (
          <ark.div className="my-2 flex justify-end">
            <p className="my-1">{optimisticMessages.message}</p>
          </ark.div>
        )}
      </form >
    </>
  );
}
