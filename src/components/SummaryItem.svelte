<script>
  export let title;
  export let owner;
  export let created_at;
  export let preview_image;
  export let view_count = 0;
  const subtitleText = `${owner.name} - ${view_count} views - ${created_at} seconds ago`;
</script>

<style>
  .info {
    padding: 8px;
    display: flex;
  }

  .title {
    font-size: 14px;
  }

  .subtitle {
    font-size: 12px;
  }

  .avatar {
    margin-right: 12px;
  }

  .avatar img {
    object-fit: cover;
    border-radius:50%;
    width: 36px;
    height: 36px;
  }

  .menu {
    margin-left: auto;
    margin-top: 8px;
  }

  .fit {
    max-width: 100%;
  }
</style>

<div class="row">
  <img 
    alt="preview"
    class="fit" 
    src={preview_image} 
  />
  <div class="info">
    <div class="avatar">
      <img alt="avatar" src={owner.avatar} />
    </div>
    <div>
      <div class="title">{title}</div>
      <div class="subtitle">{subtitleText}</div>
    </div>
    <i class="menu material-icons">more_vert</i>
  </div>
</div>