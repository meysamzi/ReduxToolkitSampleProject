export const getTodoDataThunk = async () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  return fetch(url)
    .then((response) => response.json())
    .then((json) => json)
    .catch((err) => err);
};
