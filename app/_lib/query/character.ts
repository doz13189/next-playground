import { characters } from "@/app/_data/character/object";

export const queryCharacter = async (id: string) => {
	return characters.characters.filter((character) => {
		if (character.id === id) {
			return character;
		}
	})[0];
};
