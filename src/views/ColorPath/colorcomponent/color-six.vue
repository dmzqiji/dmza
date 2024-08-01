<template>
  <div class="container">
    <div class="box">
      <div class="inner">hover</div>
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
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .box {
    width: 104px;
    height: 104px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .inner {
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    border-radius: 50%;
    cursor: pointer;
    background: #07d526;
    box-shadow: 50px -50px 0 2px #e91e63, -50px -50px 0 2px #e91e63,-50px 50px 0 2px #e91e63,50px 50px 0 2px #e91e63;
  }
  .inner:hover {
    animation: remove .5s ease forwards;
  }
  @keyframes remove {
    0% {
      box-shadow: 50px -50px 0 2px #e91e63, -50px -50px 0 2px #e91e63, -50px 50px 0 2px #e91e63, 50px 50px 0 2px #e91e63, 0 0 0 2px transparent;
    }
    25% {
      box-shadow: 0 -104px 0 2px #e91e63, -50px -50px 0 2px #e91e63, -50px 50px 0 2px #e91e63, 50px 50px 0 2px #e91e63, 0 0 0 2px #0e0d0d;
    } 
    50% {
      box-shadow: 0 -104px 0 2px #e91e63, -104px 0px 0 2px #e91e63, -50px 50px 0 2px #e91e63, 50px 50px 0 2px #e91e63, 0 0 0 2px #0e0d0d;
    }
    75% {
      box-shadow: 0 -104px 0 2px #e91e63, -104px 0px 0 2px #e91e63, 0px 104px 0 2px #e91e63, 50px 50px 0 2px #e91e63, 0 0 0 2px #0e0d0d;
    }
    100% {
      box-shadow: 0 -104px 0 2px #e91e63, -104px 0px 0 2px #e91e63, 0px 104px 0 2px #e91e63, 100px 30px 0 2px #e91e63, 0 0 0 2px #0e0d0d;
    }
  }

</style>