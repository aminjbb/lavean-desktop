<template>
    <div>
        <v-row justify="end" class="mt-15 mr-13">
            <v-col cols="10">
                <v-row justify="start" class="mb-3">
                    <p class="t45600 GraniteGray--text">
                        قوانین و مقررات لاوین
                    </p>
                </v-row>
                <v-img max-height="541" :src="require('~/assets/img/static-image.png')"></v-img>
            </v-col>
        </v-row>
        <v-row justify="center" align="center" class="mt-5">

            <v-col cols="7">
                <v-row justify="center">
                    <p>سنگ ماه تولد تیر همانند دیگر سنگ‌های ماه تولد دارای انرژی کیهانی است که از طریق تماس طلا و جواهر
                        مزین به این سنگ با بدن فرد به او منتقل می‌شود. برخی کارشناسان بر این باور هستند که هر ماه تولد
                        یک سنگ ویژه‌ای دارد که می‌توان از انرژی آن برای درمان بیماری‌ها یا بهبود شرایط روحی فرد استفاده
                        کرد. بر همین اساس در این مطلب از بلاگ گالری پرسته علاوه بر معرفی سنگ‌های ماه تولد تیرماه، به
                        معرفی ویژگی‌های متولدین این ماه و خواص سنگ‌های مربوط به این ماه نیز پرداخته‌ایم. پس تا انتهای
                        این مقاله همراه ما باشید.</p>
                </v-row>
            </v-col>

        </v-row>

    </div>
</template>

<script>

import { computed } from 'vue'
export default {
    layout: 'headerBlack',


    computed: {
        orderStep() {
            return this.$store.getters['get_orderStep']
        }
    },

    mounted() {
        if (sessionStorage.getItem('orderStep')) {
            this.$store.commit('set_orderStep', sessionStorage.getItem('orderStep'))
        }
        else {
            this.$store.commit('set_orderStep', 1)
        }
    }
}
</script>