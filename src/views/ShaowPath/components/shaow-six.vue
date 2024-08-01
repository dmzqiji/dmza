<template>
  <div class="container">
    <div class="box">
      <div class="inner"></div>
    </div>
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
    background-color: #fff;
    position: relative;
  }
  .box {
    filter: drop-shadow(6px 5px 5px rgba(50, 50, 0, 0.5));
  }
  .inner {
    position: absolute;
    top: 20%;
    left: -100px;
    width: 200px;
    height: 200px;
    background: #c7e00e;
    clip-path: polygon(0 50%, 15% 15%, 50% 0, 85% 15%, 50% 50%, 85% 85%, 50% 100%, 15% 85%);
  }
</style>