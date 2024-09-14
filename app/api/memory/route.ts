import { memories } from "@/app/_data/memory/object";
import JsonQuery from "json-query";
import { NextRequest, NextResponse } from "next/server";
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

	const id = request.nextUrl.searchParams.get("id");
	const response = JsonQuery(`memories[id=${id}]`, {
		data: memories,
	}).value;

	return NextResponse.json({ memories: response }, { status: 200 });
}
