<template>
  <div class="container">
    <div class="box">
      <img src="https://cbu01.alicdn.com/img/ibank/O1CN01dIWTr11a6HzYqSqvW_!!4230083280-0-cib.jpg" alt="" class="card">
      <span> 图片的黑白滤镜</span>
    </div>
    
  </div>
</template>


<script>

  export default {

  }

</script>

<style scoped>

  .box:hover {
    filter: grayscale();
  }

</style>
<style lang="scss" scoped>

  .container {
    box-sizing: border-box;
    height: 370px;

    .box {
      height: 370px;
      width: 300px;
      background-color: #fff;
      box-sizing: border-box;

      span {
        width: 200px;
        display: block;
        font-size: 14px;
        margin-top: 20px;
        margin-left: 5px;
        overflow-wrap: break-word;
      }

    }

    .card {
      height: 300px;
    }

  }

</style>