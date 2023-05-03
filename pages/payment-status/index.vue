<template>
    <div class="main-container mt-15" v-if="load">
        <v-row justify="center" align="center">

            <v-col cols="12">
                <div :class="paidAt ? 'success-payment' : 'unsuccess-payment'">
                    <v-row align="center" v-if="paidAt" class="pa-4 pt-8" >
                        <img class="mx-2" width="31" height="31" :src="require('~/assets/img/check-circle.svg')"/>
                            <span class="t16400"> سفارش
                                با موفقیت ثبت شد!</span>

                    </v-row>
   
                    <v-row align="center" v-else class="pa-4 pt-8" >
                        <img class="mx-2" width="31" height="31" :src="require('~/assets/img/x-circle.svg')"/>
                            <span class="t16400">  پرداخت شما به خطا خورد!</span>

                    </v-row>
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
                        <div :class="paidAt ? 'success-peyment-card' : 'unsuccess-peyment-card'">
                            <v-row justify="center">
                                <v-img v-if="paidAt" class="position__absolute " style="top:-110px" width="209" height="209"
                                    :src="require('~/assets/img/check-circle.svg')"></v-img>
                                <v-img v-else class="position__absolute " style="top:-110px" width="209" height="209"
                                    :src="require('~/assets/img/x-circle.svg')"></v-img>

                            </v-row>
                            <div class="status-box">
                                <v-row justify="space-between pa-8">
                                    <span class="t16400 OuterSpace--text">
                                        وضعیت سفارش
                                    </span>
                                    <span class="t16400 OuterSpace--text">
                                        {{ orderStatus }}
                                    </span>
                                </v-row>
                            </div>
                            <div class="status-box mt-5">
                                <v-row justify="space-between pa-8">
                                    <span class="t16400 OuterSpace--text">
                                        وضعیت پرداخت
                                    </span>
                                    <span class="t16400 OuterSpace--text" v-if="paidAt">
                                        پرداخت شد
                                    </span>
                                    <span class="t16400 OuterSpace--text" v-else>
                                        در انتظار پرداخت
                                    </span>
                                </v-row>
                            </div>

                            <v-row justify="center" style="    margin-top: 60px;">
                                <v-btn :to="'/user-profile/my-order/' + order.id" v-if="paidAt" width="207" color="Black" dark rounded="xl">
                                    <span class="t12400">
                                        پیگیری سفارش
                                    </span>
                                </v-btn>
                                <v-btn @click="againPayment()" v-else width="207" color="Black" dark rounded="xl">
                                    <span class="t12400">
                                        پرداخت مجدد
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
            load: false,
            isPayment: false
        }
    },
    layout: 'headerBlack',
    mounted() {
        this.$store.dispatch('set_clientPayment', this.$route.query.payment)
        this.$store.dispatch('set_meCustomer')
    },

    methods: {
        againPayment() {
            window.location.href = 'https://sandbox.zarinpal.com/pg/StartPay/' + this.payment.authority
        }
    },

    computed: {
        payment() {
            return this.$store.getters['get_clientPayment']
        },
        paidAt() {
            try {
                if (this.payment.paidAt) {
                    return true
                }
                else {
                    return false
                }
            } catch (error) {
                return ''
            }
        },
        order() {
            try {
                return this.payment.order
            } catch (error) {
                return ''
            }
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
        },

        orderStatus() {
            try {
                return this.order.currentStatus.name
            } catch (error) {
                return ''
            }
        },
        orderFinalPrice() {
            try {
                return this.order.finalPrice
            } catch (error) {
                return ''
            }
        },

        orderCreatedAt() {
            try {
                return this.order.createdAt
            } catch (error) {
                return ''
            }
        }
    },

    watch: {
        payment() { this.load = true }

    }
}
</script>
