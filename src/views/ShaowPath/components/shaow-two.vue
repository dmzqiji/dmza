<template>
  <div class="container">
    <div class="box">
      <div class="inner">
        <span>45%</span>
      </div>
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
    box-sizing: border-box;
    display: flex;
  }
  .box {
    width: 200px;
    height: 200px;
    margin: auto;
    padding: 4px;
    border: 10px solid rgb(118, 218, 255);
    border-radius: 50%;
    overflow: hidden;
  }
  .inner {
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: rgb(118, 218, 255);
  }
  .inner::before {
    content: "";
    position: absolute;
    width: 400px;
    height: 400px;
    top: 0;
    left: 50%;
    background-color: rgba(255, 255, 255, .4);
    border-radius: 45%;
    transform: translate(-50%, -70%) rotate(0deg);
    animation: wavyrotate 8s linear infinite;
    z-index: 10;
  }
  .inner::after {
    content: "";
    position: absolute;
    width: 400px;
    height: 400px;
    top: 0;
    border-radius: 47%;
    background-color: rgba(255, 255, 255, .9);
    transform: translate( -25%, -73%) rotate(0);
    animation: rotate 10s ease-in-out  infinite;
    z-index: 20;
  }
  span {
    font-size: 40px;
    font-weight: 900;
    position: absolute;
    left: 35%;
    top: 45%;
    z-index: 30;
  }

  @keyframes wavyrotate {
    50% {
      transform: translate(-50%, -70%) rotate(360deg);
    }
    100% {
      transform: translate(-50%, -70%) rotate(360deg);
    }
  }
  @keyframes rotate {
    50% {
       transform: translate(-25%, -73%) rotate(360deg);
    }
    100% {
      transform: translate(-25%, -73%) rotate(360deg);
    }
  }

</style>