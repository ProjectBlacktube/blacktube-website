<script>
  export let key;

  const url = `/dash/${key}/manifest.mpd`;
</script>

<style>
  .fit {
    width: 100%;
  }
</style>

<div>
  <video class="fit" data-dashjs-player src={url} controls></video>
</div>
