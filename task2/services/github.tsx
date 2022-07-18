import api from ".";

export const getStarredRepository = async () => {
  const response = await api.get(
    "/search/repositories?q=created:>2021-08-13&sort=stars&order=desc"
  );
  return response;
};
