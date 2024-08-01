<template>
  <div class="container">
      <div class="inner"></div>
      <div class="inner"></div>
      <div class="inner"></div>
      <div class="inner"></div>
      <div class="inner"></div>
      <div class="inner"></div>
      <div class="inner"></div>
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
    background-color: #514d4d;
    filter:contrast(1.2);
    display: flex;
  }
  .inner{
    mix-blend-mode:screen;  
    width: 100px;
    height: 100px;
    top: 40%;
    left: 35%;
    background-color: #fff;
    position:absolute;
    border-radius:50%;
    filter:contrast(1.2);
    animation:wave 3s infinite linear;
  }
  .inner:nth-child(0) {
    left:-11%;
    right:-2%;
    top:-12%;
    bottom:-5%;
    transform-origin:46% 53%;
    animation-delay:0;
    background-color:hsl(0, 50%, 50%);
  }
  .inner:nth-child(1) {
    left:33%;
    top:39%;
    transform-origin:47% 50%;
    animation-delay:-1s;
    background-color:hsl(50, 60%, 50%);
  }
  .inner:nth-child(2) {
    left: 38%;
    top: 39%;
    transform-origin:49% 53%;
    animation-delay:-1.5s;
    background-color:hsl(100, 70%, 50%);
  }
  .inner:nth-child(3) {
    left:33%;
    top:42%;
    transform-origin:47% 52%;
    animation-delay:-2s;
    background-color:hsl(150, 80%, 50%);
  }
  .inner:nth-child(4) {
    left:38%;
    top:42%;
    transform-origin:47% 52%;
    animation-delay:-2.5s;
    background-color:hsl(200, 90%, 50%);
  }
  .inner:nth-child(5) {
    left:35%;
    top:38.5%;
    transform-origin:48% 51%;
    animation-delay:-3s;
    background-color:hsl(250, 100%, 50%);
  }
  .inner:nth-child(6) {
    left:35%;
    top:42%;
    transform-origin:47% 50%;
    animation-delay:-3.5s;
    background-color:hsl(300, 100%, 50%);
  }
  @keyframes wave {
    from {
      transform:rotateZ(0deg);
    }
    to {
      transform:rotateZ(360deg);
    }
  }
</style>