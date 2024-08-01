<template>
  <div class="container">
    <div class="item"><FilterOne></FilterOne></div>
    <div class="item"><FilterTwo></FilterTwo></div>
    <div class="item"><FilterThree></FilterThree></div>
    <div class="item"><FilterFour></FilterFour></div>
    <div class="item"><FilterFive></FilterFive></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
  </div>
</template>


<script>
import FilterOne from './conponents/filter-one.vue';
import FilterThree from './conponents/filter-three.vue';
import FilterTwo from './conponents/filter-two.vue';
import FilterFour from './conponents/filter-four.vue';
import FilterFive from './conponents/filter-five.vue';


  export default {
    components: {
      FilterOne,
      FilterTwo,
      FilterThree,
      FilterFour,
      FilterFive
    }
  }

</script>


<style scoped>
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  .item {
    width: 300px;
    height: 370px;
    margin: 5px;
  }
</style>