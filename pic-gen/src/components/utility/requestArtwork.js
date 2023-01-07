import { imageList } from "../../store/imageList.js";

const updateStore = (newList, size, loading) => {
  imageList.update(
    (list) =>
      (list = {
        imageList: newList ? newList : imageList,
        size,
        loading,
      })
  );
};

export const requestArtwork = async ({ prompt, size, n }) => {
  updateStore([], size, true); // reset store on search

  const apiUrl = "http://localhost:5000/openai/generateimage";
  await fetch(apiUrl, {
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
    .then((res) => res.json())
    .then(({ data }) => {
      if (data) {
        updateStore(data, size, false);
      }
    })
    .catch((err) => {
      console.log("Couldn't fetch anything due to an error!:", err.message);
      imageList.set((list) => (list = []));
      updateStore([], size, false);
    });
};
