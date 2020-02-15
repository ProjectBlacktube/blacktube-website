<script>
  import Navbar from "./components/NavigationBar.svelte";
  import List from "./components/SummaryList.svelte";
  import client from "./clients/apollo.js";
  import { setClient } from "svelte-apollo";

  setClient(client);
</script>

<div>
  <Navbar/>
  <List/>
</div>
