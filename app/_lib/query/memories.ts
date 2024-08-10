import { MemorySkills } from "@/app/_data/_common/schema";
import { memories } from "@/app/_data/memory/object";
import { MemorySchema } from "@/app/_data/memory/schema";
import { z } from "zod";

export const queryMemories = async ({ rarity, skills, name, offset, limit }: { rarity: string, skills: string, name: string, offset: string, limit: string}) => {

	let response = memories.memories;
	if (rarity) {
		response = response.filter((memory: z.infer<typeof MemorySchema>) => {
			return memory.rarity === rarity
		});
	}

	if (skills) {
		skills
			?.split(",")
			.map((skill) => {
				response = response.filter((memory: z.infer<typeof MemorySchema>) => {
					return memory.skills.includes(skill as z.infer<typeof MemorySkills>)
				});
			});
	}

	if (name) {
		response = response.filter((memory: z.infer<typeof MemorySchema>) => {
			return memory.name.includes(name);
		});
	}

	return {
		memories: response.slice(parseInt(offset), parseInt(offset) + parseInt(limit)),
		result: {
			offset: parseInt(offset),
			limit: parseInt(limit),
			total: response.length
		}
	}
};
