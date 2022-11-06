<template>
  <div class="photography">
    <div class="">
      <h5>Coming Soon...</h5>
      <!-- <PhotoGallery id="photo-gallery" :images="images" /> -->
    </div>
  </div>
</template>

<script>

  // import $ from "jquery";
  //import PhotoGallery from '@/components/PhotoGallery.vue';
  import json from '@/static/data.json'

  export default {
    name: 'PhotographyView',
    components: {
      //PhotoGallery
    },

    data() {
      return {
        images: [],
        data: json.photography
      };
    },
    methods: {
      getImages: function() {
        const files = require.context(
          '@/assets/images/photography_2'
        )

        files.keys().forEach((file) => {
          // var orientation = (file.indexOf('ls') > -1) ? 'landscape' : 'portrait'
          var fileName = file.substr(2)

          this.images.push({
            src: this.getSrc(fileName)
            // type: orientation
          })
        })

      },
      getImagesByJson: function() {
        var images = this.data
        var self = this

        images.forEach((i) => i.src = self.getSrc(i.src))
        this.images = images
        this.images = images.sort((a, b) => (a.order > b.order ? -1 : 1))
      },
      getSrc: function (file) {
        return require('@/assets/images/photography_2/'+file);
      }
    },
    mounted() {

    },
    created: function() {
      this.getImages()
    }
  }
</script>

<style>
  
</style>