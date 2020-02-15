<script>
  import Item from "./SummaryItem.svelte";
  import { getClient, query } from "svelte-apollo";
  import ALL_VIDEO_QUERY from "../graphql/queries/AllVideos.js";
  
  const client = getClient();
  const allVideos = query(client, { query: ALL_VIDEO_QUERY });
</script>

<div>
  {#await $allVideos}
    <p> .. loading .. </p>
  {:then response}
    {#each response.data.videos as video}
      <Item {...video}/>
    {/each}
  {:catch error}
    <p> error {error.message} </p>
  {/await}
</div>