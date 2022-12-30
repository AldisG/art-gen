export const requestArtwork = async ({ prompt, size, n }) => {
  const apiUrl = "http://localhost:5000/openai/generateimage";
  return await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt,
      size,
      n,
    }),
  })
    .then((res) => {
      console.log({ prompt, size, n });
      return res.json();
    })
    .then(({ data }) => {
      console.log(data);
      // return data;
    })
    .catch((err) => {
      console.log("Couldn't fetch anything due to an error!:", err);
      // retun error
    })
    .finally(() => {
      // retun nothing fetched
    });
};
