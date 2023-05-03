<template>
    <div class="main-container mt-15">
        <v-row justify="center" align="center">

            <v-col cols="12">
                <div class="success-payment pa-5">
                    <span class="t16400">
                        سفارش با موفقیت ثبت شد!
                    </span>
                </div>
                <v-row justify="center mt-10">
                    <v-col cols="7">
                        <v-card outlined class="br-15 px-5 py-4" height="124">
                            <v-row align="center" class="mt-1">
                                <span class="mt-2">
                                    <img src="~/assets/img/info-black.svg" alt="">
                                </span>

                                <span class="t14400 mx-2">
                                    روند پردازش سفارش از طریق پیامک به اطلاع شما خواهد رسید.
                                </span>
                            </v-row>
                            <v-row align="center" class="mt-3">
                                <span class="mt-2">
                                    <img src="~/assets/img/info-black.svg" alt="">
                                </span>

                                <span class="t14400 mx-2">
                                    ارائه کارت ملی هنگام تحویل کالا الزامی‌ است.
                                </span>
                            </v-row>
                        </v-card>
                        <v-card outlined class="mt-5 pt-3 pb-3 br-15" width="1200" min-height="494">
                            <div class="ma-4 d-felx align-content-center">
                                <span class="position__absolute">
                                    <img src="~/assets/img/ShoppingCartSimple.svg" alt="">
                                </span>
                                <span class="t14600 Black--text mr-8">
                                    جزئیات سفارش
                                </span>
                            </div>
                            <v-divider></v-divider>
                            <div class="ma-5">
                                <v-card height="56" class="br-15 pa-3" outlined>
                                    <v-row justify="space-between">
                                        <div class="ma-4 d-felx align-content-center">
                                            <span class="position__absolute mt-1">
                                                <img src="~/assets/img/user.svg" alt="">
                                            </span>
                                            <span class="t14400 Gray_02--text mr-8">
                                                گلزار حیدری
                                            </span>
                                        </div>
                                        <div class="ma-4 d-felx align-content-center">
                                            <span class="position__absolute mt-1">
                                                <img src="~/assets/img/phone.svg" alt="">
                                            </span>
                                            <span class="t14400 Gray_02--text mr-8 dana-fa">
                                                ۰۹۳۰۰۱۷۹۶۴۸
                                            </span>
                                        </div>
                                        <div class="ma-4 d-felx align-content-center">
                                            <span class="position__absolute mt-1">
                                                <img src="~/assets/img/credit-card.svg" alt="">
                                            </span>
                                            <span class="t14400 Gray_02--text mr-8 dana-fa">
                                                ۰۰۱۸۹۹۶۶۶--
                                            </span>
                                        </div>
                                    </v-row>
                                </v-card>

                                <v-card height="56" class="br-15 mt-5 pa-3" outlined>
                                    <v-row justify="space-between">
                                        <div class="ma-4 d-felx align-content-center">
                                            <span class="position__absolute mt-1">
                                                <img src="~/assets/img/map-pin.svg" alt="">
                                            </span>
                                            <span class="t14400 Gray_02--text mr-8 dana-fa">
                                                سعادت آباد، خیابان علامه جنوبی، کوچه ۳۴ شرقی، پلاک ۲۷، واحد ۱۶
                                            </span>
                                        </div>
                                    </v-row>
                                </v-card>
                            </div>
                        </v-card>
                    </v-col>
                    <v-col cols="5">
                        <div class="success-peyment-card ">
                            <v-row justify="center">
                                <v-img class="position__absolute " style="top:-110px" width="209"
                                    height="209" :src="require('~/assets/img/check-circle.svg')"></v-img>

                            </v-row>
                            <div class="status-box">
                                <v-row justify="space-between pa-8">
                                    <span class="t16400 OuterSpace--text">
                                        وضعیت سفارش
                                    </span>
                                    <span class="t16400 OuterSpace--text">
                                        در انتظار پردازش
                                    </span>
                                </v-row>
                            </div>
                            <div class="status-box mt-5">
                                <v-row justify="space-between pa-8">
                                    <span class="t16400 OuterSpace--text">
                                        وضعیت پرداخت
                                    </span>
                                    <span class="t16400 OuterSpace--text">
                                        پرداخت شد
                                    </span>
                                </v-row>
                            </div>

                            <v-row justify="center" style="    margin-top: 60px;">
                                <v-btn width="207" color="Black" dark rounded="xl">
                                    <span class="t12400">
                                        پیگیری سفارش
                                    </span>
                                </v-btn>
                            </v-row>
                        </div>
                    </v-col>
                </v-row>
            </v-col>



        </v-row>

    </div>
</template>

<script>

export default {
    data() {
        return {

        }
    }
}
</script>
</script>