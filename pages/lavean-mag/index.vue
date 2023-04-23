<template>
    <div class="main-container">
        <div class="blog-banner mt-15">
            <v-img class="br-20" height="450" :src="require('~/assets/img/home-banner.jpg')">
                <v-row justify="space-between" class="content-banner gradiant-back">
                    <v-col cols="9" class="pr-15 pb-10">
                        <h3 class="t45600 white--text">
                            چگونه گوشواره خود را در خانه تمیز کنیم؟
                        </h3>
                        <p class="t20400 white--text">برای تمیز کردن گوشواره طلا، نقره و دیگر جنس‌های این وسیله‌ی زینتی در
                            خانه می‌توانید از چندین روش
                            مختلف کمک بگیرید که ما در این مطلب برایتان توضیح داده‌ایم.</p>
                    </v-col>
                    <v-col cols="2" class="pr-15">
                        <img class="mt-15 mr-5" src="~/assets/img/CaretCircleLeft.svg" alt="">
                    </v-col>
                </v-row>
            </v-img>
        </div>

        <v-row class="mt-8" justify="center">
            <v-col cols="5">
                <div id="blog-search" class="position__relative">
                    <v-text-field color="black" height="49" v-model="search" placeholder="جست‌وجوی مطلب " dense
                        background-color="Cultured02" outlined class="br-24 blog-search-box"></v-text-field>

                    <div class="search-box-mag">
                        <v-icon color="white">
                            mdi-magnify
                        </v-icon>
                    </div>
                </div>



            </v-col>
            <v-col cols="5">
                <div class="category-blog-box mt-3">
                    <v-row justify="space-between" class="px-5 py-2">
                        <v-btn text :class="filter == 0 ? 'active-mag-btn' : ''" @click="filter = 0">
                            سنگ های گرانبها
                        </v-btn>
                        <v-btn text :class="filter == 1 ? 'active-mag-btn' : ''" @click="filter = 1">
                            طلا سفید
                        </v-btn>

                        <v-btn text :class="filter == 2 ? 'active-mag-btn' : ''" @click="filter = 2">
                            طلا
                        </v-btn>

                        <v-btn text :class="filter == 3 ? 'active-mag-btn' : ''" @click="filter = 3">
                            طلا سفید
                        </v-btn>
                        <v-btn text :class="filter == 4 ? 'active-mag-btn' : ''" @click="filter = 4">
                            طلا سفید
                        </v-btn>

                    </v-row>
                </div>
            </v-col>
            <v-col cols="10">
                <v-row justify="center">
                    <v-col cols="6" class="pa-1">
                        <MagCard />
                    </v-col>
                    <v-col cols="6" class="pa-1">
                        <MagCard />
                    </v-col>
                </v-row>
            </v-col>

            <v-col cols="10" class="mt-15">
                <v-row justify="center">
                    <v-btn width="207" color="Black" dark rounded="xl">
                        <span class="t12400">
                            بیشتر
                        </span>
                    </v-btn>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import MagCard from '~/components/Mag/MagCard'
export default {
    layout: 'headerBlack',
    components: {
        MagCard
    },
    data() {
        return {
            filter: 0
        }
    }
}
</script>