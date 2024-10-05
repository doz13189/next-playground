import { z } from "zod";

export const MessageSchema = z.object({
  created: z.string(),
  name: z.string(),
  message: z.string(),
});

export const MessagesSchema = z.object({
  messages: z.array(MessageSchema),
});
