import "./app.scss";
import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "Pic gen",
  },
});

export default app;
