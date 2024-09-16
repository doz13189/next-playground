"use client";
import { mutateCharacterRating } from "@/app/_lib/mutate/characterRating";
import { useFormState } from "react-dom";

export function CharacterRatingForm({ id }: { id: string }) {
	const initialState = {
		id
	};
	const [_, formAction] = useFormState(mutateCharacterRating, initialState);

	return (
		<form action={formAction}>
			<input type="hidden" id="id" name="id" value={id} />

			<div>
			<label htmlFor="arena">arena</label>
			<input type="number" id="arena" name="arena" min="1" max="5" step="1"/>
			</div>

			<div>
			<label htmlFor="circleFestival">circle festival</label>
			<input type="number" id="circleFestival" name="circleFestival" min="1" max="5" step="1"/>
			</div>

			<div>
			<label htmlFor="veTower">arena</label>
			<input type="number" id="veTower" name="veTower" min="1" max="5" step="1"/>
			</div>

			<button type="submit">Add</button>
		</form>
	);
}