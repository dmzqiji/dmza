<template>
  <div class="container">
    <p>文字的渐出现</p>
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
  p {
    display: inline-block;
    margin: auto;
    width: 150px;
    height: 35px;
    font-size: 25px;
    font-weight: 900;
    mask: radial-gradient(
      circle at 0 50%,
      #000,
      transparent 10%,
      transparent 0
    );
    mask-size: 100%;
    animation: scale 5s infinite;
  }
  @keyframes scale {
    50%,
    100% {
        mask-size: 2000%;
    }
  }
</style>