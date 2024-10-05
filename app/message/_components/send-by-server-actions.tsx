"use client";

import { useFormState } from "react-dom";
import { writeMessage } from "../actions";

const initialState = {
  message: "hello world",
};

export const SendByServerActions = () => {
  const [state, formAction] = useFormState(writeMessage, initialState);

  return (
    <form action={formAction}>
      <label htmlFor="name">name</label>
      <input type="text" id="name" name="name" required />
      <label htmlFor="message">message</label>
      <input type="text" id="message" name="message" required />
      <button type="submit">Add</button>
      {/* <p aria-live="polite" className="sr-only" role="status">
				{state?.message}
			</p> */}
    </form>
  );
};
