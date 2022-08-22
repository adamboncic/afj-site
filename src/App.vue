<template>

  <div id="header">
    <Navigation/>
  </div>

  <!-- Content -->
  <router-view v-slot="{ Component }" class="mt-5 main-content">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>

  <a id="scroll-top"></a>

</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/NavigationComponent.vue';

import $ from "jquery";

export default {
  name: 'App',
  components: {
    Navigation
  },
  mounted () {
    this.initScrollToTop()
  },
  methods: {
    initScrollToTop: function() {
      var scrollBtn = $('#scroll-top');

      $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
          scrollBtn.addClass('show');
        } else {
          scrollBtn.removeClass('show');
        }
      });

      scrollBtn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
      });
    }
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgba(0,0,0,.75);
  margin: 0 1em;
  height: 100vh;
  animation: fade-in 1s ease;
}

/* Vue router transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
