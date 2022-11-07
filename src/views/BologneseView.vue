<template>
<div class="directing-template bolognese">
  <preload-image :imgUrlArr="imgUrls" @imgAllLoaded="loadedState"></preload-image>

  <div v-if="preLoaded">
     <!-- Content -->
    <div class="row">
      <div class="left-col col-sm-7">
        <!-- Header -->
        <h5 class="film-header">Bolognese (2021)</h5>

        <!-- Trailer -->
        <div class="film-trailer">
          <video controls muted autoplay loop playsinline>
            <source :src="getSrc('bolognese_trailer.mp4')" type="video/mp4">
            Your browser does not support HTML5 video.
          </video>
        </div>

        <!-- Details -->
        <div class="film-details">
          <p>An unforeseen confession derails expectations when Mira meets face to face with the man she's been virtually dating for weeks.</p>
            <p class="festivals">
              <strong>Palm Springs Shortfest (2022)</strong> - Nominee Best US Short<br>
              <strong>NFFTY (2022)</strong> - Audience Award / Nominee Best Narrative<br>
              <strong>Cinema Femme Short Film Festival (2022)</strong> - Official Selection
            </p>
        </div>
      </div>

      <div class="right-col col-sm-5">
        <!-- Poster -->
        <img class="img-fluid film-poster" :src="getSrc('bolognese_poster.jpeg')">
      </div>
    </div>

    <!-- Gallery -->
    <div class="stills-gallery">
        <div>
          <img class="still-block img-fluid col-sm-6" :src="getSrc('still_1.jpeg')">
          <img class="still-block img-fluid col-sm-6" :src="getSrc('still_2.jpeg')">
          <img class="still-block img-fluid col-sm-12" :src="getSrc('festival.jpg')">
          <img class="still-block img-fluid col-sm-6" :src="getSrc('still_3.jpeg')">
          <img class="still-block img-fluid col-sm-6" :src="getSrc('still_4.jpeg')">
        </div>
    </div>
  </div>
</div>
</template>

<script>

import PreloadImage from '@/components/PreloadImageComponent.vue';

export default {
  name: 'BologneseView',
  components: {
    PreloadImage
  },
  data() {
    return {
      imgUrls: [],
      imgArr: ['still_1.jpeg','still_2.jpeg','still_3.jpeg','still_4.jpeg','festival.jpg'],
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
    getSrc(file) {
      return require(`@/assets/images/directing/bolognese/${file}`);
    },
    fetchImageUrls() {
      this.imgArr.forEach((img) => {
        this.imgUrls.push(this.getSrc(img))
      })
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

