import { memories } from "@/app/_data/memory/object";

export const queryMemory = async (id: string) => {
	return memories.memories.filter((memory) => {
		if (memory.id === id) {
			return memory;
		}
	})[0];
};
