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
                                <v-text-field color="black" dense prepend-inner-icon="mdi-gift-outline" height="56"
                                    background-color="white" outlined class="border-r-15" placeholder="کد هدیه را وارد کنید"
                                    clearable></v-text-field>
                                <v-btn color="DeepGreen" width="95" height="39" class="gift-btn" dark>
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
                                                {{ customerName }}
                                            </span>
                                        </div>
                                        <div class="ma-4 d-felx align-content-center">
                                            <span class="position__absolute mt-1">
                                                <img src="~/assets/img/phone.svg" alt="">
                                            </span>
                                            <span class="t14400 Gray_02--text mr-8 dana-fa">
                                                {{ customerMobile }}
                                            </span>
                                        </div>
                                        <div class="ma-4 d-felx align-content-center">
                                            <span class="position__absolute mt-1">
                                                <img src="~/assets/img/credit-card.svg" alt="">
                                            </span>
                                            <span class="t14400 Gray_02--text mr-8 dana-fa">
                                                {{ customerNationalCode }}
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
                                                {{ orderAddressDetail }}
                                            </span>
                                        </div>
                                    </v-row>
                                </v-card>

                                <div>
                                    <v-row>
                                        <OrderCard v-for="(card, index) in details" :key="index" :card="card" />

                                    </v-row>
                                </div>
                            </div>
                        </v-card>
                    </v-col>
                    <v-col cols="5">
                        <OrderPrice :cartDetails="details" />
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
                                <v-btn :loading="loading" @click="payment()" block color="Black" dark rounded="xl">
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
import OrderCard from '~/components/Order/OrderCard.vue'
import axios from 'axios'
export default {
    components: {
        OrderPrice,
        OrderCard
    },
    data() {
        return {
            loading:false
        }
    },

    computed: {
        order() {
            return this.$store.getters['get_clientOrder']
        },

        customer() {
            try {
                return this.$store.getters['get_meCustomer']
            } catch (error) {
                return ''
            }
        },



        customerName() {
            try {
                return this.customer.client.user.firstName
            } catch (error) {
                return ''
            }
        },
        customerMobile() {
            try {
                return this.customer.client.mobile
            } catch (error) {
                return ''
            }
        },
        customerNationalCode() {
            try {
                return this.customer.nationalCode
            } catch (error) {
                return ''
            }
        },
        details() {
            try {
                return this.order.details
            } catch (error) {
                return []
            }
        },

        orderAddressDetail() {
            try {
                return this.order.address.addressDetail

            } catch (error) {
                return ''
            }
        }
    },

    methods: {
        payment() {
            this.loading = true
            axios({
                method: 'post',
                url: process.env.apiUrl + 'payment/client/order/',
                headers: {
                    Authorization: "Bearer " + this.$cookies.get("customer_token"),
                },
                data: {
                    order: this.order.id,
                  
                }
            })
                .then(response => {
                    this.loading = false;
                    // console.log(response.data.authority);
                    window.location.href = 'https://sandbox.zarinpal.com/pg/StartPay/' + response.data.authority
                })
                .catch(err => {
                    this.loading = false
                })
        }
    },

    mounted() {
        this.$store.dispatch('set_clientOrder', this.$route.params.id)
        this.$store.dispatch('set_meCustomer')
    }
}

</script>