import { expect, test } from "vitest";
import { queryMemory } from "./memory";

test("adds 1 + 2 to equal 3", async () => {
  const memory = await queryMemory("2400152");
  expect(memory.id).toBe("2400152");
  expect(memory.name).toBe("コミックス100M SMASH!");
});
