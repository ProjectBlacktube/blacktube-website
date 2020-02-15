<script>
  export let alt;
  export let src;
</script>

<style>
  img {
    object-fit: cover;
    border-radius:50%;
    width: 36px;
    height: 36px;
  }
</style>

<img alt={alt} src={src} />