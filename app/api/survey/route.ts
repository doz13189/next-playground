import { readFile } from "node:fs/promises";
import path from "node:path";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const filePath = path.join(process.cwd(), "app/_data/survey", "text.json");

  let existingData: object[];
  try {
    const data = await readFile(filePath, "utf-8");
    existingData = JSON.parse(data);
  } catch (error) {
    existingData = [];
  }

  return NextResponse.json({ messages: existingData }, { status: 200 });
}
