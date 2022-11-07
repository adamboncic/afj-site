<!-- —————————————↓HTML———————————————————————— -->
<template lang="pug"></template>

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
        this.show = false
        this.$emit('imgAllLoaded')
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