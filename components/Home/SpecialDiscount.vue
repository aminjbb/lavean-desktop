<template>
    <div>
        <vueper-slides class="no-shadow" style="border-radius: 25px;" :arrows="false" :touchable="true" fade
            :autoplay="true" :bullets="false" :shadow="false">
            <vueper-slide v-for="i in 4" :key="i">
                <template #content>
                    <div class="main-container">
                        <div class="mt-90">
                            <v-row>
                                <v-col cols="6" class="pl-15">
                                    <v-row justify="end" align="center">
                                        <v-col cols="12">
                                            <div class="d-flex justify-end align-center">
                                                <h5 class="t50800 black--text">
                                                    کالکشن نوروز!
                                                </h5>
                                            </div>

                                        </v-col>
                                        <v-col cols="12">
                                            <v-row justify="end" align="center" class="pl-5"> 
                                                <span class="t30400 black--text">
                                                    به مناسبت نوروز ۱۴۰۲...
                                                </span>
                                            </v-row>

                                        </v-col>
                                        <v-col cols="12">
                                            <v-row justify="end" align="center" class="pl-5">
                                                <span class="t30400 black--text">
                                                    دستبند، گردن‌بند، انگشتر
                                                </span>
                                            </v-row>

                                        </v-col>
                                       

                                     
                                        <v-col cols="7" class="mt-2">
                                            <v-row justify="center">
                                                <v-btn class="rounded-lg"  color="black" dark depressed height="59" width="283">
                                                    مشاهده کالکشن</v-btn>
                                            </v-row>
                                        </v-col>
                                    </v-row>

                                </v-col>
                                <v-col cols="6">
                                    <v-row class="relative" justify="end" align="center">
                                        <div class="pa-5 ">
                                            <div class="circle-box-game"></div>
                                            <v-img class="mt-15" height="215" width="574"
                                                :src="require('~/assets/img/template1.png')"></v-img>
                                        </div>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </div>
                    </div>
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
            countdown_hours: "",
            countdown_minutes: "",
            countdown_seconds: "",
        }
    },

    methods: {
        countDown() {
            if (this.countdown_seconds > 0) {
                --this.countdown_seconds;
            } else {
                this.countdown_seconds = 59;
                if (this.countdown_minutes > 0) {
                    --this.countdown_minutes;
                } else {
                    this.countdown_minutes = 59;
                    if (this.countdown_hours > 0) {
                        --this.countdown_hours;
                    }
                }
            }
        },
    },
    mounted() {
        var date = new Date();

        this.countdown_hours = date.getHours()
        this.countdown_minutes = date.getMinutes()
        this.countdown_seconds = date.getMinutes()
        setInterval(() => {
            this.countDown();
        }, 1000);
    },
}
</script>