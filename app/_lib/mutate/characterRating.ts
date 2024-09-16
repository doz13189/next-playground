'use server';
import { CharacterRatingRequestSchema, CharacterRatingResponseSchema } from "@/app/_data/character/schema";
import { writeFile, readFile } from "fs/promises";
import path from "path";
import { z } from "zod";
import 'server-only'
import { cookies } from 'next/headers'

export const mutateCharacterRating = async (prevState: z.infer<typeof CharacterRatingRequestSchema>, formData: FormData) => {

	const session = cookies().get('session')?.value
	// if (!!session) {
	// 	throw new Error('No session provided');
	// }


	cookies().set('session', JSON.stringify({ isEvaluated: true }), {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
		sameSite: 'lax',
		path: '/',
	})

	const characterId = formData.get('id');
	const arena = formData.get('arena');
	const circleFestival = formData.get('circleFestival');
	const veTower = formData.get('veTower');

	if (!characterId) {
		throw new Error("Character ID is required");
	}

	const characterRating = {
			id: characterId as string,
			arena: arena ? parseInt(arena as string) : undefined,
			circleFestival: circleFestival ? parseInt(circleFestival as string) : undefined,
			veTower: veTower ? parseInt(veTower as string) : undefined,
	}

	const filePath = path.join(
		process.cwd(),
		"/public/rating",
		`${characterId}.json`,
	);

	let data: string = "";
	try {
		data = await readFile(filePath, "utf-8");
	} catch (error) {
		if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
			try {
				await writeFile(filePath, JSON.stringify(
					{
						arena: !!characterRating.arena ? [characterRating.arena] : [],
						circleFestival: !!characterRating.circleFestival ? [characterRating.circleFestival] : [],
						veTower: !!characterRating.veTower ? [characterRating.veTower] : [],
					}
				));
				console.info("New file created successfully.");
				return characterRating
			} catch (error) {
				console.error(error);
				if (error instanceof Error) {
					throw new Error(error.message);
				}
				throw new Error("Unknown error");
			}
		}
	}

	const existingCharacterRating = JSON.parse(data) as z.infer<typeof CharacterRatingResponseSchema>;
	try {
		await writeFile(filePath, JSON.stringify({
			arena: !!characterRating.arena ? [...existingCharacterRating.arena, characterRating.arena] : existingCharacterRating.arena,
			circleFestival: !!characterRating.circleFestival ? [...existingCharacterRating.circleFestival, characterRating.circleFestival] : existingCharacterRating.circleFestival,
			veTower: !!characterRating.veTower ? [...existingCharacterRating.veTower, characterRating.veTower] : existingCharacterRating.veTower,
		}))

		console.info("File updated successfully.");
		return characterRating
	} catch (error) {
		console.error(error);
		if (error instanceof Error) {
			throw new Error(error.message);
		}
		throw new Error("Unknown error");
	}
};
