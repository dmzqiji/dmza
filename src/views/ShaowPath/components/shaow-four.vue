<template>
  <div class="container">
    <div class="box"></div>
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
    background-image: url(@/assets/img/R-C.jfif);
    /* background-size: cover; */
    overflow: hidden;
    position: relative;
  }
  .box {
    position: absolute;
    width: 250%;
    height: 100%;
    background:  radial-gradient(circle at 50% 50%, transparent 0%, transparent 10%, rgba(0, 0, 0, .7) 3.5%, rgba(0, 0, 0, .8) 100%);
    animation: Lc-move 5s infinite alternate;
  }
  @keyframes Lc-move {
    0% {
      transform: translateX(-13%);
    }
    100% {
      transform: translateX(13%);
    }
  }

</style>