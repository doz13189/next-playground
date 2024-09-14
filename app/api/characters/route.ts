import { CharacterSkills, Tags } from "@/app/_data/_common/schema";
import { characters } from "@/app/_data/character/object";
import { CharacterSchema } from "@/app/_data/character/schema";
import JsonQuery from "json-query";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
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
	const type = request.nextUrl.searchParams.get("type");
	const name = request.nextUrl.searchParams.get("name");
	const tags = request.nextUrl.searchParams.get("tags");
	const skills = request.nextUrl.searchParams.get("skills");

	const offset = parseInt(request.nextUrl.searchParams.get("offset") || "0");
	const limit = parseInt(request.nextUrl.searchParams.get("limit") || "10");

	let response = JsonQuery('characters[*]', {
		data: { characters },
	}).value[0]

	if (rarity) {
		response = response.filter((character: z.infer<typeof CharacterSchema>) => {
			return character.rarity === rarity
		});
	}

	if (type) {
		response = response.filter((character: z.infer<typeof CharacterSchema>) => {
			return character.type === type
		});
	}

	if (name) {
		response = response.filter((character: z.infer<typeof CharacterSchema>) => {
			return character.name === name
		});
	}

	if (tags) {
		tags
			?.split(",")
			.map((tag) => {
				response = response.filter((character: z.infer<typeof CharacterSchema>) => {
					return character.tags.includes(tag as z.infer<typeof Tags>)
				});
			})
	}

	if (skills) {
		skills
			?.split(",")
			.map((skill) => {
				response = response.filter((character: z.infer<typeof CharacterSchema>) => {
					return character.skills.includes(skill as z.infer<typeof CharacterSkills>)
				});
			})
	}

	return NextResponse.json({
		characters: response.slice(offset, offset + limit),
		result: {
			offset,
			limit,
			total: response.length
		}
	}, { status: 200 });
}
