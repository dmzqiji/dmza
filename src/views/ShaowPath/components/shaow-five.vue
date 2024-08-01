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
    overflow: hidden;
    background-color: #fff;
    box-sizing: border-box;
  }
  .box {
    width: 100px;
    height: 100px;
    position: relative;
    top: 130px;
    left: 10px;
    border-radius: 50%;
    animation: rotate 45s infinite linear;
  }
  .box::before {
    position: absolute;
    content: "";
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    box-sizing: border-box;
    border-radius: 50%;
    border-top: 3px solid #000;
     border-left: 3px solid #000;
    border-bottom: 3px solid transparent;
    border-right: 3px solid transparent;
    transform: rotate(720deg);
    animation: rotate 3s infinite ease-out;
  }
  .box::after {
    position: absolute;
    content: "";
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    box-sizing: border-box;
    border-radius: 50%;
    border-bottom: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 7px solid #fff;
    border-left: 7px solid #fff;
    transform: rotate(720deg);
    animation: rotate 3s infinite ease-in-out;
  }
  @keyframes rotate {
    100% {
      transform: rotate(0deg);
    }
  }
</style>