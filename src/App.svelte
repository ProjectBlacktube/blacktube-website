<script>
  import client from "./clients/apollo.js";
  import { getClient, setClient, query, mutate } from "svelte-apollo";
  import ALL_USER_QUERY from "./graphql/queries/AllUsers.js";
  
  const allUsers = query(client, { query: ALL_USER_QUERY });
</script>

<div>
  <div>meong</div>
  {#await $allUsers}
    <p> .. loading .. </p>
  {:then data}
    <p> sukses {data.data} </p>
  {:catch error}
    <p> error {error.message} </p>
  {/await}
</div>
