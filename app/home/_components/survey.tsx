"use client";

import { SubmitButton } from "@/app/_parts/submit-button";
import { Text } from "@/app/_parts/text";
import { Textarea } from "@/app/_parts/textarea";
import { Typography } from "@/app/_parts/Typography";
import { css } from "@/styled-system/css";
import { Box, Spacer } from "@/styled-system/jsx";
import { ark } from "@ark-ui/react";
import { useOptimistic } from "react";
import { useFormState } from "react-dom";
import { submitSurvey } from "../_lib/mutate/submit-survey";

const initialState: {
  message: string | null;
} = {
  message: null,
};

export function Survey() {
  const [state, formAction] = useFormState(submitSurvey, initialState);
  const [optimisticMessages, addOptimisticMessage] = useOptimistic<
    typeof initialState,
    typeof initialState
  >(state, (currentState, optimisticState) => ({
    ...currentState,
    ...optimisticState,
  }));

  const formActionWithOptimistic = async (formData: FormData) => {
    addOptimisticMessage({
      message: "送信中です...",
    });
    formAction(formData);
  };

  return (
    <>
      <Typography>当サイトの感想など適当にご記入ください。</Typography>
      <Typography>アンケートは24時間に1回のみ回答できます。</Typography>

      <Box marginBottom={"2"}>
        <ark.form action={formActionWithOptimistic}>
          <ark.div className={css({ marginY: "2" })}>
            <Text label="名前" />
          </ark.div>
          <ark.div className={css({ marginY: "2" })}>
            <Textarea label="内容" />
          </ark.div>
          <ark.div className={css({ marginY: "2", display: "flex" })}>
            <Spacer />
            <SubmitButton>{"送信"}</SubmitButton>

            <Spacer />
          </ark.div>
          {!!optimisticMessages.message && (
            <ark.div className={css({ textAlign: "center" })}>
              <Typography>{optimisticMessages.message}</Typography>
            </ark.div>
          )}
        </ark.form>
      </Box>
    </>
  );
}
