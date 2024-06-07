import { FC } from "react";
import { z } from "zod";
import { getHeroes } from "@/app/_lib/handler/heroes";
import { HeroSchema } from "@/app/_data/hero/schema";
import { NoData } from "@/app/search/_components/no-data";
import Link from "next/link";
import { Tags } from "../../../_components/tags";

export const Hero: FC<{ hero: z.infer<typeof HeroSchema> }> = ({
	hero,
}) => {
	return (
		<Link href={`/search/hero/result/${hero.id}`}>
			<div>{`[${hero.rarity}] ${hero.epithet} ${hero.name}`}</div>
			<Tags tags={[...hero.plusUltra.tags, ...hero.actionSkill1.tags, ...hero.actionSkill2.tags, ...hero.autoSkill1.tags, ...hero.autoSkill2.tags]} />
		</Link>
	);
};

export const Heroes: FC<{
	args: {
		searchParams: { rarity: string; tags: string };
	};
}> = ({ args }) => {
	const argRarity = args.searchParams?.rarity;
	const argTags = args.searchParams?.tags;

	const response = getHeroes(argRarity, argTags);
	return response
		.then((value) => {
			const heroes = value.heroes;
			if (!heroes) {
				return <NoData />;
			}

			if (heroes.length === 0) {
				return <NoData />;
			}

			return heroes.map((hero) => <div className="mb-2"><Hero hero={hero} /></div>);
		})
		.catch((err) => {
			console.error(err);
			return <NoData />;
		});
};
