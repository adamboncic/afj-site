<template>
  <div class="directing-template bjgg">

    <preload-image :imgUrlArr="imgUrls" @imgAllLoaded="loadedState"></preload-image>

    <div v-if="preLoaded">
      <!-- Content -->
      <div class="row">
        <div class="col-sm-12">
          <!-- Header -->
          <h5 class="film-header">Bad Jew Good Girl (2022)</h5>

          <!-- Banner -->
          <div class="film-banner">
            <img class="img-fluid" :src="getSrc('bed.jpg')">
          </div>

          <!-- Details -->
          <div class="film-details">
            <p>Laurel, a non practicing Jew, is alone in her apartment on Yom Kippur.
              <br><br><em>Written, produced, and acted by Lucy Grebin.</em>
            </p>
          </div>
        </div>
      </div>

      <!-- Gallery -->
      <div class="stills-gallery mt-0">
        <div>
          <img class="still-block img-fluid col-sm-6" :src="getSrc('mirror.jpg')">
          <img class="still-block img-fluid col-sm-6" :src="getSrc('stare.jpg')">
          <img class="still-block img-fluid col-sm-6" :src="getSrc('candle.jpg')">
          <img class="still-block img-fluid col-sm-6" :src="getSrc('room.jpg')">
        </div>
      </div>
    </div>

  </div>
</template>

<script>

import PreloadImage from '@/components/PreloadImageComponent.vue';

export default {
  name: 'BadJewGoodGirlView',
  components: {
    PreloadImage
  },
  data() {
    return {
      imgUrls: [],
      imgArr: ['mirror.jpg','stare.jpg','candle.jpg','room.jpg'],
      preLoaded: false
    }
  },
  created: function() {
    this.fetchImageUrls()
  },
  methods: {
    loadedState() {
      this.preLoaded = true
    },
    fetchImageUrls() {
      this.imgArr.forEach((img) => {
        this.imgUrls.push(this.getSrc(img))
      })
    },
    getSrc: function (file) {
      return require(`@/assets/images/directing/bjgg/${file}`);
    }
  }
};
</script>
<style scoped>
  .fit {
    width: 100%;
    object-fit: cover;
  }
</style>