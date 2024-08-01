<template>
  <div class="container">
    <p data-text="TEXT LIGHT">TEXT LIGHT</p>
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
    background-image: radial-gradient(ellipse farthest-side at 40% 0%, #455A64 0%, #263238 60%, #1a2327 100%);
    position: relative;
  }
  p {
    position: relative;
    top: 30%;
    font-size: 40px;
    word-spacing: 4px;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    color: transparent;
    background-color: #E8A95B;
    background-clip: text;
  }
  p::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 230px;
    height: 40px;
    background-image: linear-gradient(120deg, transparent 0%, transparent 15%, white 30%, transparent 31%, transparent 50%, rgba(255, 255, 255, 0.3) 55%, transparent 60%, transparent 70%, white 80%, transparent 81%, rgba(255, 255, 255, 0.3)100%);
    background-clip: text;
    animation: shine 5s infinite linear;
  }
  @keyframes shine {
    0% {
      background-position-x: -50px;
    }
    100% {
      background-position-x: 190px;
    }
  }
</style>