<template>
  <div class="container">
    <div class="stop">
      <span>stop</span>
    </div>
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
    background-color: #fff;
    position: relative;
  }
  .stop {
    position: absolute;
    top: 20%;
    width: 50px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    background-color: #c021d8;
    border-radius: 5px;
    margin: 5px auto;
    cursor: pointer;
  }
  .stop:hover + .box {
    animation-play-state: paused;
  }
  .box {
    position: absolute;
    top: 50%;
    width: 80px;
    height: 80px;
    background: pink;
    border-radius: 50%;
    margin-top: 50px;
    animation: stopboxmove 2s linear infinite alternate;
  }
  @keyframes stopboxmove {
    0% {
      transform: translate(-100%, 0);
    }
    100% {
      transform: translate(100%, 0);
    }
  }
</style>