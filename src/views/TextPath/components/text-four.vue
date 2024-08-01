<template>
  <div class="container">
    <button class="t-btn">相思</button>
    <div class="box">
      红豆生南国<br>
      春来发几支<br>
      愿君多采撷<br>
      此物最相思<br>
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
    box-sizing: border-box;
    background-color: #d2a2a2;
    position: relative;
  }
  .t-btn {
    width: 80px;
    height: 30px;
    font-size: 20px;
    margin-top: 20px;
    background-color: #cd7a59;
  }
  .box {
    font-size: 40px;
    position: absolute;
    top: 20%;
    left: 16%;
    overflow: hidden;
    display: grid;
    grid-template-rows: 0;
    transition: 2s;
  }
  .t-btn:hover + .box {
    grid-template-rows: 220px;
  }


</style>