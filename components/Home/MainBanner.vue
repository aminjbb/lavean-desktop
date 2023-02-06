<template>
    <div class="rcontainer-banner">
        <vueper-slides class="no-shadow pa-0"  height="600" fade :touchable="false" rtl :slide-ratio="1 / 4.2" autoplay
            :arrows="false">
            <vueper-slide v-for="(item, i) in items" :key="i" :link="item.to">
                <template #content>
                    <v-responsive :aspect-ratio="16/9" height="600">
                        <v-img  class="img-fluid2" :src="item.src" alt="" ></v-img>
                    </v-responsive>
                </template>
            </vueper-slide>
        </vueper-slides>

    </div>
</template>
<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
    components: {
        VueperSlides,
        VueperSlide,
    },
    data() {
        return {
            items: [
                {
                    src: require('../../assets/img/home-banner.jpg'),
                    to: '/'
                },
                


            ],
        };
    },
};
</script>