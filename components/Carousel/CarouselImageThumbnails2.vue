<template>
  <div id="image">
    <!-- <vueper-slides  id="pdpCarousel" style="border-radius: 25px;" ref="vueperslides1" :arrows="false" :touchable="false" fade :autoplay="false" :bullets="true" :slide-ratio="1.11"
      @slide="$refs.vueperslides2.goToSlide($event.currentSlide.index, { emit: false })">
      <vueper-slide  style="border-radius: 25px;"  v-for="(slide, i) in slides" :key="i" :image="slide.image">
      </vueper-slide>
    </vueper-slides>
    <vueper-slides class="no-shadow thumbnails mt-2" ref="vueperslides2"
      @slide="$refs.vueperslides1.goToSlide($event.currentSlide.index, { emit: false })" :visible-slides="slides.length"
      fixed-height="124px" :bullets="false" :touchable="false" :gap="2.5" :arrows="false">
      <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image" style="width: 126px; border-radius: 15px; height: 124px;"
        @click.native="$refs.vueperslides2.goToSlide(i)">
      </vueper-slide>
    </vueper-slides> -->

    <!-- <vue-magnifier style="width:250px" src="https://picsum.photos/500/500?image=1071" src-large="https://picsum.photos/1000/1000?image=1071"></vue-magnifier> -->

    <div class="vue-magnifier-container">
      <slot></slot>
      <span ref="magnificationElement" class="preview br-25" v-bind:style="{ 'background-image': 'url(' + src + ')' }">
        <span ref="glass" class="magnifying-glass"
          v-bind:style="{ 'background-image': 'url(' + src + ')', backgroundPosition: backgroundPos, left: cursorX + 'px', top: cursorY + 'px' }"></span>
      </span>
    </div>
    <vueper-slides class="no-shadow thumbnails mt-2" ref="vueperslides2" :visible-slides="slides.length"
      fixed-height="124px" :bullets="false" :touchable="false" :gap="2.5" :arrows="false">
      <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image"
        style="width: 126px; border-radius: 15px; height: 124px;" @click.native="src = slide.image">
      </vueper-slide>
    </vueper-slides>
  </div>
</template>


<script>
// In your Vue.js component.
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  components: {
    VueperSlides,
    VueperSlide,

  },
  data: () => ({
    img: null,
    width: null,
    height: null,
    bounds: null,
    cursorX: 0,
    cursorY: 0,
    thumbPos: { x: 0, y: 0 },
    backgroundPos: '0 0',
    src: ''
  }),

  methods: {
    getCursorPos: function (e) {
      var x = (window.Event) ? e.pageX : event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
      var y = (window.Event) ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);

      this.cursorX = x - this.thumbPos.x;
      this.cursorY = y - this.thumbPos.y;
    },
    getBounds: function () {
      var el = this.$refs.magnificationElement;

      this.bounds = el.getBoundingClientRect();

      var xPos = 0;
      var yPos = 0;
      while (el) {
        var transform = this.getTransform(el);
        if (el.tagName == "BODY") {
          // deal with browser quirks with body/window/document and page scroll
          var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
          var yScroll = el.scrollTop || document.documentElement.scrollTop;


          xPos += (el.offsetLeft - xScroll + el.clientLeft + parseInt(transform[0]));
          yPos += (el.offsetTop - yScroll + el.clientTop + parseInt(transform[1]));
        } else {
          // for all other non-BODY elements
          xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft + parseInt(transform[0]));
          yPos += (el.offsetTop - el.scrollTop + el.clientTop + parseInt(transform[1]));
        }

        el = el.offsetParent;
      }
      this.thumbPos = {
        x: xPos,
        y: yPos
      }
    },
    moveMagnifier: function (e) {
      e.preventDefault();

      this.getBounds();
      this.getCursorPos(e);

      this.backgroundPos = this.cursorX * 100 / this.bounds.width + "% " + this.cursorY * 100 / this.bounds.height + "%";
    },
    getTransform: function (el) {
      var transform = window.getComputedStyle(el, null).getPropertyValue('-webkit-transform');

      function rotate_degree(matrix) {
        if (matrix !== 'none') {
          var values = matrix.split('(')[1].split(')')[0].split(',');
          var a = values[0];
          var b = values[1];
          var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
        } else {
          var angle = 0;
        }
        return (angle < 0) ? angle += 360 : angle;
      }

      var results = transform.match(/matrix(?:(3d)\(-{0,1}\d+\.?\d*(?:, -{0,1}\d+\.?\d*)*(?:, (-{0,1}\d+\.?\d*))(?:, (-{0,1}\d+\.?\d*))(?:, (-{0,1}\d+\.?\d*)), -{0,1}\d+\.?\d*\)|\(-{0,1}\d+\.?\d*(?:, -{0,1}\d+\.?\d*)*(?:, (-{0,1}\d+\.?\d*))(?:, (-{0,1}\d+\.?\d*))\))/);

      var output = [0, 0, 0];
      if (results) {
        if (results[1] == '3d') {
          output = results.slice(2, 5);
        } else {
          results.push(0);
          output = results.slice(5, 9); // returns the [X,Y,Z,1] value;
        }

        output.push(rotate_degree(transform));
      }
      return output;
    }
  },

  props: { product: "" },

  computed: {
    model() {
      try {
        return (

          this.product.product.name

        );
      } catch (error) { }
    },


    video() {
      try {
        return this.best_variant.video;
      } catch (error) {
        return "";
      }
    },
    slides() {
      try {
        var slides = [];
        this.product.images.forEach(element => {
          var form = { image: process.env.baseUrl + '/media/' + element.imageThumbnail.large }
          slides.push(form)
        });
        return slides;
      } catch (error) {
        console.log(error, "errorSlide");
        return [];
      }
    },

    best_variant() {
      return this.$store.getters["get_bestVariant"];
    },
  },

  watch: {

  },

  mounted() {
    try {
      this.src = this.slides[0].image
    } catch (error) {
      this.src = ''
    }
    this.$nextTick(function () {
      this.$refs.magnificationElement.addEventListener("mousemove", this.moveMagnifier);
    })
  }
};
</script>