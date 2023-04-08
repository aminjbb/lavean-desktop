<template>
    <div >
        <v-row justify="center" align="center" v-if="show">
            
            <div class="main-container" v-if="cartDetailsLength.length > 0">
                <v-row justify="center mt-10">
                    <v-col cols="7">
                        <OrderDetail v-if="orderStep == 1" />
                        <OrderUserInfo ref="OrderUserInfo" v-if="orderStep == 2" />
                        <OrderAddress ref="OrderAddress" v-if="orderStep == 3" />
                        <OrderDelivery ref="OrderDelivery" v-if="orderStep == 4" />
                        <OrderBranche v-if="orderStep == 5" />


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
                                <v-btn @click="preStep()" block color="ChineseWhite" dark rounded="xl">
                                    <span class="t12400 GraniteGray--text">
                                        مرحله قبل
                                    </span>
                                </v-btn>
                            </v-col>
                            <v-col cols="4">
                                <v-btn @click="netxStep()" block color="Black" dark rounded="xl">
                                    <span class="t12400">
                                        ادامه خرید
                                    </span>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </div>

            <div cols="8" v-else>
                <v-row justify="center mt-15 pt-15">
                    <v-card outlined class="pt-3 pb-3 br-15" width="1200" height="494">
                        <div class="ma-4 d-felx align-content-center">
                            <span class="position__absolute">
                                <img src="~/assets/img/ShoppingCartSimple.svg" alt="">
                            </span>
                            <span class="t14600 Black--text mr-8">
                                سبد خرید
                            </span>
                        </div>
                        <v-divider></v-divider>
                        <div class="mt-10">
                            <v-row justify="center">
                                <v-img class="mt-10" max-width="234" max-height="200"
                                    :src="require('~/assets/img/is-null-object.svg')"></v-img>

                            </v-row>
                            <v-row justify="center" class="mt-6">
                                <p class="t18600 Black--text">سبد خرید شما خالی است!</p>
                                
                            </v-row>
                            <v-row justify="center" class="mt-6">
                                <v-btn width="207" color="Black" dark rounded="xl">
                                    <span class="t12400">
                                      بازدید از فروشگاه
                                    </span>
                                </v-btn>
                                
                            </v-row>
                        </div>
                    </v-card>
                </v-row>
            </div>

        </v-row>

    </div>
</template>

<script>

import OrderDetail from '~/components/Order/OrderDetail.vue'
import OrderPrice from '~/components/Order/OrderPrice.vue'
import OrderDelivery from '~/components/Order/OrderDelivery.vue'
import OrderUserInfo from '~/components/Order/OrderUserInfo.vue'
import OrderBranche from '~/components/Order/OrderBranche.vue'
import OrderAddress from '~/components/Order/OrderAddress.vue'
import ModalAddAddres from '~/components/Address/ModalAddAddres.vue'
import axios from 'axios'
export default {
    layout: 'headerBlack',
    components: {
        OrderDetail,
        OrderUserInfo,
        OrderPrice,
        OrderDelivery,
        OrderBranche,
        OrderAddress,
        ModalAddAddres
    },

    data(){
        return{
            cartDetailsLength :[],
            show:false
        }
    },

    methods: {
        netxStep() {
            if (this.orderStep == 2) {
                this.$refs.OrderUserInfo.$refs.userInfoOrder.validate()
                setTimeout(() => {
                    if (this.$refs.OrderUserInfo.valid) {
                        this.updateUser()
                    }
                }, 100);
            }
            else if (this.orderStep == 3) {
                sessionStorage.setItem('orderAddress', this.$refs.OrderAddress.address)
                this.$store.commit('incress_orderStep')
            }
            else if (this.orderStep == 4) {
                sessionStorage.setItem('orderDelivery', this.$refs.OrderDelivery.delivery)
                this.$store.commit('incress_orderStep')
            }
            else {
                this.$store.commit('incress_orderStep')
            }
            // 
        },
        updateClient() {
            axios({
                method: 'put',
                url: process.env.apiUrl + 'user/client/me/client/',
                headers: {
                    Authorization: "Bearer " + this.$cookies.get("customer_token"),
                },
                data: {
                    mobile: this.$refs.OrderUserInfo.form.mobile,
                }
            })
                .then(response => {
                    sessionStorage.setItem('orderComment', this.$refs.OrderUserInfo.form.comment)
                    this.$store.commit('incress_orderStep')
                })
                .catch(err => {

                })
        },
        updateCustomer() {
            axios({
                method: 'put',
                url: process.env.apiUrl + 'customer/client/me/',
                headers: {
                    Authorization: "Bearer " + this.$cookies.get("customer_token"),
                },
                data: {
                    national_code: this.$refs.OrderUserInfo.form.nationalCode,
                }
            })
                .then(response => {
                    this.updateClient()
                })
                .catch(err => {

                })
        },
        updateUser() {
            axios({
                method: 'put',
                url: process.env.apiUrl + 'user/client/me/user/',
                headers: {
                    Authorization: "Bearer " + this.$cookies.get("customer_token"),
                },
                data: {
                    first_name: this.$refs.OrderUserInfo.form.fullName,
                    email: this.$refs.OrderUserInfo.form.email,
                }
            })
                .then(response => {
                    this.updateCustomer()
                })
                .catch(err => {

                })
        },
        preStep() {
            this.$store.commit('decress_orderStep')
        }
    },

    computed: {
        orderStep() {
            return this.$store.getters['get_orderStep']
        },

        cartDetails() {
            try {
                return this.$store.getters['get_meCustomer'].cartDetails
            } catch (error) {
                return []
            }
        }
    },
    watch:{
        cartDetails(val){
            this.cartDetailsLength = val
        }
    },
    beforeMount() {
        this.$store.dispatch('set_meCustomer')
        this.$store.dispatch('set_deliveryMethods')
    },

    mounted() {
        setTimeout(() => {
            this.show = true
        }, 3000);
        if (sessionStorage.getItem('orderStep')) {
            this.$store.commit('set_orderStep', sessionStorage.getItem('orderStep'))
        }
        else {
            this.$store.commit('set_orderStep', 1)
        }
    }
}
</script>