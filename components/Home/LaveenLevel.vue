<template>
    <div class="DeepGreen" style="width:100% ; height:350px">
        <v-row justify="center" align="center" class="height-percent-100">
            <v-col cols="8" md="6">
                <v-row justify="space-between" >
                    <div>
                        <img width="73" height="63" :src="require('~/assets/img/HomeShop.svg')">
                    </div>
                    <div class=" mb-2">
                        <img width="56" height="71" :src="require('~/assets/img/HomeCard.svg')">
                    </div>
                    <div class="">
                        <img width="64" height="64" :src="require('~/assets/img/HomeUser.svg')">
                    </div>
                    <div>
                        <img width="76" height="55" :src="require('~/assets/img/HomeMony.svg')">
                    </div>
                    <div>
                        <img width="85" height="62" :src="require('~/assets/img/HomeTrack.svg')">
                    </div>
                </v-row>
                <v-row justify="center">
                    <img :src="require('~/assets/img/LavinLevel.svg')">
                </v-row>

                <v-row justify="center">
                    <v-col cols="2" class="ml-6">
                        <div class="text-center">
                            <span class="t14400 white--text">وارد فروشگاه شو!</span>
                        </div>
                    </v-col>
                    <v-col cols="2" class="ml-2">
                        <div class="text-center">
                            <span class="t14400 white--text">محصول مورد نظرتو انتخاب کن</span>
                        </div>

                    </v-col>
                    <v-col cols="2">
                        <div class="text-center">
                            <span class="t14400 white--text">وارد اکانت کاربریت شو یا یکی بساز.</span>
                        </div>


                    </v-col>
                    <v-col cols="2" class="mr-6">
                        <div class="text-center white--text">
                            <span class="t14400">مراحل پرداخت رو انجام بده.</span>
                        </div>

                    </v-col>
                    <v-col cols="2" class="mr-6">
                        <div class="text-center white--text">
                            <span class="t14400">بسته برات ارسال میشه.</span>
                        </div>

                    </v-col>
                </v-row>

            </v-col>
        </v-row>
    </div>
</template>