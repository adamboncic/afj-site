<template>
  <div class="photography">
    <div class="row">
      <!-- <img class="img-fluid" v-for="(image, index) in images" :key="index" :src="getSrc(image)"> -->
      <PhotoGallery galleryID="photoGallery" :images="images" />
    </div>
  </div>
</template>

<script>

  // import $ from "jquery";
  import PhotoGallery from '@/components/PhotoGallery.vue';

  export default {
    name: 'PhotographyView',
    components: {
      PhotoGallery
    },

    data() {
      return {
        images: [],
        items: [
          {
            url: require('@/assets/images/photography/afj_1.jpg')
          },
          {
            url: require('@/assets/images/photography/afj_2.jpg')
          },
        ],
      };
    },
    methods: {
      getImages: function() {
        const files = require.context(
          '@/assets/images/photography', true, /^.*\.jpg$/
        )

        files.keys().forEach((file) => {
          var fileName = file.substr(2)
          this.images.push({
            url: this.getSrc(fileName)
          })
        })
      },
      getSrc: function (file) {
         return require('@/assets/images/photography/'+file);
      }
    },
    mounted() {

    },
    created: function() {
      this.getImages()
    }
  }
</script>