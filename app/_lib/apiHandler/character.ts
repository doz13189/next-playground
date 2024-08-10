import { CharacterSchema } from "@/app/_data/character/schema";
import { z } from "zod";

export const getCharacter = async (id: string) => {
	const response = await fetch(
		`${process.env.API_URL}/api/character?id=${id}`,
		{ cache: 'no-store' }
	);

	if (response.ok) {
		const data = await response.json();
		const result = z.object({
			characters: CharacterSchema,
		}).safeParse(data);

		if (result.success) {
			return result.data;
		}

		console.error(result.error.errors);
		throw new Error("Invalid response data");
	}
	console.error(response);
	throw new Error(`HTTP error ${response.status}`);
};
