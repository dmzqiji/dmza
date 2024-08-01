<template>
  <div class="container">
    <div class="box">文字的条纹状态</div>
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
    margin: auto;
    width: 215px;
    height: 40px;
    font-size: 30px;
    font-weight: 900;
  }
  .box::before {
    position: absolute;
    content: "";
    width: 215px;
    height: 40px;
    background: repeating-linear-gradient(45deg, #fff 0% 1%, transparent 1% 2%, #fff 2% 3%, transparent 3% 4%);
  }
</style>