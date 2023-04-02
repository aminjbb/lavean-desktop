<template>
    <div class="main-container">
        <div class="mt-5 mb-10 relative">
            <div class="t30600 black--text pr-15 ">
                <span >
                    مناسب شما!
                </span>
            </div>
            <img  v-if="homeProducts.length > 4"  @click="scrollLeft()" class="absolute top50-l" src="~/assets/img/left.svg" alt="">
                <img  v-if="homeProducts.length > 4"  @click="scrollRight()" class="absolute top50-r" src="~/assets/img/rigth.svg" alt="">

            <v-row id="homeProduct" justify="start" class="mt-9 pb-6 flex-nowrap scroll ov-hidden px-11">
                <v-col cols="3" v-for="(product, index) in homeProducts " :key="index">
                    <ProductCard :product="product" />
                </v-col>


            </v-row>
        </div>
    </div>
</template>
<script>
import ProductCard from '~/components/Public/ProductCard.vue'
export default {
    components: {
        ProductCard
    },

    data() {
        return {
            left: 0
        }
    },

    computed: {
        homeProducts() {
            return this.$store.getters['get_productHome']
        }
    },

    methods: {
        scrollLeft() {
            this.left -= 200
            document.getElementById('homeProduct').scrollTo({
                top: 0,
                left: this.left,
                behavior: 'smooth'
            })
        },
        scrollRight() {
            this.left += 200
            document.getElementById('homeProduct').scrollTo({
                top: 0,
                left: this.left,
                behavior: 'smooth'
            })
        }
    }
}
</script>