<template>
    <div id="nav" class="navigation-wrap">
      <h1 class="mb-3 slide-up" v-if="isNotHomePage">
      <div class="top-home-link" >
        <transition name="fade" mode="out-in">
          <router-link class="main-title" to="/" >A. C.</router-link>
        </transition>
      </div>
    </h1>
      <nav class="navbar navbar-expand-sm navbar-light p-0">
        <div class="navbar-header">
          <button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="navbar-centered" v-show="isNotHomePage">
          <router-link class="navbar-brand header-title slide-up"  to="/">A. C.</router-link>
        </div>
        <div class="collapse navbar-collapse justify-content-center slide-up" id="mainNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link main-link" to="/about">
                About
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link main-link" to="/directing">
                Directing
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link main-link" to="/acting">
                Acting
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link main-link" to="/photography">
                Photography
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link main-link" to="/contact">
                Contact
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
</template>

<script>
export default {
  name: 'NavigationComponent',
  computed: {
    isNotHomePage() {
       return this.$route.name !== 'Home'
    }
  }
}
</script>

<style>
.top-home-link .main-title {
  font-size: 1em;
  -webkit-text-stroke-width: 1px;
}
.navbar-toggler {
  float: right;
  border: none;
  padding-right: 0;
}
.navbar-toggler:active,
.navbar-toggler:focus {
  outline: none;
}
#nav .navbar-toggler-icon {
  width: 24px;
  height: 17px;
  background-image: none;
  position: relative;
  border-bottom: 1px solid #000;
  transition: all 300ms linear;
}
#nav .navbar-toggler-icon:after, 
#nav .navbar-toggler-icon:before{
  width: 24px;
  position: absolute;
  height: 1px;
  background-color: #000;
  top: 0;
  left: 0;
  content: '';
  z-index: 2;
  transition: all 300ms linear;
}
#nav .navbar-toggler-icon:after{
  top: 8px;
}
#nav .navbar-toggler[aria-expanded="true"] .navbar-toggler-icon:after {
  transform: rotate(45deg);
}
#nav .navbar-toggler[aria-expanded="true"] .navbar-toggler-icon:before {
  transform: translateY(8px) rotate(-45deg);
}
#nav .navbar-toggler[aria-expanded="true"] .navbar-toggler-icon {
  border-color: transparent;
}

</style>