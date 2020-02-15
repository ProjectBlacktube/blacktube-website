<script>
  export let title = 'Title';
  export let owner = { name: 'Author' };
  const viewCount = 20;
  const subtitleText = `${owner.name} - ${viewCount} views - 1 hour ago`;
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
    src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" 
  />
  <div class="info">
    <div class="avatar">
      <img alt="avatar" src="http://i.stack.imgur.com/Dj7eP.jpg" />
    </div>
    <div>
      <div class="title">{title}</div>
      <div class="subtitle">{subtitleText}</div>
    </div>
    <i class="menu material-icons">more_vert</i>
  </div>
</div>