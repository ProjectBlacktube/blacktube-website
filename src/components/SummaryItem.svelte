<script>
  export let title;
  export let owner;
  export let created_at;
  export let preview_image;
  export let view_count = 0;

  function generateDateDifferences(creationTimestamp) {
    let diff = Math.floor((Date.now() - creationTimestamp) / 1000);
    if (diff < 60) {
      return `${diff} seconds`;
    }
    diff = Math.floor(diff / 60);
    if (diff < 60) {
      return `${diff} minutes`;
    }
    diff = Math.floor(diff / 60);
    if (diff < 24) {
      return `${diff} hours`;
    }
    diff = Math.floor(diff / 24);
    if (diff < 30) {
      return `${diff} days`;
    }
    if (diff < 365) {
      return `${Math.floor(diff / 30)} months`;
    }
    diff = Math.floor(diff / 365);
    return `${diff} years`;
  }

  function shortenNumber(num) {
    return Math.abs(num) > 999 ? 
      Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'k' : 
      num;
  }

  const subtitleText = `${owner.name} - ${shortenNumber(view_count)} views - ${generateDateDifferences(created_at)} ago`;
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