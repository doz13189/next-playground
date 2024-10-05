"use server";

import path from "path";
import { readFile, writeFile } from "fs/promises";

export async function writeMessage(
  prevState: {
    message: string;
  },
  formData: FormData,
) {
  const filePath = path.join(process.cwd(), "app/_data/message", "object.json");

  let existingData: object[];
  try {
    const data = await readFile(filePath, "utf-8");
    existingData = JSON.parse(data);
  } catch (error) {
    existingData = [];
  }

  const newMessage = {
    created: new Date().toISOString(),
    name: formData.get("name"),
    message: formData.get("message"),
  };

  existingData.push(newMessage);

  await writeFile(filePath, JSON.stringify(existingData));

  return { message: "Message written successfully" };
}
