<template>
  <div class="directing">
    <div class="row">
      <div class="col-sm-4">
        <div class="film-titles">
          <div class="film-wrapper">
            <a class="film-title" data-id="bolognese">Bolognese (2021)</a>
          </div>

          <div class="film-wrapper">
            <a class="film-title" data-id="helium ">Helium (2022)</a>
          </div>

          <div class="film-wrapper">
            <a class="film-title" data-id="bad_jew_good_girl">Bad Jew Good Girl (2022)</a>
          </div>
        </div>
      </div>
      <div class="col-sm-8">
        <div class="film-preview">
          <img border="0" class="img-fluid" src="//freight.cargo.site/w/739/q/94/i/3a9a87a0b2a3c2ec8eed692af8df3aabe4cbdc84d30834a67383f3542ca821bb/BOLOGNESE.mp4-high.gif" >
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import $ from "jquery";
  import json from '../static/data.json'

  export default {
    name: 'DirectingView',
    data() {
      return {
        data: json
      }
    },
    mounted () {
      this.toggleFilmPreview()
    },
    methods: {
      toggleFilmPreview: function() {
        $(".film-title").hover(function () {
            $(".film-preview").css('opacity','1');
          }, function () {
            $(".film-preview").css('opacity','0');
          }
        )
      }
    }
  }
</script>
