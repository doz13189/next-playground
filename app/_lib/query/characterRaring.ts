import { CharacterRatingResponseSchema } from "@/app/_data/character/schema";
import { readFile } from "fs/promises";
import path from "path";
import { z } from "zod";

export const queryCharacterRating = async (id: string) => {
	const filePath = path.join(process.cwd(), "/public/rating", `${id}.json`);

	let rating: z.infer<typeof CharacterRatingResponseSchema>
	try {
		const data = await readFile(filePath, "utf-8");
		rating = JSON.parse(data);
	} catch (error) {
		rating = {
			arena: [],
			circleFestival: [],
			veTower: [],
		};
	}

	return { character: rating }
};
