import { readFile } from "fs/promises";
import path from "path";

export const queryMessage = async () => {
	const filePath = path.join(process.cwd(), "app/_data/message", "object.json");

	let existingData: {
		created: string;
		name: string;
		message: string;
	}[];
	
	try {
		const data = await readFile(filePath, "utf-8");
		existingData = JSON.parse(data);
	} catch (error) {
		existingData = [];
	}

	return { messages: existingData }
};
