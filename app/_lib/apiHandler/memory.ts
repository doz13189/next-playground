import { MemorySchema } from "@/app/_data/memory/schema";
import { z } from "zod";

export const getMemory = async (id: string) => {
	const response = await fetch(
		`${process.env.API_URL}/api/memory?id=${id}`,
		{ cache: 'no-store' }
	);

	if (response.ok) {
		const data = await response.json();
		const result = z.object({
			memories: MemorySchema,
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
