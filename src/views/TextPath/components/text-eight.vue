<template>
  <div class="container">
    <div class="box">渐变实现波浪</div>
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
    box-sizing: border-box;
  }
  .box {
    width: 200px;
    height: 100px;
    margin: auto;
    font-size: 20px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .box::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 10px -7px, transparent 8px, red 8px, red 9px, transparent 9px) repeat-x;
    background-size: 20px 20px;
    background-position: -10px calc(100% + 16px);
  }
  .box::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 10px 27px, transparent 8px, green 8px, green 9px, transparent 9px) repeat-x;
    background-size: 20px 20px;
    background-position: 0 calc(100% - 4px); 
  }
</style>