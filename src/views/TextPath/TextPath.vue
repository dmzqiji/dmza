<template>
  <div class="container">
    <div class="item"><TextOne></TextOne></div>
    <div class="item"><TextTwo></TextTwo></div>
    <div class="item"><TextThree></TextThree></div>
    <div class="item"><TextFour></TextFour></div>
    <div class="item"><TextFive></TextFive></div>
    <div class="item"><TextSix></TextSix></div>
    <div class="item"><TextSeven></TextSeven></div>
    <div class="item"><TextEight></TextEight></div>
    <div class="item"><TextNine></TextNine></div>
    <div class="item"><TextTen></TextTen></div>
    <div class="item"><TextEleven></TextEleven></div>
    <div class="item"><TextTwelve></TextTwelve></div>
  </div>
</template>


<script>
import TextOne from './components/text-one.vue';
import TextTwo from './components/text-two.vue';
import TextThree from './components/text-three.vue';
import TextFour from './components/text-four.vue';
import TextFive from './components/text-five.vue';
import TextSix from './components/text-six.vue';
import TextSeven from './components/text-seven.vue';
import TextEight from './components/text-eight.vue';
import TextNine from './components/text-nine.vue';
import TextTen from './components/text-ten.vue';
import TextEleven from './components/text-eleven.vue';
import TextTwelve from './components/text-twelve.vue';


  export default {
    components: {
      TextOne,
      TextTwo,
      TextThree,
      TextFour,
      TextFive,
      TextSix,
      TextSeven,
      TextEight,
      TextNine,
      TextTen,
      TextEleven,
      TextTwelve
    }
  }

</script>


<style lang="scss" scoped>

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