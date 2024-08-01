<template>
  <div class="container">
    <div class="box1 item"></div>
    <div class="box2 item"></div>
  </div>
</template>


<script>

  export default {

  }

</script>


<style scoped>
  .container {
    width: 300px;
    height: 370px;
    display: flex;
  }
  .item {
    position: absolute;
    width: 300px;
    height: 370px;
  }
  .box1 {
    background: url(https://picsum.photos/id/10/1920/1080);
    background-size: cover;
  }
  .box2 {
    background: url(https://picsum.photos/id/20/1920/1080);
    background-size: cover;
    mask-image: linear-gradient(0, rgba(0, 0, 0, 1) 40%, transparent 60%);
  }
</style>