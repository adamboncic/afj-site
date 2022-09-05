<template>
<div class="directing-template bolognese">    
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
  <div class="stills-gallery col-sm-12">
      <div class="row">
        <img class="still-block img-fluid col-sm-6" :src="getSrc('still_1.jpeg')">
        <img class="still-block img-fluid col-sm-6" :src="getSrc('still_2.jpeg')">
        <img class="still-block img-fluid col-sm-12" :src="getSrc('festival.jpg')">
        <img class="still-block img-fluid col-sm-6" :src="getSrc('still_3.jpeg')">
        <img class="still-block img-fluid col-sm-6" :src="getSrc('still_4.jpeg')">
      </div>
  </div>
</div>
</template>

<script>
import json from '../static/data.json';

export default {
  name: 'BologneseView',
  data() {
    return {
      data: [],
      film: 'bolognese'
    }
  },
  mounted() {
    this.data = json.directing.find((e) => e.id === this.film)
  },
  methods: {
    getSrc: function (file) {
      return require(`@/assets/images/directing/${this.film}/${file}`);
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

