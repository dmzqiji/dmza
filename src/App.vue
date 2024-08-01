<template>
  <div class="title">CSS特效</div>
  <div class="btn">
    <div class="btn-1 btn-item" @click="textclick1" :class="{active: counter === 1}" >颜色</div>
    <div class="btn-2 btn-item" @click="textclick2" :class="{active: counter === 2}" >文本</div>
    <div class="btn-3 btn-item" @click="textclick3" :class="{active: counter === 3}" >阴影</div>
    <div class="btn-4 btn-item" @click="textclick4" :class="{active: counter === 4}" >滤镜</div>
    <div class="btn-5 btn-item" @click="textclick5" :class="{active: counter === 5}" >3D动画</div>
  </div>
  <div class="container">
    <router-view></router-view>
  </div>
  
  

</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      counter: 1
    }
  },
  methods: {



    textclick1 () {
      this.counter = 1 ;
      this.$router.push({
        path: "/ColorPath"
      });
    },
    textclick2 () {
      this.counter = 2 ;
      this.$router.push({
        path: "/TextPath"
      });
    },
    textclick3() {
      this.counter = 3 ;
      this.$router.push({
        path: "/ShaowPath"
      })
    },
    textclick4() {
      this.counter = 4 ;
      this.$router.push({
        path: "/FilterPath"
      });
    },
    textclick5() {
      this.counter = 5 ;
      this.$router.push({
        path: "/ThreedPath"
      })
    }

  }
}
</script>

<style lang="scss">
  html, body {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #f3f3f3;
  }

  .title {
    height: 60px;
    width: 100%;
    text-align: center;
    font-size: 56px;
    font-weight: 900;
    color: transparent;
    -webkit-text-stroke: 1px #000000;
    letter-spacing: 100px;
    line-height: 60px;
    background: linear-gradient(45deg, red 0%, red 14%, rgb(242, 143, 5) 29%, rgb(227, 235, 7) 43%, green 57%, rgb(10, 235, 216) 71%, blue 86%, rgb(240, 8, 244) 100%);
    animation: vtr 10s infinite alternate;
  }
  
  .btn {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    cursor: pointer;
  }
  .btn-item {
    margin-top: 10px;
    margin-bottom: 10px;
    width: 10%;
    height: 45px;
    text-align: center;
    line-height: 45px;
    border-radius: 20px;
    box-shadow: 3px 3px 10px #babecc, -2px -2px 0px #fff;
    -webkit-user-select: none;

    &:hover {
      box-shadow: inset 2px 2px 5px #babecc;
    }
  }
  .active {
    box-shadow: inset 2px 2px 5px #babecc;
  }

  .container {
    width: 100%;
    background-color: #f3f3f3;
  }

  @keyframes vtr {
    100% {
      filter: hue-rotate(360deg);
    }
  }

</style>
