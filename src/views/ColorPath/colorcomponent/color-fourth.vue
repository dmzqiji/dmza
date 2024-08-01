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
    background-color: #219fd5;
    position: relative;
    overflow: hidden;
  }
  .box {
    position: relative;
    width: 300px;
    height: 300px;
    margin: 0px auto;
    border-radius: 46% 42% 47% 44%;
    background: linear-gradient(#f5f3f3, #9c27b0);
    transform:scale(2) translateY(-150px) rotate(0deg);
    animation: linemove 10s infinite linear alternate;
    filter: blur(1px) contrast(5);
  }
  .box::before {
    content: "";
    position: absolute;
    width: 98%;
    height: 98%;
    background: #000;
    border-radius: 46% 42% 47% 44%;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
  }
  @keyframes linemove {
    100% {
      transform: scale(1.5) translateY(-70px) rotate(360deg);
    }
  }

</style>