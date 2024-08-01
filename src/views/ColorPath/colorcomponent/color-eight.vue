<template>
  <div class="container">
    <div class="box"></div>
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
    width: 180px;
    height: 40px;
    border-radius: 20px;
    background: #e4cf0d;
    margin: auto;
    overflow: hidden;
  }
  .box::before {
    content: "";
    position: absolute;
    width: 200px;
    height: 200px;
    top: 25px;
    background: repeating-linear-gradient(-135deg, transparent 0%, transparent 50%, #f06a0e 51%,#f06a0e 55%, transparent 56%, transparent 60%, #f06a0e 61%, #f06a0e 65%, transparent 66%, transparent 70%, #f06a0e 71%, #f06a0e 75%, transparent 76%, transparent 80%, #f06a0e 81%, #f06a0e 85%, transparent 90%, transparent 95%, #f06a0e 96%, #f06a0e 98%, transparent 99%, transparent 100% );
    animation: boxtran 5s linear infinite;
  }
  @keyframes boxtran {
    100% {
      top: -130px;
    }
  }
</style>