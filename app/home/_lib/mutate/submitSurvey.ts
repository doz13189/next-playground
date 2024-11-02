"use server";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { z } from "zod";
import "server-only";
import { execSync } from "node:child_process";
import { sleep } from "@/app/_lib/utils/sleep";
import { cookies } from "next/headers";
import { v4 as uuidv4 } from "uuid";

const schema = z.object({
  name: z.string(),
  message: z.string(),
});

export interface SurveyFormData extends FormData {
  get(key: "name"): string | null;
  get(key: "message"): string | null;
  // get(key: string): FormDataEntryValue | null;
}

export const submitSurvey = async (
  // prevState: z.infer<typeof CharacterRatingRequestSchema>,
  prevState: {
    message: string | null;
  },
  formData: SurveyFormData,
) => {
  await sleep(2000);

  const validatedFields = schema.safeParse({
    name: formData.get("name"),
    message: formData.get("message"),
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

  const filePath = path.join(process.cwd(), "app/_data/survey", "text.json");
  const body = {
    name: formData.get("name"),
    message: formData.get("message"),
    createdAt: new Date().toISOString(),
  };

  let data = "";
  try {
    data = await readFile(filePath, "utf-8");
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      try {
        console.log("Directory contents before writing:");
        console.log(execSync(`ls -la ${process.cwd()}`).toString());

        console.log("Current user:");
        console.log(execSync("whoami").toString());

        await writeFile(filePath, JSON.stringify({ [uuidv4()]: body }));
        console.info("New file created successfully.");
        return { message: "入力ありがとうございました。" };
      } catch (error) {
        console.error(error);
        if (error instanceof Error) {
          throw new Error(error.message);
        }
        throw new Error("Unknown error");
      }
    }
  }

  try {
    await writeFile(
      filePath,
      JSON.stringify({
        ...JSON.parse(data),
        [uuidv4()]: body,
      }),
    );
    console.info("File updated successfully.");
    return { message: "入力ありがとうございました。" };
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Unknown error");
  }
};
