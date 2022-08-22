<template>
  <div :id="galleryID">
    <a
      v-for="(image, key) in imagesData"
      :key="key"
      :href="image.url"
      :data-pswp-width="image.width"
      :data-pswp-height="image.height"
      target="_blank"
      rel="noreferrer"
      class="item fade-in"
    >
    <transition name="fade">
      <img :src="image.url" alt="" />
    </transition>

    </a>
  </div>
</template>

<script>
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

export default {
  name: 'PhotoGallery',
  props: {
    galleryID: String,
    images: Array,
  },
  components: {

  },
  setup(props) {
    return {
      imagesData: props.images,
    };
  },
  mounted() {
    if (!this.lightbox) {
      this.lightbox = new PhotoSwipeLightbox({
        gallery: '#' + this.$props.galleryID,
        children: 'a',
        pswpModule: () => import('photoswipe'),
      });
      this.lightbox.init();
    }
  },
  unmounted() {
    if (this.lightbox) {
      this.lightbox.destroy();
      this.lightbox = null;
    }
  },
  methods: {},
};
</script>

<style scoped>
    .animated-component.fade-enter-from,
    .animated-component.zoom-enter-from {
      transition: none;
    }
    /* Fade animation */
    .fade-enter-active,
    .fade-leave-active {
      transition: opacity 300ms ease;
    }
    .fade-enter-from,
    .fade-leave-to {
      opacity: 0;
    }
    /* Zoom animation */
    .zoom-enter-active,
    .zoom-leave-active {
      transition: transform 300ms ease;
    }
    .zoom-enter-from,
    .zoom-leave-to {
      transform: scale(0.9);
    }
</style>
