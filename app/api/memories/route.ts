import type { MemorySkills } from "@/app/_data/_common/schema";
import { memories } from "@/app/_data/memory/object";
import type { MemorySchema } from "@/app/_data/memory/schema";
import JsonQuery from "json-query";
import { type NextRequest, NextResponse } from "next/server";
import type { z } from "zod";
import { authenticate } from "../_utils/authorization";

export async function GET(request: NextRequest) {
  try {
    const authenticatedInformation = authenticate(request);
    console.info("authenticated", authenticatedInformation);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 401 });
    }
    return NextResponse.json({ error: "unknown error" }, { status: 500 });
  }

  const rarity = request.nextUrl.searchParams.get("rarity");
  const skills = request.nextUrl.searchParams.get("skills");
  const name = request.nextUrl.searchParams.get("name");

  const offset = Number.parseInt(
    request.nextUrl.searchParams.get("offset") || "0",
  );
  const limit = Number.parseInt(
    request.nextUrl.searchParams.get("limit") || "10",
  );

  let response = JsonQuery("memories[*]", {
    data: { memories },
  }).value[0];

  if (rarity) {
    response = response.filter((memory: z.infer<typeof MemorySchema>) => {
      return memory.rarity === rarity;
    });
  }

  if (skills) {
    skills?.split(",").map((skill) => {
      response = response.filter((memory: z.infer<typeof MemorySchema>) => {
        return memory.skills.includes(skill as z.infer<typeof MemorySkills>);
      });
    });
  }

  if (name) {
    response = response.filter((memory: z.infer<typeof MemorySchema>) => {
      return memory.name.includes(name);
    });
  }

  return NextResponse.json(
    {
      memories: response.slice(offset, offset + limit),
      result: {
        offset,
        limit,
        total: response.length,
      },
    },
    { status: 200 },
  );
}
