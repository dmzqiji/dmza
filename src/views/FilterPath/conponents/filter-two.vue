<template>
  <div class="container">
    <div class="box"></div>
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
    background-color: #000;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
  }
  .box {
    position: relative;
    top: 100px;
    left: 70px;
    width: 23.5px;
    height: 109px;
    z-index: 1;
    background: #24f6f0;
  }
  .box::before {
    content: "";
    position: absolute;
    width: 50px;
    height: 50px;
    border: 23.5px solid #24f6f0;
    border-top: 23.5px solid transparent;
    border-radius: 50%;
    top: 60.5px;
    left: -73.5px;
    transform: rotate(45deg);
  }
  .box::after {
    content: "";
    position: absolute;
    width: 70px;
    height: 70px;
    border: 20px solid #24f6f0;
    border-right: 20px solid transparent;
    border-top: 20px solid transparent;
    border-left: 20px solid transparent;
    top: -55px;
    right: -91.5px;
    border-radius: 100%;
    transform: rotate(45deg);
    z-index: -10;
  }
  .box:last-child {
    left: -29px;
    top: 105px;
    background: #fe2d52;
    z-index: 100;
    mix-blend-mode: lighten;
    animation: moveLeft 10s infinite;
  }
  .box:last-child::before {
    border: 23.5px solid #fe2d52;
    border-top: 23.5px solid transparent;
  }
  .box:last-child::after {
    border: 20px solid #fe2d52;
    border-right: 20px solid transparent;
    border-top: 20px solid transparent;
    border-left: 20px solid transparent;
  }
  @keyframes moveLeft {
    0% {
      transform: translate(100px);
    }
    50% {
      transform: translate(0px);
    }
    100% {
      transform: translate(0px);
    }
  }
</style>