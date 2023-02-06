<template>
  <div class="rounded-lg">
    <vueper-slides  ref="vueperslides1" :touchable="false" fade :autoplay="false" :bullets="false" :slide-ratio="1.11"
      @slide="$refs.vueperslides2.goToSlide($event.currentSlide.index, { emit: false })">
      <vueper-slide class="rounded-lg" v-for="(slide, i) in slides" :key="i" :image="slide.image">
      </vueper-slide>
    </vueper-slides>
    <vueper-slides class="no-shadow thumbnails mt-2" ref="vueperslides2"
      @slide="$refs.vueperslides1.goToSlide($event.currentSlide.index, { emit: false })" :visible-slides="slides.length"
      fixed-height="75px" :bullets="false" :touchable="false" :gap="2.5" :arrows="false">
      <vueper-slide class="rounded-lg" v-for="(slide, i) in slides" :key="i" :image="slide.image"
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
    slides: [
      {
        title: 'El Teide Volcano, Spain',
        content: 'Photo by Max Rive',
        // You can also provide a URL for the image.
        image: 'https://picsum.photos/500/300?image=200'
      },
      {
        title: 'El Teide Volcano, Spain',
        content: 'Photo by Max Rive',
        // You can also provide a URL for the image.
        image: 'https://picsum.photos/500/300?image=190'
      },
      {
        title: 'El Teide Volcano, Spain',
        content: 'Photo by Max Rive',
        // You can also provide a URL for the image.
        image: 'https://picsum.photos/500/300?image=100'
      },
      {
        title: 'El Teide Volcano, Spain',
        content: 'Photo by Max Rive',
        // You can also provide a URL for the image.
        image: 'https://picsum.photos/500/300?image=100'
      },
     
      // Other slides.
    ]
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
        if (this.best_variant) {
          if (this.product.type == "USED") {
            if (this.best_variant.images.length > 0) {
              this.best_variant.images.forEach((element) => {
                var form = {
                  image: process.env.baseUrl + "/media/" + element.image,
                };
                slides.push(form);
              });
            } else {
              this.product.product.images.forEach((element) => {
                var form = {
                  image: process.env.baseUrl + "/media/" + element.image,
                };
                slides.push(form);
              });
            }
          } else {
            this.product.product.images.forEach((element) => {
              var form = {
                image: process.env.baseUrl + "/media/" + element.image,
              };
              slides.push(form);
            });
          }


        } else {
          this.product.product.images.forEach((element) => {
            var form = {
              image: process.env.baseUrl + "/media/" + element.image,
            };
            slides.push(form);
          });
        }
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