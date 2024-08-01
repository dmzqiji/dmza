<template>
  <div class="container">
    <div class="box">下波浪线移动</div>
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
    width: 100px;
    height: 50px;
    line-height: 50px;
  }
  .box::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 10px -7px, transparent 8px, currentColor 8px, currentColor 9px, transparent 9px) repeat-x;
    background-size: 20px 20px;
    background-position: -10px calc(100% + 16px);
    animation: waveFlow 1s infinite 500ms linear;
  }
  .box::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 10px 27px, transparent 8px, currentColor 8px, currentColor 9px, transparent 9px) repeat-x;
    background-size: 20px 20px;
    background-position: 0 calc(100% - 4px);
    animation: waveFlow 1s infinite linear;
  }
  @keyframes waveFlow {
    from { background-position-x: -10px, 0; }
    to { background-position-x: -30px, -20px; }
  }
</style>