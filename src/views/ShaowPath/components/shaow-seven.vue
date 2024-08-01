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
    position: relative;
    background-color: #fff;
  }
  .box {
    top: 20%;
    width: 250px;
    height: 225px;
    position: relative;
    overflow: hidden;
  }
  .box::before {
    content: '';
    position: absolute;
    width: 50px;
    height: 45px;
    top: -45px;
    left: -50px;
    box-shadow: 
          50px 45px, 150px 45px, 250px 45px,
          50px 90px, 150px 90px, 250px 90px,
          50px 135px, 150px 135px, 250px 135px,
          50px 180px, 150px 180px, 250px 180px,
          50px 225px, 150px 225px, 250px 225px;
    animation: box-move 3s infinite linear;
  }

  @keyframes box-move {
    25% {
      transform: translate(50px);
      color: coral;
      box-shadow: 
          50px 45px, 150px 45px, 250px 45px,
          50px 90px, 150px 90px, 250px 90px,
          50px 135px, 150px 135px, 250px 135px,
          50px 180px, 150px 180px, 250px 180px,
          50px 225px, 150px 225px, 250px 225px;
    }
    50% {
      transform: translate(0px);
      color: blueviolet;
      box-shadow: 
          50px 45px, 150px 45px, 250px 45px,
          100px 90px, 200px 90px, 300px 90px,
          50px 135px, 150px 135px, 250px 135px,
          100px 180px, 200px 180px, 300px 180px,
          50px 225px, 150px 225px, 250px 225px;
    }
    75% {
      transform: translate(0px);
      color: #17c529;
      border-radius: 50%;
      box-shadow: 
        50px 45px, 150px 45px, 250px 45px,
        100px 90px, 200px 90px, 300px 90px,
        50px 135px, 150px 135px, 250px 135px,
        100px 180px, 200px 180px, 300px 180px,
        50px 225px, 150px 225px, 250px 225px;
    }
    100% {
      border-radius: 0%;
      box-shadow: 
          50px 45px, 150px 45px, 250px 45px,
          50px 90px, 150px 90px, 250px 90px,
          50px 135px, 150px 135px, 250px 135px,
          50px 180px, 150px 180px, 250px 180px,
          50px 225px, 150px 225px, 250px 225px;
    }
  }
</style>