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
    width: 120px;
    height: 120px;
    margin: auto;
    position: relative;
    background:linear-gradient(120deg, #34e0f0 0%, #b400ff 100%);
    border-radius: 30%;
    transform: rotate(0deg);
    animation: Lboxr 8s linear infinite;
  }
  .box::before {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(180deg, #35a0f0 0%, #b233f0 100%);
    opacity: .8;
    box-shadow: 5px 5px 90px rgba(10, 102, 255, 0.5);
    border-radius: 35%;
    animation: Lboxr 8s linear 2s infinite;
  }
  @keyframes Lboxr {
    50% {
      transform: rotate(180deg);
      border-radius: 50%;
    }
    100% {
      transform: rotate(360deg);
      border-radius: 30%;
    }
  }

</style>