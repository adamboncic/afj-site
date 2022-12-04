<template>
  <div class="photography">
    <div class="grid-wrapper">


      <div>
        <img src="../assets/images/photography_2/Friend_1.jpg">
      </div>
      <div>
        <img src="../assets/images/photography_2/Friend_2.jpg">
      </div>
      <div>
        <img src="../assets/images/photography_2/Friend_3.jpg">
      </div>

      <div>
        <img src="../assets/images/photography_2/Friend_5.jpg">
      </div>
      <div class="wide">
        <img src="../assets/images/photography_2/0006_W.jpg">
      </div>
      <div>
        <img src="../assets/images/photography_2/Anni_2.jpg">
      </div>

      <div>
        <img src="../assets/images/photography_2/Party_1.jpg">
      </div>

      <div>
        <img src="../assets/images/photography_2/Party_2.jpg">
      </div>

      <div>
        <img src="../assets/images/photography_2/Italy_3.jpg">
      </div>


      <div class="wide">
        <img src="../assets/images/photography_2/0001_W.jpg">
      </div>


      <div>
        <img src="../assets/images/photography_2/Italy_1.jpg">
      </div>

      <div class="wide">
        <img src="../assets/images/photography_2/0003_W.jpg">
      </div>

      <div>
        <img src="../assets/images/photography_2/Italy_6.jpg">
      </div>

      <div>
        <img src="../assets/images/photography_2/Italy_2.jpg">
      </div>

      <div class="wide">
        <img src="../assets/images/photography_2/0009_W.jpg">
      </div>
      <div>
        <img src="../assets/images/photography_2/Italy_4.jpg">
      </div>
      <div>
        <img src="../assets/images/photography_2/Italy_5.jpg">
      </div>
      <div>
        <img src="../assets/images/photography_2/Hudson_1.jpg">
      </div>

      <div class="wide">
        <img src="../assets/images/photography_2/0007_W.jpeg">
      </div>
      <div>
        <img src="../assets/images/photography_2/Trist_1.jpeg">
      </div>

      <div>
        <img src="../assets/images/photography_2/Italy_7.jpg">
      </div>
      <div>
        <img src="../assets/images/photography_2/Italy_8.jpg">
      </div>
      <div>
        <img src="../assets/images/photography_2/Italy_9.jpg">
      </div>

      <div>
        <img src="../assets/images/photography_2/Italy_10.jpg">
      </div>
      <div>
        <img src="../assets/images/photography_2/Italy_11.jpg">
      </div>
      <div>
        <img src="../assets/images/photography_2/Italy_12.jpg">
      </div>
      <div>
        <img src="../assets/images/photography_2/Italy_13.jpg">
      </div>
      <div>
        <img src="../assets/images/photography_2/Anne_1.jpg">
      </div>
      <div>
        <img src="../assets/images/photography_2/Home_1.jpg">
      </div>

      <div class="wide">
        <img src="../assets/images/photography_2/0002_W.jpg">
      </div>

      <div>
        <img src="../assets/images/photography_2/Friend_4.jpg">
      </div>

      <div>
        <img src="../assets/images/photography_2/Friends_1.jpg">
      </div>
      <div>
        <img src="../assets/images/photography_2/Home_2.jpg">
      </div>
      <div>
        <img src="../assets/images/photography_2/Anne_2.jpg">
      </div>

      <div>
        <img src="../assets/images/photography_2/Friend_8.jpg">
      </div>

      <div>
        <img src="../assets/images/photography_2/Home_3.jpg">
      </div>

      <div>
        <img src="../assets/images/photography_2/AT_1.jpeg">
      </div>

      <div class="wide">
        <img src="../assets/images/photography_2/Party_3.jpg">
      </div>
      
      

      
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
        imgsArr: [],
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

          this.imgsArr.push(this.getSrc(fileName))

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
      console.log(this.imgsArr)
    }
  }
</script>

<style scoped>
  img {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    display: inline-block;
  }
  .grid-wrapper > div {
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
  .grid-wrapper > div > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .grid-wrapper {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(3, 1fr);
/*    grid-auto-rows: 200px;*/
    grid-auto-flow: dense;
  }
  .grid-wrapper .wide {
    grid-column: span 2;
  }
  .grid-wrapper .tall {
    grid-row: span 2;
  }
  .grid-wrapper .big {
    grid-column: span 2;
    grid-row:  span 2;
  }
  @media(max-width:  900px) {
    .grid-wrapper {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>


