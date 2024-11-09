"use client";

import type { CharacterSchema } from "@/app/_data/character/schema";
import { type FC, useState } from "react";
import type { z } from "zod";

const getCharacterContent = (
  activeTabState: number,
  character: z.infer<typeof CharacterSchema>,
) => {
  switch (activeTabState) {
    case 0:
      return character.skill.levelone;
    case 1:
      return character.skill.leveltwo;
    case 2:
      return character.skill.levelthree;
    case 3:
      return character.skill.dxlevelone;
    case 4:
      return character.skill.dxleveltwo;
    default:
      return character.skill.dxleveltwo;
  }
};

export const CharacterDetailContents: FC<{
  character: z.infer<typeof CharacterSchema>;
}> = ({ character }) => {
  const [activeTabState, setActiveTabState] = useState<0 | 1 | 2 | 3 | 4>(4);

  return (
    <div>
      <ul className="my-3 flex flex-wrap text-xs font-medium text-center text-gray-500">
        <li className="me-2">
          <button
            type="button"
            onClick={() => setActiveTabState(0)}
            className={`
						inline-block px-2 py-1 rounded-lg
						${activeTabState === 0 ? "text-white bg-orange active" : "hover:text-gray-900 hover:bg-gray-100"}
				`}
            aria-current="page"
          >
            Lv.1
          </button>
        </li>
        <li className="me-2">
          <button
            type="button"
            onClick={() => setActiveTabState(1)}
            className={`
					inline-block px-2 py-1 rounded-lg
					${activeTabState === 1 ? "text-white bg-orange active" : "hover:text-gray-900 hover:bg-gray-100"}
				`}
          >
            Lv.2
          </button>
        </li>
        <li className="me-2">
          <button
            type="button"
            onClick={() => setActiveTabState(2)}
            className={`
					inline-block px-2 py-1 rounded-lg
					${activeTabState === 2 ? "text-white bg-orange active" : "hover:text-gray-900 hover:bg-gray-100"}
				`}
          >
            Lv.3
          </button>
        </li>
        <li className="me-2">
          <button
            type="button"
            onClick={() => setActiveTabState(3)}
            className={`
					inline-block px-2 py-1 rounded-lg
					${activeTabState === 3 ? "text-white bg-orange active" : "hover:text-gray-900 hover:bg-gray-100"}
				`}
          >
            DX Lv.1
          </button>
        </li>
        <li className="me-2">
          <button
            type="button"
            onClick={() => setActiveTabState(4)}
            className={`
					inline-block px-2 py-1 rounded-lg
					${activeTabState === 4 ? "text-white bg-orange active" : "hover:text-gray-900 hover:bg-gray-100"}
				`}
          >
            DX Lv.2
          </button>
        </li>
      </ul>

      <div className="py-2">
        <p className="text-orange text-xs">
          {`プルスウルトラ技（${getCharacterContent(activeTabState, character).plusUltra.name}）`}
        </p>
        <div
          className="
					mt-1
					p-1
					text-xs
					bg-very-light-gray
					rounded-lg
				"
          // biome-ignore lint/security/noDangerouslySetInnerHtml:
          dangerouslySetInnerHTML={{
            __html: getCharacterContent(activeTabState, character).plusUltra
              .description,
          }}
        />
      </div>

      <div className="py-2">
        <p className="text-orange text-xs">
          {`アクションスキル（${getCharacterContent(activeTabState, character).actionSkill1.name}）`}
        </p>
        <div className="py-1">
          <p className="text-xs">{`クールタイム ${getCharacterContent(activeTabState, character).actionSkill1.coolTime} ターン`}</p>
        </div>
        <div
          className="
					mt-1
					p-1
					text-xs
					bg-very-light-gray
					rounded-lg
				"
          // biome-ignore lint/security/noDangerouslySetInnerHtml:
          dangerouslySetInnerHTML={{
            __html: getCharacterContent(activeTabState, character).actionSkill1
              .description,
          }}
        />
      </div>

      <div className="py-2">
        <p className="text-orange text-xs">
          {`アクションスキル（${getCharacterContent(activeTabState, character).actionSkill2.name}）`}
        </p>
        <div className="py-1">
          <p className="text-xs">{`クールタイム ${getCharacterContent(activeTabState, character).actionSkill2.coolTime} ターン`}</p>
        </div>
        <div
          className="
					mt-1
					p-1
					text-xs
					bg-very-light-gray
					rounded-lg
				"
          // biome-ignore lint/security/noDangerouslySetInnerHtml:
          dangerouslySetInnerHTML={{
            __html: getCharacterContent(activeTabState, character).actionSkill2
              .description,
          }}
        />
      </div>

      <div className="py-2">
        <p className="text-orange text-xs">
          {`オートスキル（${getCharacterContent(activeTabState, character).autoSkill1.name}）`}
        </p>
        <div
          className="
					mt-1
					p-1
					text-xs
					bg-very-light-gray
					rounded-lg
				"
          // biome-ignore lint/security/noDangerouslySetInnerHtml:
          dangerouslySetInnerHTML={{
            __html: getCharacterContent(activeTabState, character).autoSkill1
              .description,
          }}
        />
      </div>

      <div className="py-2">
        <p className="text-orange text-xs">
          {`オートスキル（${getCharacterContent(activeTabState, character).autoSkill2.name}）`}
        </p>
        <div
          className="
					mt-1
					p-1
					text-xs
					bg-very-light-gray
					rounded-lg
				"
          // biome-ignore lint/security/noDangerouslySetInnerHtml:
          dangerouslySetInnerHTML={{
            __html: getCharacterContent(activeTabState, character).autoSkill2
              .description,
          }}
        />
      </div>

      <div className="py-2">
        <p className="text-orange text-xs">専用EXオートスキル</p>
        <div
          className="
					mt-1
					p-1
					text-xs
					bg-very-light-gray
					rounded-lg
				"
        >
          {character.uniqueSkills.map((skill, index) => {
            return (
              <p className="m-1" key={skill}>
                ・{skill}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};
