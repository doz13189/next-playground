import { MemoriesResponseSchema } from "@/app/_data/memory/schema";

export const getMemories = async (rarity: string, skills: string, name: string, offset: string, limit: string) => {
	let query = "";
	if (skills) {
		query = `skills=${skills}`
	}

	if (rarity) {
		query = query + `&rarity=${rarity}`;
	}

	if (name) {
		query = query + `&name=${name}`;
	}

	if (offset) {
		query = query + `&offset=${offset}`;
	}

	if (limit) {
		query = query + `&limit=${limit}`;
	}

	const response = await fetch(
		`${process.env.API_URL}/api/memories?${query}`,
		{ cache: 'no-store' }
	);

	if (response.ok) {
		const data = await response.json();
		const result = MemoriesResponseSchema.safeParse(data);
		if (result.success) {
			return result.data;
		}

		console.error(result.error.errors);
		throw new Error("Invalid response data");
	}
	console.error(response);
	throw new Error(`HTTP error ${response.status}`);
};
