import { MessagesSchema } from "@/app/_data/message/schema";

export const writeMessage = async (message: string) => {
	await fetch(`${process.env.API_URL}/api/message`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		next: { revalidate: 10 },
		body: JSON.stringify({ message }),
	});
};

export const getMessage = async () => {
	const response = await fetch(`${process.env.API_URL}/api/message`, {
		next: { revalidate: 10 },
	});

	if (response.ok) {
		const data = await response.json();
		const result = MessagesSchema.safeParse(data);
		if (result.success) {
			return result.data;
		}

		console.error(result.error.errors);
		throw new Error("Invalid response data");
	}
	console.error(response);
	throw new Error(`HTTP error ${response.status}`);
};
