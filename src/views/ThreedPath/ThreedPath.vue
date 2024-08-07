<template>
    <div class="container">
      <div class="item"><ThreeTwo></ThreeTwo></div>
      <div class="item"><ThreeNumber></ThreeNumber></div>
      <div class="item"><ThreeThrid></ThreeThrid></div>
      <div class="item"><ThreeFour></ThreeFour></div>
      <div class="item"><ThreeFive></ThreeFive></div>
    </div>
</template>


<script>
import ThreeFour from './components/three-four.vue';
import ThreeNumber from './components/three-number.vue';
import ThreeThrid from './components/three-thrid.vue';
import ThreeTwo from './components/three-two.vue';
import ThreeFive from './components/three-five';

  export default {
    components: {
      ThreeNumber,
      ThreeTwo,
      ThreeThrid,
      ThreeFour,
      ThreeFive
    }
  }
  

</script>


<style scoped>
  .item {
    margin: 20px auto;
  }
</style>