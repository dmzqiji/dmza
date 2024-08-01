<template>
  <div class="container">
    <p class="box">书籍是人类进步的阶梯</p>
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
    line-height: 370px;
    text-align: center;
    overflow: hidden;
  }
  .box {
    font-size: 20px;
    color: #04d9ab;
    animation: expand 3s ease-in-out 3s infinite;
  }
  @keyframes expand {
    from {
      letter-spacing: -100px;
    }
    to {
      letter-spacing: 0px;
    }
  }

</style>