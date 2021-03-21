export const fetchPosts = async (limit: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
  );
  const data = await response.json();

  return data;
};
