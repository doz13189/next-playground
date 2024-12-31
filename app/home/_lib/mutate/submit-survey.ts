"use server";
import { z } from "zod";
import "server-only";
import { sleep } from "@/app/_lib/utils/sleep";
import { PrismaClient } from "@prisma/client";
import { cookies } from "next/headers";

const prisma = new PrismaClient();

const schema = z.object({
  name: z.string(),
  contents: z.string(),
});

export const submitSurvey = async (
  prevState: {
    message: string | null;
  },
  formData: FormData,
) => {
  await sleep(2000);

  const validatedFields = schema.safeParse({
    name: formData.get("name"),
    contents: formData.get("contents"),
  });

  if (!validatedFields.success) {
    console.error("Validation failed", validatedFields.error);
    return {
      message: "入力エラーが発生しました。",
    };
  }

  const session = cookies().get("search-the-hero-session")?.value;

  if (session === undefined) {
    cookies().set(
      "search-the-hero-session",
      JSON.stringify({ isEvaluated: true }),
      {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        expires:
          process.env.NODE_ENV === "production"
            ? new Date(Date.now() + 24 * 60 * 60 * 1000)
            : new Date(Date.now() + 60 * 1000),
        sameSite: "lax",
        path: "/",
      },
    );
  } else {
    const sessionData = JSON.parse(session);
    if (session !== undefined && sessionData.isEvaluated) {
      return {
        message: "アンケートは1日1回のみ回答できます。",
      };
    }
  }

  try {
    prisma;
    await prisma.questionnaire.create({
      data: {
        name: validatedFields.data.name,
        contents: validatedFields.data.contents,
      },
    });
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Unknown error");
  } finally {
    await prisma.$disconnect();
  }

  return { message: "入力ありがとうございました。" };
};
