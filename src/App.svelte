<script>
  import { setClient } from "svelte-apollo";
  import Router from "svelte-spa-router";

  import client from "./clients/apollo.js";
  import routes from "./routes.js";

  setClient(client);
</script>

<Router {routes}/>