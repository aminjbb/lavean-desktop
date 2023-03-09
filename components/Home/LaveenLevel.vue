<template>
    <div>
        <v-btn color="black2" height="84" width="311" class="levelbtn">
            <span class="t20600 white--text">
                خرید از لاوین چه مراحلی داره؟
            </span>
        </v-btn>
        <div class="DeepGreen" style="width:100% ; height:350px">

            <v-row justify="center" align="center" class="height-percent-100">
                <v-col cols="8" md="6">
                    <v-row justify="space-between">
                        <div class="mr-5">
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
                        <div class="ml-5">
                            <img width="85" height="62" :src="require('~/assets/img/HomeTrack.svg')">
                        </div>
                    </v-row>
                    <v-row justify="center">
                        <img class="w90" :src="require('~/assets/img/LavinLevel.svg')">
                    </v-row>

                    <v-row justify="center">
                        <div class="text-start ml-15">
                            <span class="t14400 white--text">وارد فروشگاه شو!</span>
                        </div>
                        <div class="text-center  mx-6">
                            <span class="t14400 white--text">محصول مورد نظرتو انتخاب کن</span>
                        </div>
                        <div class="text-center  mx-6">
                            <span class="t14400 white--text">وارد اکانت کاربریت شو یا یکی بساز.</span>
                        </div>
                        <div class="text-center  mx-6 white--text">
                            <span class="t14400">مراحل پرداخت رو انجام بده.</span>
                        </div>
                        <div class="text-center   mr-10 white--text">
                            <span class="t14400">بسته بات ارسال میشه.</span>
                        </div>
                    </v-row>

                </v-col>
            </v-row>
        </div>
    </div>
</template>