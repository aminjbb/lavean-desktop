<template>
    <v-container>
        <div class="mt-15 mr-10 mb-10">
            <div class="t30600 black--text pr-10">
                <span>
                    محصولات لاوین
                </span>
            </div>
            <v-window show-arrows>
                <template v-slot:prev="{ on, attrs }" class="ml-5">
                    <!-- <v-btn icon ></v-btn> -->
                    <v-icon color="#424950" v-bind="attrs" v-on="on">
                        mdi-chevron-right-circle-outline
                    </v-icon>
                </template>
                <template v-slot:next="{ on, attrs }">
                    <!-- <v-btn icon ></v-btn> -->
                    <v-icon v-bind="attrs" v-on="on" color="#424950">
                        mdi-chevron-left-circle-outline
                    </v-icon>
                </template>
                <v-row class="mt-5 mb-5">
                    <v-col cols="3" v-for="(categori, index) in categories" :key="index">
                        <CategoryCard :categori="categori" />
                    </v-col>

                </v-row>
            </v-window>

        </div>
    </v-container>
</template>

<script>
import CategoryCard from '~/components/Public/CategoryCard.vue'
export default {
    components: {
        CategoryCard
    },

    computed: {
        categories() {
            return this.$store.getters['get_produCategories']
        }
    }
}
</script>