<template>
  <div class="container">
    <div class="box">
      <button class="btn1 item"  @click="stopclick">stop</button>
      <button class="btn2 item"  @click="playClick">play</button>
    </div>
    <div class="ball" :class="{active: counter === 1}"></div>
  </div>
</template>


<script>

  export default {
    data() {
      return {
        counter: 1
      }
    },
    methods: {
      stopclick() {
        this.counter = 0;
      },
      playClick() {
        this.counter = 1;
      }
    } 
  }

</script>


<style scoped>
  a {
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;
  }
  .container {
    width: 300px;
    height: 370px;
    background-color: #fff;
    position: relative;
  }
  .item {
    position: absolute;
    width: 50px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border: 1px solid #000;
    border-radius: 5px;
    margin: 5px auto;
    cursor: pointer;
  }
  .btn1 {
    top: 20%;
    left: 30%;
  }
  .btn2 {
    top: 20%;
    left: 60%;
  }
  .ball {
    position: absolute;
    top: 50%;
    width: 80px;
    height: 80px;
    background: pink;
    border-radius: 50%;
  }
  .active {
    animation: stopboxmove 2s linear infinite alternate;
  }
  @keyframes stopboxmove {
    0% {
      transform: translate(-100%, 0);
    }
    100% {
      transform: translate(100%, 0);
    }
  }
</style>