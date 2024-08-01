<template>
  <div class="container">
    <div class="box">
      <p>文字背景的高亮显示</p>
    </div>
  </div>
</template>


<script>

  export default {

  }

</script>


<style scoped>

  .container {
    height: 370px;
    width: 300px;
    background: linear-gradient(45deg, #ec0606, #3a07d2);
  }
  .box {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    position: relative;
  }
  p {
    position: absolute;
    top: -16.1%;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-top: 30%;
    font-size: 60px;
    font-weight: 900;
    color: transparent;
    -webkit-text-stroke: 2px #7e7575;
    background: linear-gradient(45deg, #ec0606, #3a07d2);
    -webkit-background-clip: text;
  }

</style>