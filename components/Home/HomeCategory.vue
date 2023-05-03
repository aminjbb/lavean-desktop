<template>
    <div class="main-container">
        <div class="mt-15 mr-10 mb-10 relative">
            <div class="t30600 black--text pr-10">
                <span>
                    محصولات لاوین
                </span>
            </div>
            <img v-if="categories.length > 6" @click="scrollLeft()" class="absolute top50-l" src="~/assets/img/left.svg" alt="">
                <img  v-if="categories.length >6" @click="scrollRight()" class="absolute top50-r" src="~/assets/img/rigth.svg" alt="">
            <v-row id="homeCat" class="mt-5 mb-5 pb-8 flex-nowrap scroll ov-hidden" justify="center">
                <v-col cols="2" v-for="(categori, index) in categories" :key="index">
                    <CategoryCard :categori="categori" />
                </v-col>

            </v-row>

        </div>
    </div>
</template>

<script>
import CategoryCard from '~/components/Public/CategoryCard.vue'
export default {
    components: {
        CategoryCard
    },
    data(){
        return {
            left:0
        }
    },
    computed: {
        categories() {
            return this.$store.getters['get_produCategoriesHome']
        }
    },
    methods: {
        scrollLeft() {
            this.left -= 200
            document.getElementById('homeCat').scrollTo({
                top: 0,
                left: this.left,
                behavior: 'smooth'
            })
        },
        scrollRight() {
            this.left += 200
            document.getElementById('homeCat').scrollTo({
                top: 0,
                left: this.left,
                behavior: 'smooth'
            })
        }
    }
}
</script>