<template>
  <div class="container">
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
    background: url(../../../assets/gif/74763e7f6aa29078413c36f0e991309f8262.gif) #0ff;
    background-size: cover;
    background-blend-mode: lighten;
    overflow: hidden;
    position: relative;
  }
  .container::before {
    content: '';
    position: absolute;
    width: 105%;
    height: 105%;
    inset: 0;
    background: url(../../../assets/gif/74763e7f6aa29078413c36f0e991309f8262.gif) #f40;
    background-size: cover;
    background-blend-mode: lighten;
    mix-blend-mode: darken;
    /* animation: shaken 30ms infinite; */
  }
  @keyframes shaken {
    to {
      transform: translateX(10px);
    }
  }

</style>