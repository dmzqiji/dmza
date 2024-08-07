<template>
  <div class="container">
    <div class="box">
      <div class="inner">red</div>
      <div class="inner">red</div>
      <div class="inner">red</div>
      <div class="inner">red</div>
      <div class="inner">red</div>
      <div class="inner">red</div>
      <div class="inner">red</div>
      <div class="inner">red</div>
      <div class="inner">red</div>
      <div class="inner">red</div>
      <div class="inner">red</div>
      <div class="inner">red</div>
      <div class="inner">red</div>
      <div class="inner">red</div>
      <div class="inner">red</div>
      <div class="inner">red</div>
      <div class="inner">red</div>
      <div class="inner">red</div>
      <div class="inner">red</div>
      <div class="inner">red</div>
      <div class="inner">red</div>
      <div class="inner">red</div>
      <div class="inner">red</div>
    </div>
  </div>
</template>


<script>

  export default {

  }

</script>


<style lang="scss" scoped>
  .container {
    height: 800px;
    background: #000;
    transform-style: preserve-3d;
    position: relative;
    overflow: hidden;
  }
  .box {
    width: 100%;
    height: 100%;
    position: absolute;
    transform-style: preserve-3d;
    transform: translateZ(-1000px)  rotateY(0deg);
  }
  .inner {
    position: absolute;
    display: inline-block;
    // top: 60%;
    font-size: 30px;
    color: red;
    transform-origin: center -500px;
    animation: rope ease-in-out infinite alternate 4s;

    &::before {
      content: '';
      position: absolute;
      bottom: 100%;
      width: 1px;
      box-shadow: 0 0 0 .01em #A9C52F;
      height: 25em;
      left: 50%;
      background-color: #A9C52F;
    }

    @for $i from 0 to 24 {
        &:nth-of-type(#{$i}) {
            left: 2.5em * $i;
            animation-delay: -#{$i/10}s;
            }
        }
  }
  
  @keyframes rope {
    from {
        transform: translateY(600px) rotateX(-45deg) rotateZ(-45deg);
    }
    to {
        transform: translateY(600px) rotateX(45deg) rotateZ(45deg);
    }
  }
</style>