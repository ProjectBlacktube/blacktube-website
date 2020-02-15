<script>
  import { shortenNumber } from "../helper.js";

  export let title;
  export let owner;
  export let created_at;
  export let view_count = 0;
</script>

<style>
  .container {
    padding: 0 12px;
  }

  .top-container {
    padding: 12px 0;
    line-height: 1.5;
  }

  .bottom-container {
    border-top: 1px solid #d3d3d3;
    border-bottom: 1px solid #d3d3d3;
    padding: 4px 0;
    display: flex;
  }

  .floating {
    margin: auto 0 auto;
  }

  .title {
    font-size: 16px;
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
</style>

<div class="container">
  <div class="top-container">
    <div class="title">{title}</div>
    <div class="subtitle">{`${shortenNumber(view_count)} views`}</div>
  </div>
  <div class="bottom-container">
    <div class="avatar">
      <img alt="avatar" src={owner.avatar} />
    </div>
    <div class="title floating">{owner.name}</div>
  </div>
</div>