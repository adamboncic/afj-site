<template>
  
  <div :id="id">

    <a
      v-for="(image, key) in imagesData"
      :key="key"
      :href="image.src"
      :data-pswp-width="[image.type == 'landscape' ? '772' : '512']"
      :data-pswp-height="[image.type == 'landscape' ? '512' : '772']"
      target="_blank"
      rel="noreferrer"
      class="photo-gallery-item"
      :class="[image.type == 'landscape' ? 'horizontal' : 'vertical']"
      data-aos="fade-up"
      data-aos-offset="-300"
      data-aos-duration="1000"
      data-aos-anchor-placement="bottom-bottom"
    >
      <img class="img-fluid" :src="image.src" alt="" />
    </a>
  </div>
</template>

<script>
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import AOS from 'aos'
import 'aos/dist/aos.css'
import $ from "jquery";

export default {
  name: 'PhotoGallery',
  props: {
    id: String,
    images: Array,
  },
  components: {

  },
  data() {
    return {
      blob: "'https://images.unsplash.com/photo-1439209306665-700c9bca794c?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=)'"
    }
  },
  setup(props) {
    return {
      imagesData: props.images,
    };
  },
  mounted() {
    if (!this.lightbox) {
      this.lightbox = new PhotoSwipeLightbox({
        gallery: '#' + this.$props.id,
        children: 'a',
        pswpModule: () => import('photoswipe'),
      });
      this.lightbox.init();    
      AOS.init()
     $(window).bind("load", function() {
        AOS.init()
      })
    }
  },
  unmounted() {
    if (this.lightbox) {
      this.lightbox.destroy();
      this.lightbox = null;
    }
  },
  methods: {

  },
  created() {
    console.log('blob', this.blob)
  }
};
</script>

<style scoped>

</style>
