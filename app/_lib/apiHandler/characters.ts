import { CharactersResponseSchema } from "@/app/_data/character/schema";

export const getCharacters = async (rarity: string, type: string, name: string, tags: string, skills: string, offset: string, limit: string) => {
	let query = "";
	if (skills) {
		query = `skills=${skills}`
	}

	if (rarity) {
		query = query + `&rarity=${rarity}`;
	}

	if (type) {
		query = query + `&type=${type}`;
	}

	if (name) {
		query = query + `&name=${name}`;
	}

	if (tags) {
		query = query + `&tags=${tags}`;
	}

	if (offset) {
		query = query + `&offset=${offset}`;
	}

	if (limit) {
		query = query + `&limit=${limit}`;
	}

	const response = await fetch(
		`${process.env.API_URL}/api/characters?${query}`,
		{ cache: 'no-store' }
	);

	if (response.ok) {
		const data = await response.json();
		const result = CharactersResponseSchema.safeParse(data);
		if (result.success) {
			return result.data;
		}

		console.error(result.error.errors);
		throw new Error("Invalid response data");
	}
	console.error(response);
	throw new Error(`HTTP error ${response.status}`);
};
