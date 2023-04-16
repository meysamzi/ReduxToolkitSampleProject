export const getTodoDataThunk = async () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  return fetch(url)
    .then((response) => response.json())
    .then((json) => json)
    .catch((err) => err);
};

export const changeTitleThunk = async (data) => {
  const url = `https://jsonplaceholder.typicode.com/posts/${data?.id}`;
  return fetch(url, {
    method: "PUT",
    body: JSON.stringify({
      id: data?.id,
      title: "change title",
      body: "change body",
      userId: data?.userId,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => json)
    .catch((err) => err);
};
