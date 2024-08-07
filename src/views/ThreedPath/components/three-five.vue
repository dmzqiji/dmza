<template>
  <div class="scene">
    <div
      class="rain"
      v-for="(item, index) in raindrops"
      :key="index"
      :style="item.style"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      COUNT: 60,
      raindrops: []
    };
  },
  mounted() {
    this.createRaindrops();
  },
  methods: {
    createRaindrops() {
      const rect = this.$el.getBoundingClientRect();
  
      for (let i = 0; i < this.COUNT; i++) {
        const size = `${Math.random() * 20 + 20}px`;
        const left = `${Math.random() * rect.width}px`;
        const top = `${rect.top - size}px`;
  
        this.raindrops.push({
          style: {
            height: size,
            width: '1px',
            left: left,
            top: top,
            animationName: 'drop',
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
            animationDelay: `${Math.random() * 1.5}s`,
            animationDuration: `${0.5 + Math.random()}s`
          }
        });
      }
    }
  }
};
</script>

<style>
.scene {
  position: relative;
  width: 100%;
  height: 800px;
  background: linear-gradient(to bottom, #1d1d26, #000);
  overflow: hidden;
}
.rain {
  position: absolute;
  background-color: #647c8b;
  opacity: 1;
}
@keyframes drop {
  to {
    transform: translateY(800px);
    opacity: 0;
  }
}
</style>