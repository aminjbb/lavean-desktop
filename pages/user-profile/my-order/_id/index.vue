<template>
    <div class="mt-15 pt-10">
        <v-row justify="center" align="center">
            <v-col cols="8">
                <v-row justify="center">
                    <v-col cols="4">
                        <UserProfileNavigation />

                    </v-col>
                    <v-col cols="8">
                        <div class="container-avatar ma-auto mt-15">
                            <div class="ma-4">
                                <span class="t14600 Black--text">
                                    تاریخچه سفارشات
                                </span>
                            </div>

                        </div>

                        <v-card height="56" color="#EDEDED" outlined class="border-r-15 py-7 px-8">
                            <v-row justify="space-between">
                                <div>
                                    <span class="t12600 mx-1">وضعیت</span>
                                    <span class="t12400 mx-1 dana-fa">{{orderStatus}}</span>
                                </div>
                                <div>
                                    <span class="t12600 mx-1">مبلغ</span>
                                    <span class="t12400 mx-1 dana-fa">{{ publicMethod.splitChar(orderFinalPrice) }} تومان</span>
                                </div>
                                <div>
                                    <span class="t12600 mx-1">تاریخ</span>
                                    <span class="t12400 mx-1 dana-fa">{{orderDate(orderCreatedAt)}}</span>
                                </div>
                                <div>
                                    <span class="t12600 mx-1">شناسه سفارش</span>
                                    <span class="t12400 mx-1 dana-fa">{{order.id}}</span>
                                </div>

                            </v-row>

                        </v-card>


                        <div class="mt-4">
                            <span class="t14600 Black--text">
                                آدرس تحویل سفارش
                            </span>
                        </div>
                        <v-card outlined class="border-r-15 py-3 mt-3" min-height="56">
                            <p class="t14400 Arsenic--text ma-3 my-4 text-right">
                               {{orderAddressDetail}}
                            </p>
                        </v-card>
                        <v-card outlined class="border-r-15 py-3 mt-3" min-height="56">
                            <p class="t14600 Arsenic--text ma-3  text-right">
                                ارسال فوری در تهران
                            </p>
                            <p class="t14400 Arsenic--text ma-3 mx-8 text-right">
                                ارسال در بازه زمانی ۹ تا ۱۵ شنبه
                            </p>
                        </v-card>

                        <v-card outlined rounded="lg pt-3 pb-3" class="mt-3">
                            <div class="ma-4">
                                <span class="t14600 Black--text">
                                    سبد خرید
                                </span>
                            </div>

                            <div>
                                <v-row>
                                    <OrderCard v-for="(card, index) in details" :key="index" :card="card" />
                                </v-row>
                            </div>
                        </v-card>
                        <v-btn outlined block class="rounded-xl mt-3" color="SpanishGray" height="59">
                            بیشتر
                        </v-btn>
                    </v-col>
                </v-row>
            </v-col>

        </v-row>

    </div>
</template>

<script>
import UserProfileNavigation from '~/components/UserProfile/UserProfileNavigation.vue'
import ModalAddAddres from '~/components/Address/ModalAddAddres.vue'
import OrderCard from '~/components/Order/OrderCard.vue'
import { PublicMethod } from '~/store/classes'
export default {
    components: {
        UserProfileNavigation,
        ModalAddAddres,
        OrderCard
    },
    data(){
        return {
            publicMethod:new PublicMethod
        }
    },
    layout: 'headerBlack',

    methods:{
        orderDate(e) {
            try {
                var tempDate = e.split('T');
                var splitDate = tempDate[0].split('-');
                return this.publicMethod.gregorian_to_jalali(parseInt(splitDate[0]), parseInt(splitDate[1]), parseInt(splitDate[2]))
            } catch (error) {
                return ''
            }
        },

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
        },

        orderStatus(){
            try {
                return this.order.currentStatus.name
            } catch (error) {
                return ''
            }
        },
        orderFinalPrice(){
            try {
                return this.order.finalPrice
            } catch (error) {
                return ''
            }
        },

        orderCreatedAt(){
            try {
                return this.order.createdAt
            } catch (error) {
                return ''
            }
        }
    },

    mounted() {
        this.$store.dispatch('set_clientOrder', this.$route.params.id)
        this.$store.dispatch('set_meCustomer')
    }
}
</script>