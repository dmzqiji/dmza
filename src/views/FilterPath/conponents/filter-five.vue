<template>
  <div class="container">
    <div class="box">
      <div class="ball"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
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
    background-color: #000;
    /* filter: blur(5px) contrast(10); */
    overflow: hidden;
  }
  .box {
    width: 280px;
    height: 350px;  
    filter: blur(5px) contrast(10);
  }
  .ball {
    position: absolute;
    left: 0; 
    top: 40%;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background: #fff;
    animation: move 10s infinite;
  }
  .wall {
    position: absolute;
    left: 20%; 
    top: 30%;
    height: 80px;
    width: 20px;
    border-radius: 50%;
    background: rgba(0, 0, 0, .5);
  }
  .wall:nth-child(2) {
    left: 40%; 
    border-radius: 50%;
  }
  .wall:nth-child(3) {
    left: 60%; 
    border-radius: 50%;
  }
  .wall:nth-child(4) {
    left: 80%; 
    border-radius: 50%;
  }
  @keyframes move {
    20% {
      transform: translate(100px, 0);
      background: #ddd;
    }
    100% {
      transform: translate(200px, 0);
      background: #ddd;
    }
  } 
</style>