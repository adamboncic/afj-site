<template>
  <div class="directing-template helium">
    <!-- Content -->
    <div class="row">
      <div class="col-sm-12">
        <!-- Header -->
        <h5 class="film-header">Helium (2021)</h5>

        <!-- Banner -->
        <div class="film-banner">
          <img class="img-fluid" :src="getSrc('banner.png')" rel="preload">
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
          <img class="still-block img-fluid col-sm-8" :src="getSrc('bathroom.jpg')" rel="preload">
          <div class="col-sm-4">
            <div class="row">
            <img class="still-block img-fluid" :src="getSrc('still_sophie.jpg')" rel="preload">
            <img class="still-block img-fluid" :src="getSrc('still_tyerion.jpg')" rel="preload">
          </div>
          </div>
      </div>
      <div class="row">
        <img class="still-block img-fluid col-sm-3" :src="getSrc('bts_gigi.jpg')" rel="preload">
        <img class="still-block img-fluid col-sm-6" :src="getSrc('bts_s_t.jpg')" rel="preload">
        <img class="still-block img-fluid col-sm-3" :src="getSrc('bts_tyerion.jpg')" rel="preload">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HeliumView',
  methods: {
    getSrc: function (file) {
      return require(`@/assets/images/directing/helium/${file}`);
    }
  }
};
</script>