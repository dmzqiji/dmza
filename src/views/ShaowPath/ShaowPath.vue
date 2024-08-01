<template>
  <div class="container">
    <div class="item"><ShaowOne></ShaowOne></div>
    <div class="item"><ShaowTwo></ShaowTwo></div>
    <div class="item"><ShaowThree></ShaowThree></div>
    <div class="item"><ShaowFour></ShaowFour></div>
    <div class="item"><ShaowFive></ShaowFive></div>
    <div class="item"><ShaowSix></ShaowSix></div>
    <div class="item"><ShaowSeven></ShaowSeven></div>
    <div class="item"><ShaowEight></ShaowEight></div>
  </div>
</template>


<script>
import ShaowOne from './components/shaow-one.vue';
import ShaowTwo from './components/shaow-two.vue';
import ShaowThree from './components/shaow-three.vue';
import ShaowFour from './components/shaow-four.vue';
import ShaowFive from './components/shaow-five.vue';
import ShaowSix from './components/shaow-six.vue';
import ShaowSeven from './components/shaow-seven.vue';
import ShaowEight from './components/shaow-eight.vue';

  export default {
    components: {
      ShaowOne,
      ShaowTwo,
      ShaowThree,
      ShaowFour,
      ShaowFive,
      ShaowSix,
      ShaowSeven,
      ShaowEight
    },  
  }

</script>


<style scoped>

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    .item {
      width: 300px;
      height: 370px;
      margin: 5px;
    }
  }

</style>