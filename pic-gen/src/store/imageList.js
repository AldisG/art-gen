import { writable } from "svelte/store";

// export const imageList = writable([]);
export const imageList = writable({
  imageList: [],
  size: "small",
  loading: false,
});
