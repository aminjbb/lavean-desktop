<template>
    <v-row justify="center">
        <v-col cols="10">
            <v-row justify="center">
                <v-col cols="4">
                    <CarouselImageThumbnails2 />
                </v-col>
                <v-col cols="4">
                    <NameAndDetail />
                </v-col>
                <v-col cols="4">
                    <PriceSection />
                </v-col>
            </v-row>
        </v-col>
    

        <v-col cols="10">
            <v-divider></v-divider>
            <Branches />
        </v-col>
    </v-row>
</template>

<script>
import CarouselImageThumbnails2 from "~/components/Carousel/CarouselImageThumbnails2.vue";
import NameAndDetail from "~/components/Pdp/NameAndDetail.vue";
import Branches from "~/components/Pdp/Branches.vue";
import PriceSection from "~/components/Pdp/PriceSection.vue";
export default {
    components: {
        CarouselImageThumbnails2,
        NameAndDetail,
        PriceSection,
        Branches
    }
}
</script>