<template>
    <v-container>
        <div class="mt-5 mb-10">
            <div class="t30600 black--text pr-15">
                <span>
                    مناسب شما!
                </span>
            </div>
            <v-row class="mt-5">
                <v-col cols="3" v-for="(product, index) in homeProducts " :key="index">
                    <ProductCard :product="product" />
                </v-col>

            </v-row>
        </div>
    </v-container>
</template>
<script>
import ProductCard from '~/components/Public/ProductCard.vue'
export default {
    components: {
        ProductCard
    },

    computed: {
        homeProducts() {
            return this.$store.getters['get_productHome']
        }
    },
}
</script>