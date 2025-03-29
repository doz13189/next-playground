import { skills } from "@/app/_data/skill/object";

export const querySkill = (name: string) => {
  return skills.skills.filter((skill) => {
    if (skill.name === name) {
      return skill;
    }
  })[0];
};
