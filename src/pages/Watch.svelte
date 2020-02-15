<script>
  import { getClient, query } from "svelte-apollo";

  import Frame from "../components/WatchFrame.svelte";
  import Navbar from "../components/NavigationBar.svelte";
  
  import VIDEO_BY_KEY_QUERY from "../graphql/queries/VideoByKey.js";
  
  export let key;
  
  const client = getClient();
  const playedVideo = query(client, { query: VIDEO_BY_KEY_QUERY(key) });
</script>

<div>
  <Navbar />
  {#await $playedVideo}
    <p> .. loading .. </p>
  {:then response}
    <div>
      {response.data.videoByKey.title}
      <Frame />
    </div>
  {:catch error}
    <p> error {error.message} </p>
  {/await}
</div>