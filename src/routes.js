import Home from "./pages/Home.svelte";
import Watch from "./pages/Watch.svelte";

export default {
  '/': Home,
  '/watch/:key': Watch
};