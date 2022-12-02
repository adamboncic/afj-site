<template>
  <div class="about">
    <div class="row">
      <div class="about-desc col-sm-4 order-2 shift-in" v-cloak>
          <h3 class="page-title">About Me</h3>
          <p>
            Annika Chavez is a director, writer, and actor. She is a graduate of the University of Southern California where she studied theatre and film and is currently based between Los Angeles and New York. She has 9 years of directing experience with theatre as her base. Her 2021 film BOLOGNESE recently played at both Palm Springs International Shortfest, where it was nominated for best US Short, and at NFFTY, where it won an Audience Award. It continues to make festival rounds this year. She is currently in post-production for two short films, HELIUM and BAD JEW GOOD GIRL, that she directed this year. As a writer, she was a semifinalist for the 2021 NBC Nosotros Monologue Slam.
          </p>
        </div>
        <div class="about-img col-sm-6 order-1 order-md-12 shift-in">
            <img class="img-fluid" :src="require('@/assets/images/about/about.jpg')" alt="About Image">
        </div>
    </div>
  </div>
</template>
<script>

  export default {
    name: 'AboutView',
    created () {
      const img = new Image();
      img.src = require('@/assets/images/about/about.jpg');
    },
  }
</script>
