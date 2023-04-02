<template>
  <div >
    <vueper-slides  id="pdpCarousel" style="border-radius: 25px;" ref="vueperslides1" :arrows="false" :touchable="false" fade :autoplay="false" :bullets="true" :slide-ratio="1.11"
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
   
  }),

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
          var form = {image : process.env.baseUrl + '/media/' + element.imageThumbnail.large}
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
};
</script>