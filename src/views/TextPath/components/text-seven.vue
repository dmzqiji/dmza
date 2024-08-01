<template>
  <div class="container">
    <div class="box">加载中</div>
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
  }
  .box {
    position: absolute;
    top: 35%;
    left: 23%;
    font-size: 50px;
    font-weight: 900;
  }
  .box::after {
    content: '';
    animation: pointing 3s infinite steps(3, start);
  }
  @keyframes pointing {
      33% {
        content: ".";
      }
      66% {
        content: "..";
      }
      100% {
        content: "...";
      }
    }

</style>