<template>
  <div class="container">
    <div class="box">
      <div class="inner"></div>
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
    background-color: #333;
    display: flex;
  }
  .box {
    width: 200px;
    height: 200px;
    margin: auto;
    position: relative;
    border-radius: 50%;
    border: 6px solid #444;
  }
  .inner {
    position: absolute;
    top: -6px;
    left: -6px;
    bottom: -6px;
    right: -6px;
    border-radius: 50%;
    background: conic-gradient(#fc0 0%, transparent 40%, transparent);
    animation: rotate 3s ease-in-out infinite;
  }
  .inner::before {
    content: "";
    position: absolute;
    top: 6px;
    left: 6px;
    bottom: 6px;
    right: 6px;
    background: #333;
    border-radius: 50%;
  }
  .inner::after {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    top: 0;
    left: 50%;
    transform: translate(-50%, -3px);
    border-radius: 50%;
    background: #fc0;
    box-shadow: 0 0 4px 2px #fc0;
  }
  @keyframes rotate {
    100% {
        transform: rotate(-360deg);
    }
  }
</style>