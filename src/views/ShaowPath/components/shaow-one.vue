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
    background-color: #fff;
    display: flex;
  }
  .box {
    position: relative;
    width: 200px;
    height: 150px;
    margin: auto;
    box-sizing: border-box;
    border-radius: 10px;
    overflow: hidden;
    padding: 5px;
  }
  .box::before {
    content: '';
    position: absolute;
    /* z-index: -2; */
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    background-color: #10e1d7;
    background-repeat: no-repeat;
    background-size: 50% 50%;
    background-position: 0 0;
    background-image: conic-gradient(#399953, #399953);
    animation: lrotate 4s linear infinite;
  }
  .box::after {
    content: "";
    position: absolute;
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 5px;
  }
  @keyframes lrotate {
    100% {
      transform: rotate(1turn);
    }
  }

</style>