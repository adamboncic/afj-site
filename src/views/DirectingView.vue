<template>
  <div class="directing">
    <div class="row">
      <div class="col-sm-5">
        <div class="film-titles">
          <div class="film-wrapper" data-id="bolognese">
            <router-link class="film-title"  to="/directing/bolognese">
              Bolognese (2021)
            </router-link>
          </div>

          <div class="film-wrapper" data-id="helium">
            <router-link class="film-title" to="/directing/helium">
              Helium (2022)
            </router-link>
          </div>

          <div class="film-wrapper" data-id="bjgg">
            <router-link class="film-title" to="/directing/bjgg">
              Bad Jew Good Girl (2022)
            </router-link>
          </div>
        </div>
      </div>
      <div class="col-sm-7">
        <div class="film-preview">
          <img border="0" class="img-fluid" v-bind:src="filmPreviewUrl">
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  //import $ from "jquery";
  import json from '../static/data.json'

  export default {
    name: 'DirectingView',
    data() {
      return {
        json: json.directing,
        filmPreviewUrl: ''
      }
    },
    mounted () {
      this.toggleFilmPreview()
    },
    methods: {
      toggleFilmPreview: function() {
        // var self = this
        // $(".film-wrapper").hover(function () {
        //     var id = $(this).data('id')
        //     var filmObj = self.json.find((e) => e.id === id)
        //     if (filmObj) self.filmPreviewUrl = self.getSrc(filmObj.src)

        //     $(".film-preview").css('opacity','1');
        //   }, function () {
        //     $(".film-preview").css('opacity','0');
        //   }
        // )
      },
      getSrc: function (file) {
        return require('@/assets/images/directing/gifs/'+file);
      }
    }
  }
</script>
