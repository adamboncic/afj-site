<template>
  <div class="directing-template bjgg">
    <!-- Content -->
    <div class="row">
      <div class="col-sm-12">
        <!-- Header -->
        <h5 class="film-header">Bad Jew Good Girl (2022)</h5>

        <!-- Banner -->
        <div class="film-banner">
          <img class="img-fluid" :src="getSrc('bed.jpg')" rel="preload">
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
      <div class="row">
        <img class="still-block img-fluid col-sm-6" :src="getSrc('mirror.jpg')" rel="preload">
        <img class="still-block img-fluid col-sm-6" :src="getSrc('stare.jpg')" rel="preload">
        <img class="still-block img-fluid col-sm-6" :src="getSrc('candle.jpg')" rel="preload">
        <img class="still-block img-fluid col-sm-6" :src="getSrc('room.jpg')" rel="preload">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'BJGGView',
  methods: {
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