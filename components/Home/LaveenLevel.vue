<template>
    <div>
        <v-btn color="black2" height="84" width="311" class="levelbtn">
            <span class="t20600 white--text">
                خرید از لاوین چه مراحلی داره؟
            </span>
        </v-btn>
        <div class="DeepGreen" style="width:100% ; height:350px">

            <v-row justify="center" align="center" class="pt-150">
                <v-col cols="8" md="6">
                    <v-row justify="space-between">
                        <div class="mr-5">
                            <img width="73" height="63" :src="require('~/assets/img/HomeShop.svg')">
                        </div>
                        <div class=" pr-3 mb-2">
                            <img width="56" height="71" :src="require('~/assets/img/HomeCard.svg')">
                        </div>
                        <div class="pr-5">
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

                 

                </v-col>
                
            </v-row>
            <v-row justify="center">
                        <div class="ml-2 mr-3 text-left" style="    width: 10%;">
                            <span class="t14400 white--text">وارد فروشگاه شو!</span>
                        </div>
                        <div class="ml-4 pr-5 mb-2 text-left"  style="    width: 10%;">
                            <span class="t14400 white--text">محصول مورد نظرتو </span>
                            <br>
                            <div class="text-left pl-5">
                                <span class="t14400 white--text">انتخاب کن</span>
                            </div>
                        </div>
                        <div class="ml-4 mr-4 text-center"  style="    width: 10%;">
                            <span class="t14400 white--text">وارد اکانت کاربریت شو یا یکی بساز.</span>
                        </div>
                        <div class="ml-4 mr-4 text-center"  style="    width: 10%;">
                            <span class="t14400 white--text">مراحل پرداخت رو انجام بده.</span>
                        </div>
                        <div class="ml-5 text-center"  style="    width: 10%;">
                            <span class="t14400 white--text">بسته برات ارسال میشه.</span>
                        </div>
                        <!-- <div class="text-start ml-15">
                            
                        </div>
                        <div class="text-center mx-md-1 mx-xl-6">
                          
                        </div>
                        <div class="text-center mx-md-1  mx-xl-6">
                          
                        </div>
                        <div class="text-center mx-md-1 mx-xl-6 white--text">
                            
                        </div>
                        <div class="text-center   mr-10 white--text">
                            
                        </div> -->
                    </v-row>
        </div>
    </div>
</template>