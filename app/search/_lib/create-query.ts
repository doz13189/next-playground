type Prop = {
  rarity?: string;
  skills?: string[];
  name?: string;
  skillDescriptions?: string[];
  tags?: string;
  type?: string;
  offset?: string;
  limit?: string;
};
export const createQuery = ({
  rarity,
  skills,
  name,
  skillDescriptions,
  tags,
  type,
  offset,
  limit,
}: Prop) => {
  const rarityQuery = rarity ? `rarity=${rarity}` : null;
  const typeQuery = type ? `type=${type}` : null;
  const nameQuery = name ? `name=${name}` : null;
  const skillDescriptionsQuery =
    skillDescriptions && skillDescriptions?.length > 0
      ? `skillDescriptions=${skillDescriptions.filter((desc) => desc.trim() !== "").join(",")}`
      : null;
  const skillsQuery = skills
    ? skills?.length > 0
      ? `skills=${skills.join(",")}`
      : null
    : null;
  const tagsQuery = tags ? `tags=${tags}` : null;
  const offsetQuery = offset ? `offset=${offset}` : null;
  const limitQuery = limit ? `limit=${limit}` : null;

  const queries = [
    rarityQuery,
    typeQuery,
    nameQuery,
    skillDescriptionsQuery,
    skillsQuery,
    tagsQuery,
    offsetQuery,
    limitQuery,
  ].filter((query) => query !== null);
  return queries.join("&");
};
