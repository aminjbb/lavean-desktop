<template>
    <div class="main-container">
        <div class="blog-banner mt-15">
            <v-img class="br-20" height="450" :src="require('~/assets/img/home-banner.jpg')">
                <v-row justify="space-between" class="content-banner">
                    <v-col cols="8">
                        <h3 class="t45600 white--text">
                            چگونه گوشواره خود را در خانه تمیز کنیم؟
                        </h3>
                        <p class="t20400 white--text">برای تمیز کردن گوشواره طلا، نقره و دیگر جنس‌های این وسیله‌ی زینتی در
                            خانه می‌توانید از چندین روش
                            مختلف کمک بگیرید که ما در این مطلب برایتان توضیح داده‌ایم.</p>
                    </v-col>
                    <v-col cols="1">
                        <img class="mt-15" src="~/assets/img/CaretCircleLeft.svg" alt="">
                    </v-col>
                </v-row>
            </v-img>
        </div>

        <v-row class="mt-8" justify="center">
            <v-col cols="5">
                <div id="blog-search" >
                    <v-text-field color="black" height="49" v-model="search" append-icon="mdi-magnify" placeholder="جست‌وجو " dense
                        background-color="Cultured02" outlined class="br-24 blog-search-box"></v-text-field>
                </div>



            </v-col>
            <v-col cols="5">
                <div class="category-blog-box mt-3">
                    <v-row justify="space-between" class="px-5 py-2">
                        <v-btn text>
                            سنگ های گرانبها
                        </v-btn>
                        <v-btn text>
                            طلا سفید
                        </v-btn >

                        <v-btn text>
                            طلا
                        </v-btn>

                        <v-btn text>
                            طلا سفید
                        </v-btn>
                        <v-btn text>
                            طلا سفید
                        </v-btn>

                    </v-row>
                </div>
            </v-col>
            <v-col cols="10">
                <v-row justify="center">
                    <v-col cols="6">
                        <MagCard/>
                    </v-col>
                    <v-col cols="6">
                        <MagCard/>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import MagCard from '~/components/Mag/MagCard'
export default {
    layout: 'headerBlack',
    components:{
        MagCard
    }
}
</script>