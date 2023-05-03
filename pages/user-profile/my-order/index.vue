<template>
    <div class="mt-15 pt-10 ">
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
                                <div class="text-center">
                                    <span class="t14400">
                                        شناسه سفارش
                                    </span>
                                </div>
                                <div class="text-center"> <span class="t14400">
                                        تاریخ
                                    </span></div>

                                <div class="text-center"> <span class="t14400">
                                        جمع کل
                                    </span></div>

                                <div class="text-center"><span class="t14400">
                                        وضعیت
                                    </span></div>

                                <div class="text-center"><span class="t14400">
                                        جزئیات
                                    </span></div>

                            </v-row>
                        </v-card>
                        <v-card height="178" outlined class=" mt-5 border-r-15 py-7 px-8" v-for="(order, index) in orders"
                            :key="order.id">
                            <v-row justify="space-between">
                                <div class="text-center"><span class="t14400 dana-fa">
                                        {{ order.id }}
                                    </span></div>

                                <div class="text-end pr-15 mr-8"> <span class="t14400">
                                        {{ orderDate(order.createdAt) }}
                                    </span></div>

                                <div class="text-center"> <span class="t14400 dana-fa">
                                        {{ publicMethod.splitChar(order.finalPrice) }} تومان
                                    </span></div>

                                <div class="text-center pl-8"> <span v-if="order.currentStatus" class="t14400">
                                        {{order.currentStatus.name}}
                                    </span></div>

                                <div class="text-center"> <span class="t14400">
                                        <v-btn :to="'/user-profile/my-order/' + order.id " icon>
                                            <v-icon>mdi-dots-vertical</v-icon>  
                                        </v-btn>
                                    </span></div>

                            </v-row>
                            <v-row justify="start" class="mt-6">
                                <div class="mx-3" v-for="(variant, i) in order.details" :key="i">
                                    <v-img height="92" width="92" :src="productImage(variant)" class="border-r-15"></v-img>
                                </div>

                            </v-row>


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
import { PublicMethod } from '~/store/classes'
export default {
    layout: 'headerBlack',
    components: {
        UserProfileNavigation,
        ModalAddAddres
    },

    data() {
        return {
            publicMethod: new PublicMethod
        }
    },

    mounted() {
        this.$store.dispatch('set_myOrders')
    },

    methods: {
        orderDate(e) {
            try {
                var tempDate = e.split('T');
                var splitDate = tempDate[0].split('-');
                return this.publicMethod.gregorian_to_jalali(parseInt(splitDate[0]), parseInt(splitDate[1]), parseInt(splitDate[2]))
            } catch (error) {
                return error
            }
        },

        productImage(e) {
            try {
                return process.env.baseUrl + '/media/' + e.variant.product.imageCover.imageThumbnail.medium
            } catch (error) {
                return ''
            }
        }

    },

    computed: {
        orders() {
            return this.$store.getters['get_myOrders']
        },


    }
}
</script>