<!-- —————————————↓CSS———————————————————————— -->
<style>
  .spinner {
    margin: 20px auto;
    height: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative
  }

  .spinner .circle {
      animation: spinners linear infinite;
      position: absolute;
      border: 5px solid transparent;
      border-top-color: #F00;
      border-radius: 50%
  }

  .spinner .one {
      width: 50px;
      height: 50px;
      border-top-color: #8f3b76;
      animation-duration: .85s
  }

  .spinner .two {
      width: 70px;
      height: 70px;
      border-top-color: #c7417b;
      animation-duration: .95s
  }

  .spinner .three {
      width: 100px;
      height: 100px;
      border-top-color: #f5487f;
      animation-duration: 1.05s
  }


@keyframes spinners {
    0% {
        transform: rotate(0deg)
    }
    100% {
        transform: rotate(360deg)
    }
}

</style>

<!-- —————————————↓HTML———————————————————————— -->
<template>
  <div class="vue-preload-image" v-if="show">
    <div class="spinner">
          <div class="circle one"></div>
          <div class="circle two"></div>
          <div class="circle three"></div>
      </div>
  </div>
</template>

<!-- ——————————————↓JS-———————————————————————— -->
<script>
//import XXX from './components/XXX'

export default {
  name: 'vue-preload-image',
  props: {
    imgUrlArr: {
      type: Array,
      required: true,
    },
    animationShow: {
      type: Boolean,
      default: true,
    },
    tipStrShow: {
      type: Boolean,
      default: true,
    },
    progressShow: {
      type: Boolean,
      default: true
    },
    progressType: {
      type: String,
      default: 'percent'
    },
    order: {
      type: Boolean,
      default: true
    },
    tipStr: {
      type: String,
      default: '...'
    }
  },
  data() {
    return {
      msg: 'this is from vue-preload-image.vue',
      show:true,
      progressStr: '',
      imgsSum: NaN,
      loadedCount: 0,
    }
  },
  methods: {
    init() {
      this.imgsSum = this.imgUrlArr.length
      this.progressStr = this.progressType === 'percent' ? '0%' : '0/' + this.imgsSum
    },
    unorderedPreload() {
      this.imgUrlArr.forEach((imgUrl) => {
        var oImg = new Image()
        oImg.addEventListener('load', this.imgLoaded)
        oImg.addEventListener('error', this.imgLoaded)
        oImg.src = imgUrl
      })
    },
    orderPreload() {
      var oImg = new Image()
      oImg.addEventListener('load', this.imgLoaded)
      oImg.addEventListener('error', this.imgLoaded)
      oImg.src = this.imgUrlArr[this.loadedCount]
    },
    imgLoaded() {
      this.loadedCount++
      this.progressStr = this.progressType === 'percent' ? parseInt(this.loadedCount * 100 / this.imgsSum) + '%' : this.loadedCount + '/' + this.imgsSum


      if (this.loadedCount >= this.imgsSum) {
        var self = this
        // self.show = false;
        //   self.$emit('imgAllLoaded')
        setTimeout(function() {
          self.show = false;
          self.$emit('imgAllLoaded')
        }, 1000);
      } else if (this.order) {
        this.orderPreload()
      }
    }
  },
  created() {
    this.init()
    this.order ? this.orderPreload() : this.unorderedPreload()
  }
}
</script>