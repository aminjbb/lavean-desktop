<template>
    <div class="main-container mt-15">
        <v-row justify="center" align="center">

            <v-col cols="12">

                <v-row justify="center mt-10">
                    <v-col cols="7">
                        <v-card outlined class="br-15  py-4 ">
                            <div class="ma-4 d-felx align-content-center px-1">
                                <span class="position__absolute">
                                    <img src="~/assets/img/ShoppingCartSimple.svg" alt="">
                                </span>
                                <span class="t14600 Black--text mr-8">
                                    کارت هدیه
                                </span>
                            </div>
                            <v-divider></v-divider>
                            <div class="px-10 mt-5 position__relative" id="giftBoxText">
                                <v-text-field  color="black" dense prepend-inner-icon="mdi-gift-outline" height="56"
                                    background-color="white" outlined class="border-r-15" placeholder="کد هدیه را وارد کنید"
                                    clearable></v-text-field>
                                <v-btn  color="DeepGreen" width="95" height="39" class="gift-btn" dark>
                                    <span class="t12400 white--text">
                                        ثبت
                                    </span>
                                </v-btn>
                            </div>
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
                        <OrderPrice />
                        <v-row justify="space-between" align="center" class="mt-3 mr-1">
                            <v-col cols="8" v-if="orderStep == 1">
                                <v-row>
                                    <v-col cols="1" class="ml-2">
                                        <img src="~/assets/img/information.svg" alt="">
                                    </v-col>
                                    <v-col cols="10">
                                        <span class="t12400 GraniteGray--text">
                                            هزینه این سفارش هنوز پرداخت نشده‌ و در صورت اتمام موجودی، کالاها از سبد حذف
                                            می‌شوند.
                                        </span>
                                    </v-col>
                                </v-row>


                            </v-col>
                            <v-col cols="4" v-else>
                                <v-btn block color="ChineseWhite" dark rounded="xl">
                                    <span class="t12400 GraniteGray--text">
                                        مرحله قبل
                                    </span>
                                </v-btn>
                            </v-col>
                            <v-col cols="6">
                                <v-btn  block color="Black" dark rounded="xl">
                                    <span class="t12400">
                                        انتقال به درگاه پرداخت
                                    </span>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-col>



        </v-row>

    </div>
</template>

<script>
import OrderPrice from '~/components/Order/OrderPrice.vue'
export default {
    components:{
        OrderPrice
    },
    data() {
        return {

        }
    }
}
</script>
</script>