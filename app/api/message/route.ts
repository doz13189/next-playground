import path from "path";
import { readFile, writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import { authenticate } from "../_utils/authorization";

export async function POST(request: NextRequest) {

	try {
		const authenticatedInformation = authenticate(request);
		console.info("authenticated", authenticatedInformation);
	} catch (error) {
		if (error instanceof Error) {
			return NextResponse.json({ error: error.message }, { status: 401 });
		}
		return NextResponse.json({ error: "unknown error" }, { status: 500 });
	}

	try {
		const requestBody = await request.json();
		const filePath = path.join(
			process.cwd(),
			"app/_data/message",
			"object.json",
		);

		await writeFile(filePath, JSON.stringify(requestBody));

		return NextResponse.json(
			{ message: "Message written successfully" },
			{ status: 200 },
		);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ message: "Internal Server Error" },
			{ status: 200 },
		);
	}
}

export async function GET(request: NextRequest) {
	const filePath = path.join(process.cwd(), "app/_data/message", "object.json");

	let existingData: object[];
	try {
		const data = await readFile(filePath, "utf-8");
		existingData = JSON.parse(data);
	} catch (error) {
		existingData = [];
	}

	return NextResponse.json({ messages: existingData }, { status: 200 });
}
