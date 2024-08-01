<template>
  <div class="container">
    <div class="box">
      毛玻璃效果
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
    background: url(@/assets/img/R-C.jfif);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .box {
    width: 200px;
    height: 100px;
    border-radius: 5px;
    text-align: center;
    line-height: 100px;
    border: 2px solid rgba(225, 225, 225, 0.1);
    background: rgba(225, 225, 225, 0.3);
    backdrop-filter: blur(10px);
    /* filter: blur(5px); */
    box-shadow: 0 0 80px rgba(0, 0, 0, 0.1);
  }

</style>