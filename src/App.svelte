<script>
  import { setClient } from "svelte-apollo";
  import { Router, Route } from "svelte-routing";

  import Home from "./components/Home.svelte";
  import WatchScreen from "./components/WatchScreen.svelte";
  import client from "./clients/apollo.js";

  setClient(client);
  export let url = "";
</script>

<Router url="{url}">
  <div>
    <Route path="watch/:key" component="{WatchScreen}" />
    <Route path="/"><Home /></Route>
  </div>
</Router>
