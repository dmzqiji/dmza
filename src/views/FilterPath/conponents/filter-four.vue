<template>
  <div class="container">
    <div class="box">
      <div class="b-first"></div>
      <div class="ball"></div>
      <div class="ball"></div>
      <div class="ball"></div>
      <div class="ball"></div>
      <div class="ball"></div>
      <div class="ball"></div>
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
  filter: blur(1px) contrast(4);
  overflow: hidden;
}

.box {
  margin: auto;
  position: relative;
  width: 50px;
  height: 50px;
}

.b-first, .ball {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
  border-radius: 50%;
  transform: translate(-700%);
  opacity: 0;
}

.ball:nth-child(0) {
  animation: move 3.5s infinite 0.1s linear;
}

.ball:nth-child(1) {
  animation: move 3.5s infinite 0.3s linear;
}

.ball:nth-child(2) {
  animation: move 3.5s infinite 0.5s linear;
}

.ball:nth-child(3) {
  animation: move 3.5s infinite 0.7s linear;
}

.ball:nth-child(4) {
  animation: move 3.5s infinite 0.9s linear;
}

.ball:nth-child(5) {
  animation: move 3.5s infinite 1.1s linear;
}

.ball:nth-child(6) {
  animation: move 3.5s infinite 1.3s linear;
}

.b-first {
  animation: scaleMove 3.5s infinite linear;
}

@keyframes move {
  25% {
    opacity: 1;
    transform: translate(-1vw, 0);
  }

  50% {
    opacity: 1;
    transform: translate(1vw, 0);
  }

  75%,
  100% {
    opacity: 0;
    transform: translate(700%, 0);
  }
}

@keyframes scaleMove {
  25% {
    opacity: 1;
    transform: translate(-1vw, 0);
  }

  35% {
    opacity: 1;
    transform: scale(1);
  }

  70% {
    opacity: 1;
    transform: translate(1vw, 0) scale(2);
  }

  90%,
  100% {
    opacity: 0;
    transform: translate(1vw, 0) scale(1);
  }
}
</style>