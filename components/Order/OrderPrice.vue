<template>
    <div>
        <v-card outlined min-height="69" class="mt-2 border-r-15">
            <v-row justify="space-between pa-8  " align="center">
                <div>
                    <span class="t16400">قیمت کالا‌ها</span>
                </div>
                <div>
                    <span class="t18600 Black--text dana-fa">{{ splitChar(cardPrice) }} <span class="t16400">
                            تومان
                        </span></span>
                </div>
            </v-row>
        </v-card>

        <v-card outlined min-height="69" class="mt-4 border-r-15">
            <v-row justify="space-between pa-8" align="center">
                <div>
                    <span class="t16400 ">مجموع کل تخفیف</span>
                </div>
                <div>
                    <span class="t18600 Black--text dana-fa"> {{ splitChar(discountPrice) }} <span class="t16400">
                            تومان
                        </span></span>
                </div>
            </v-row>
        </v-card>

        <div class="mt-4 price-order-box border-r-15">
            <v-row justify="space-between pa-8" align="center">
                <div>
                    <span class="t16400 DeepGreen--text">قابل پرداخت</span>
                </div>
                <div>
                    <span class="t18600 DeepGreen--text dana-fa">{{ splitChar(finalPrice) }}<span class="t16400">
                            تومان
                        </span></span>
                </div>
            </v-row>
        </div>

        <!-- <v-row justify="space-between" align="center" class="mt-3 mr-1">
            <v-col cols="8" v-if="orderStep == 1">
                <v-row>
                    <v-col cols="1" class="ml-2">
                        <v-icon color="accent">
                            mdi-information-outline
                        </v-icon>
                    </v-col>
                    <v-col cols="10">
                        <span class="t12400 GraniteGray--text">
                            هزینه این سفارش هنوز پرداخت نشده‌ و در صورت اتمام موجودی، کالاها از سبد حذف می‌شوند.
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
        </v-row> -->
    </div>
</template>

<script>
import { PublicMethod } from "~/store/classes";
export default {
    props: {
        cartDetails: []
    },
    methods: {
        netxStep() {
            this.$store.commit('incress_orderStep')
        },
        preStep() {
            this.$store.commit('decress_orderStep')
        },
        splitChar(text) {
            var publicMethod = new PublicMethod()
            return publicMethod.splitChar(text)
        },

    },
    computed: {
        discountPrice() {
            try {
                var discount = 0
                this.cartDetails.forEach(element => {
                    if (element.variant.product.discountPercent) {
                        discount += element.variant.price * (element.variant.product.discountPercent / 100)
                    }

                });
                return discount;
            } catch (error) {
                return ''
            }
        },
        cardPrice() {
            try {
                var price = 0
                this.cartDetails.forEach(element => {
                    price += element.variant.price
                });
                return price;
            } catch (error) {
                return ''
            }
        },
        finalPrice() {
            try {
                
                return this.cardPrice - this.discountPrice;
            } catch (error) {
                return ''
            }
        },
        orderStep() {
            return this.$store.getters['get_orderStep']
        }
    },

}

</script>