<template>
  <div class="container">
    <div class="box">
      <div class="center">center</div>
      <div class="left">left</div>
      <div class="top">top</div>
      <div class="right">right</div>
      <div class="bottom">bottom</div>
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
    background-color: #fff;
    display: flex;
  }
  .box {
      width: 200px;
      height: 200px;
      background-color: red;
      margin: auto;
      position: relative;
      overflow: hidden;
      }
      .center, .left, .right, .top, .bottom {
      width: inherit;
      height: inherit;
      position: absolute;
      text-align: center;
      line-height: 200px;
      border: 1px solid #000;
      transition: transform 0.4s ease;
      }
       .left::before, .right::before, .top::before, .bottom::before {
        position: absolute;
        content: "";
        width: 70.71%;
        height: 70.71%;
        transform: rotate(45deg);
      }
      .center:hover, .left:hover, .right:hover, .top:hover, .bottom:hover {
        transform: translateX(0);
        z-index: 1;
      }
      .center {
        background-color: #bf2020;
      }
      .left {
        background: green;
        transform: translateX(-100%);
      }
      .left::before {
        left: 100%;
        transform-origin: 0 0;
      }
      .left:hover ~ .center {
        transform: translateX(100%);
      }

      .right {
        background: rgb(216, 121, 11);
        transform: translateX(100%);
      }
      .right::before {
        right: 100%;
        bottom: 0;
        transform-origin: 100% 100%;
      }
      .right:hover ~ .center {
        transform: translateX(-100%);
      }

      .top {
        background: #bce70f;
        transform: translateY(-100%);
      }
      .top::before {
        top: 100%;
        right: 0;
        transform-origin: 100% 0;
      }
      .top:hover ~ .center {
        transform: translateY(100%);
      }

      .bottom {
        background: #280fe7;
        transform: translateY(100%);
      }
      .bottom::before {
        position: absolute;
        top: -100%;
        left: 70.71%;
        transform-origin: -100% 0;
      }
      .bottom:hover ~ .center {
        transform: translateY(-100%);
      }

</style>