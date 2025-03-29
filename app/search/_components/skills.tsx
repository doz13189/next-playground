"use client"

import type { CharacterSchema } from "@/app/_data/character/schema";
import type { MemorySchema } from "@/app/_data/memory/schema";
import { querySkill } from "@/app/_lib/query/skill";
import { Dialog } from "@/app/_parts/Dialog";
import { Button } from "@/app/_parts/button";
import { Heading } from "@/app/_parts/heading";
import { Typography } from "@/app/_parts/typography";
import type { FC } from "react";
import type { z } from "zod";

export const Skills: FC<{
  skills:
  | z.infer<typeof CharacterSchema>["skills"]
  | z.infer<typeof MemorySchema>["skills"];
}> = ({ skills }) => {
  return (
    <>
      {Array.from(new Set(skills))
        .sort()
        .map((tag) => (
          <Dialog key={tag} dialogButton={<Button
            width={"auto"}
            color={"black"}
            backgroundColor={"tertiary"}
            paddingX={'2'}
            marginY={'1'}
            marginX={'1'}
            marginRight={'1'}
            fontWeight={"light"}
          >
            {tag}
          </Button>
          }
            content={(() => {
              const skill = querySkill(tag)
              if (!skill) {
                return (
                  <>
                    <Heading>{"404"}</Heading>
                    <Typography>{"該当のスキルが見つかりませんでした"}</Typography>
                    <Typography>{"開発者にお知らせ頂ければ対応するはずです✌️"}</Typography>
                  </>
                );
              }


              return (
                <>
                  <Heading my={"2"}>{skill.name}</Heading>
                  <Typography
                    // biome-ignore lint/security/noDangerouslySetInnerHtml:
                    dangerouslySetInnerHTML={{
                      __html: skill.description,
                    }} />
                </>
              );
            })()}
          />
        ))}
    </>
  );
};
