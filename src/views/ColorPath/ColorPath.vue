<template>
  <div class="container">
    <div class="item"><ColorFirst></ColorFirst></div>
    <div class="item"><ColorSecond></ColorSecond></div>
    <div class="item"><ColorThird></ColorThird></div>
    <div class="item"><ColorFourth></ColorFourth></div>
    <div class="item"><ColorFifth></ColorFifth></div>
    <div class="item"><ColorSix></ColorSix></div>
    <div class="item"><ColorSeven></ColorSeven></div>
    <div class="item"><ColorEight></ColorEight></div>
    <div class="item"><ColorNine></ColorNine></div>
    <div class="item"><ColorTen></ColorTen></div>
    <div class="item"><ColorEleven></ColorEleven></div>
    <div class="item"></div>
  </div>
</template>


<script>
  import ColorFirst from './colorcomponent/color-first.vue'
  import ColorSecond from './colorcomponent/color-second.vue'
  import ColorThird from './colorcomponent/color-third.vue'
  import ColorFourth from './colorcomponent/color-fourth.vue'
  import ColorFifth from './colorcomponent/color-fifth.vue'
  import ColorSix from './colorcomponent/color-six.vue'
  import ColorSeven from './colorcomponent/color-seven.vue'
  import ColorEight from './colorcomponent/color-eight.vue'
  import ColorNine from './colorcomponent/color-nine.vue'
  import ColorTen from './colorcomponent/color-ten.vue'
  import ColorEleven from './colorcomponent/color-eleven.vue'

  export default {
    components: {
      ColorFirst,
      ColorSecond,
      ColorThird,
      ColorFourth,
      ColorFifth,
      ColorSix,
      ColorSeven,
      ColorEight,
      ColorNine,
      ColorTen,
      ColorEleven
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