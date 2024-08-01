<template>
  <div class="container">
    <div class="box">hover</div>
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
    position: relative;
    overflow: hidden;
  }
  .box {
    top: 45%;
    position: absolute;
    width: 50px;
    height: 25px;
    text-align: center;
    line-height: 25px;
    border: 1px solid #000;
    background-color: #08f4f4;
  }
  .box:hover {
    box-shadow: 0 0 0 200px rgba(0, 0, 0, .5);
  }
</style>