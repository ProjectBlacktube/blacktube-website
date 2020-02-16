<script>
  import { onMount } from 'svelte';

  export let key;
  const manifestUri = `/dash/${key}/manifest.mpd`;
  let playerHandler;

  console.log('test')

  function initApp() {
    console.log('loaded')
    
    // Install built-in polyfills to patch browser incompatibilities.
    shaka.polyfill.installAll();

    // Check to see if the browser supports the basic APIs Shaka needs.
    if (shaka.Player.isBrowserSupported()) {
      // Everything looks good!
      initPlayer();
    } else {
      // This browser does not have the minimum set of APIs we need.
      console.error("Browser not supported!");
    }
  }

  function initPlayer() {
    // Create a Player instance.
    var player = new shaka.Player(playerHandler);

    // Listen for error events.
    player.addEventListener("error", onErrorEvent);

    // Try to load a manifest.
    // This is an asynchronous process.
    player
      .load(manifestUri)
      .then(function() {
        // This runs if the asynchronous load is successful.
        console.log("The video has now been loaded!");
      })
      .catch(onError); // onError is executed if the asynchronous load fails.
  }

  function onErrorEvent(event) {
    // Extract the shaka.util.Error object from the event.
    onError(JSON.stringify(event.detail));
  }

  function onError(error) {
    // Log the error.
    console.error("Error code", error.code, "object", error);
  }

  onMount(async () => { initApp(); });
</script>

<style>
  .fit {
    width: 100%;
  }
</style>

<div>
  <video
    bind:this={playerHandler}
    class="fit"
    id="video"
    poster="//shaka-player-demo.appspot.com/assets/poster.jpg"
    controls
    autoplay />
</div>
