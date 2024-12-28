
import type { Type } from "@/app/_data/_common/schema";
import { css } from "@/styled-system/css";
import { flex } from "@/styled-system/patterns";
import type { FC } from "react";
import type { z } from "zod";
import { getTypeLabel } from "../_lib/utils";

export const SearchFilters: FC<{
  rarity: string;
  skills: string[];
  type?: string;
  name?: string;
  tags?: string;
}> = ({ rarity, type, skills, name, tags }) => {
  return (
    <div className={css({ position: 'relative' })}>
      <div className={flex({
        position: 'absolute',
        insetY: '0',
        start: '0',
        alignItems: 'center',
        ps: '3',
        pointerEvents: 'none'
      })}>
        <svg
          className={css({
            w: '4',
            h: '4',
            color: 'gray.500',
            _dark: { color: 'gray.400' }
          })}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <div className={css({ ps: '10' })}>
        {rarity && (
          <span key={rarity} className={css({
            display: 'inline-block',
            fontSize: 'xs'
          })}>
            {`${rarity.toUpperCase()},`}
          </span>
        )}
        {type && (
          <span key={type} className={css({
            display: 'inline-block',
            fontSize: 'xs'
          })}>
            {`${getTypeLabel(type as z.infer<typeof Type>)},`}
          </span>
        )}
        {name && (
          <span key={name} className={css({
            display: 'inline-block',
            fontSize: 'xs'
          })}>
            {`${name},`}
          </span>
        )}
        {tags && (
          <span key={tags} className={css({
            display: 'inline-block',
            fontSize: 'xs'
          })}>
            {`${tags},`}
          </span>
        )}
        {skills?.map((skill) => (
          <span key={skill} className={css({
            display: 'inline-block',
            fontSize: 'xs'
          })}>
            {`${skill},`}
          </span>
        ))}
      </div>
    </div>
  );
};