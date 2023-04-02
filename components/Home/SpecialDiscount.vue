<template>
    <div class="main-container">
        <div class="mt-90">
            <v-row>
                <v-col cols="6" class="pl-15">
                    <v-row justify="end" align="center">
                        <v-col cols="12">
                            <div class="d-flex justify-end align-center">
                                <h5 class="t50800 black--text">
                                    تخفیف ویژه!
                                </h5>
                            </div>

                        </v-col>
                        <v-col cols="12">
                            <v-row justify="end" align="center">
                                <v-col cols="2">
                                    <div>
                                        <span class="t45400 black--text mx-2 dm-sans-font" v-if="countdown_seconds >= 10">
                                            {{countdown_seconds}}
                                        </span>
                                        <span class="t45400 black--text mx-2 dm-sans-font" v-else>
                                           0{{countdown_seconds}}
                                        </span>
                                    </div>
                                    <div>
                                        <span class="t16400 black--text mx-2  dm-sans-font">
                                            Seconds
                                        </span>
                                    </div>

                                </v-col>
                                <div class="vertical-divider"></div>
                                <v-col cols="2">
                                    <div>
                        
                                        <span class="t45400 black--text mx-2 dm-sans-font" v-if="countdown_minutes >= 10">
                                            {{countdown_minutes}}
                                        </span>
                                        <span class="t45400 black--text mx-2 dm-sans-font" v-else>
                                           0{{countdown_minutes}}
                                        </span>
                                    </div>
                                    <div class="text-center">
                                        <span class="t16400 black--text mx-2 dm-sans-font">
                                            Minutes
                                        </span>
                                    </div>
                                </v-col>
                                <div class="vertical-divider"></div>
                                <v-col cols="2">
                                    <div>

                                        <span class="t45400 black--text mx-2 dm-sans-font" v-if="countdown_hours >= 10">
                                            {{countdown_hours}}
                                        </span>
                                        <span class="t45400 black--text mx-2 dm-sans-font" v-else>
                                           0{{countdown_hours}}
                                        </span>
                                    </div>
                                    <div>
                                        <span class="t16400 black--text mx-2 dm-sans-font">
                                            Hours
                                        </span>
                                    </div>
                                </v-col>


                            </v-row>

                        </v-col>
                        <v-col cols="7">
                            <v-row justify="start" class="mr-10">
                                <span class="t18400 text-decoration-line-through DimGray--text dana-fa mt-2">
                                    ۲۵٬۰۰۰٬۰۰۰
                                </span>
                                <v-avatar class="mx-2 mt-1" color="orange" size="30"><span
                                        class="t12400 white--text dana-fa mt-1">5%</span></v-avatar>

                            </v-row>

                        </v-col>

                        <v-col cols="7">
                            <v-row justify="start">
                                <span class="t40600 black--text dana-fa ">
                                    ۲۵٬۰۰۰٬۰۰۰
                                    <span class="t30400 black--text">تومان</span>
                                </span>
                            </v-row>
                        </v-col>
                        <v-col cols="6" class="mt-2">
                            <v-row justify="center">
                                <v-btn class="rounded-lg" block color="black" dark depressed height="59"> مشاهده
                                    کالا</v-btn>
                            </v-row>
                        </v-col>
                    </v-row>

                </v-col>
                <v-col cols="6">
                    <v-row class="relative" justify="end" align="center">
                        <div class="pa-5 ">
                            <div class="circle-box-game"></div>
                            <v-img class="mt-15" height="215" width="574" :src="require('~/assets/img/template1.png')"></v-img>
                        </div>
                    </v-row>
                </v-col>
            </v-row>
        </div>
    </div>
</template>
<script>
export default {
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