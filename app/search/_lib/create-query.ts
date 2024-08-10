type Prop = { rarity: string, skills: string[], name?: string, tags?: string[], type?: string,  offset?: string, limit?: string}
export const createQuery = ({ rarity, skills, name, tags, type,  offset, limit}: Prop ) => {
	const rarityQuery = rarity ? `rarity=${rarity}` : null;
	const typeQuery = type ? `type=${type}` : null;
	const nameQuery = name ? `name=${name}` : null;
	const skillsQuery = skills?.length > 0 ? `skills=${skills.join(",")}` : null;
	const tagsQuery = tags && tags?.length > 0 ? `tags=${tags.join(",")}` : null;
	const offsetQuery = offset ? `offset=${offset}` : null;
	const limitQuery = limit ? `limit=${limit}` : null;

	const queries = [rarityQuery, typeQuery, nameQuery, skillsQuery, tagsQuery, offsetQuery, limitQuery].filter((query) => query !== null);
	return queries.join("&");
};
