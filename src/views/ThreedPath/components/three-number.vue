<template>
  <div class="box">
    <div class="container">
      <div v-for="(row, rowindex) in 36" :key="rowindex" class="line">
        <div v-for="(n, colIndex) in 12" :key="`${rowIndex}-${colIndex}`" class="number">
          
        </div>
      </div>
  </div>
  </div>
</template>


<script>

  export default {
    data() {
      return {

      }
    },
    methods() {

    }
  }
  

</script>


<style lang="scss" scoped>

    .box {
     background-color: #000;
    }

    $lineNumber: 36;
    $column: 12;
    $aniTime: 10s;
    

    @function randomNum($max, $min: 0) {
        @return ($min + random($max));
    }

    .container {
        width: 800px;
        height: 600px;
        position: relative;
        margin: 10px auto;
        background: transparent;
        transform-style: preserve-3d;
        perspective: 10000px;
        display: flex;
        justify-content: space-between;
        // mix-blend-mode: luminosity;
        transform: rotateX(0);
        animation: conRotate $aniTime linear infinite;
    }

    .line {
        width: 20px;
        height: 80vh;
        flex: 0 1 auto;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: space-between;
        transform-style: preserve-3d;
        perspective: 10000px;
        
        .number {
            position: relative;
            font-size: 16px;
            height: 50px;
            border-radius: 50%;
            transform-style: preserve-3d;
            perspective: 5000px;
            line-height: 50px;
            
            &::before {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                text-align: center;   
                color: #6279d5;
                text-shadow: 0 0 20px #57ff5e;
            }
        }
    }

    @for $i from 0 to $lineNumber {
        .line:nth-child(#{$i + 1}) {
            transform: rotateX(#{$i * 10}deg);
            
            
            @for $j from 0 to 12 {
                .number:nth-child(#{$j + 1}) {
                    animation: reRotate $aniTime linear infinite;
                    
                    &::before {
                        transform: 
                        rotateX(#{$i * -10}deg)
                        ;
                        content: '#{randomNum(90)}';
                    }
                }
            }
        }
    }


    @keyframes conRotate {
        to {
            transform: rotateX(360deg);
        }
    }

    @keyframes reRotate {
        to {
            transform: 
                rotateX(-360deg)
                ;
        }
    }

</style>