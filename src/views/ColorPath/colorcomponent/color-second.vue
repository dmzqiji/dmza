<template>
  <div class="container">
    
  </div>
</template>


<script>

  export default {

  }

</script>


<style lang="scss" scoped>

  .container {
    width: 300px;
    height: 370px;
    background: linear-gradient(30deg, #ffcc00, deeppink, #9c27b0);
    animation: colortransform 20s infinite alternate;
  }

  @keyframes colortransform {
    100% {
      filter: hue-rotate(360deg);
    }
  }

</style>