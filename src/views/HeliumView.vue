<template>
  <div class="directing-template helium">
    <!-- <preload-image :imgUrlArr="imgUrls" @imgAllLoaded="loadedState"></preload-image> -->

    <div v-if="true">
      <!-- Back to Page -->
      <div class="back-to-page">
        <router-link class="back-button" to="/directing">
          <i class="fa fa-arrow-left mr-1"></i>Back
        </router-link>
      </div>
      <!-- Content -->
      <div class="row">
        <div class="col-sm-12">
          <!-- Header -->
          <h5 class="film-header">Helium (2021)</h5>

        <!-- Trailer -->
        <div class="film-trailer">
          <video controls muted autoplay loop playsinline>
            <source :src="getSrc('Helium_trailer.mp4')" type="video/mp4">
            Your browser does not support HTML5 video.
          </video>
        </div>

          <!-- Details -->
          <div class="film-details">
            <p>An absurdist examination of female friendship, Helium explores various dynamics of intimacy over the course of a double date à la maison. Though each is equipped with a romantic partner for the night, Claire and Reagan find themselves drawn more strongly to the comfort of their own friendship than to their dates, leading to a rather dissociative evening.</p>
          </div>
        </div>
      </div>

      <!-- Gallery -->
      <div class="stills-gallery m-0">
        <div class="row mb-4">
            <img class="still-block img-fluid col-sm-8" :src="getSrc('bathroom.jpg')">
            <div class="col-sm-4">
              <div class="row">
              <img class="still-block img-fluid" :src="getSrc('still_sophie.jpg')">
              <img class="still-block img-fluid" :src="getSrc('still_tyerion.jpg')">
            </div>
            </div>
        </div>
        <div class="row">
          <img class="still-block img-fluid col-sm-3" :src="getSrc('bts_gigi.jpg')">
          <img class="still-block img-fluid col-sm-6" :src="getSrc('bts_s_t.jpg')">
          <img class="still-block img-fluid col-sm-3" :src="getSrc('bts_tyerion.jpg')">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

//import PreloadImage from '@/components/PreloadImageComponent.vue';

export default {
  name: 'HeliumView',
  components: {
    //PreloadImage
  },
  data() {
    return {
      imgUrls: [],
      imgArr: ['bathroom.jpg','still_sophie.jpg','still_tyerion.jpg','bts_gigi.jpg','bts_s_t.jpg','bts_tyerion.jpg'],
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
      return require(`@/assets/images/directing/helium/${file}`);
    }
  }
};
</script>

<style scoped>
  video {
    width: 100%;
    height: auto;
  }
</style>