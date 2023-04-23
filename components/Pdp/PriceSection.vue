<template>
    <div>
        <v-col cols="12">
            <div class="d-flex mr-7">
                <div class="mt-2">
                    <span class="ml-3">
                        وزن
                    </span>
                </div>
                <div class="w-100 pdp-form" id="mySelect">
                    <v-select height="55" append-icon="mdi-chevron-down" v-model="changeVariant" background-color="white"
                        @change="setBestvariant()" :disabled="!bestVariant" :items="variants" dense label="وزن"
                        outlined></v-select>
                </div>

            </div>

        </v-col>
        <v-col cols="12">
            <v-row class="mr-4">
                <v-col cols="5">
                    <v-row class="" align="center" style="margin-right: 1px ; margin-top: 3px;">
                        <span class="t12400 info3--text">
                            راهنمای اندازه‌ها

                        </span>
                        <img class="mr-3" src="~/assets/img/CaretCircleLeft.svg" alt="">
                    </v-row>
                    <div class="mt-15">
                        <p class="t14600">توضیحات</p>

                        <p class="t12400 line-h-28 text-justify">برای تمیز کردن گوشواره طلا، نقره و دیگر جنس‌های این وسیله‌ی
                            زینتی در خانه
                            می‌توانید از چندین روش مختلف کمک بگیرید که ما در این مطلب برایتان توضیح داده‌ایم.</p>
                    </div>
                </v-col>
                <v-col cols="6" class="mr-15">
                    <v-card class="br-15 ma-0" outlined height="174" v-if="bestVariant">

                        <v-row justify="space-between" align="center" class="mt-6 mx-8">
                            <span class="t12400">
                                تخفیف
                                <v-avatar color="accent" size="22">
                                    <span class="t10400 white--text pa-5 dana-fa">10%</span>
                                </v-avatar>

                            </span>
                            <span class="t22600 dana-fa">
                                {{ splitChar(variantPriceWithDiscount) }} <span class="t18400">تومان</span>
                            </span>


                        </v-row>

                        <v-divider class="mt-10"></v-divider>
                        <v-row justify="space-between" align="center" class="mt-6 mx-8 pb-8">
                            <span class="t12400">
                                ۲۰٪ اجرت ساخت
                            </span>
                            <span class="t22600 dana-fa">
                                {{ splitChar(variantPrice) }} <span class="t18400">تومان</span>
                            </span>


                        </v-row>
                    </v-card>
                    <v-card class="br-15 ma-0" outlined height="84" v-else>


                        <v-row justify="space-between" align="center" class="mt-6 mx-8">
                            <span class="t22600 DeepCarminePink--text">
                                ناموجود
                            </span>
                            <span class="t16400 dana-fa">
                                این کالا ناموجود میباشد
                            </span>


                        </v-row>

                    </v-card>
                    <v-row justify="end" align="center" class="mt-6 pl-3" style="    min-width: 363px;">

                        <v-btn :loading="loading" dark color="Black" rounded="xl" min-width="207" height="47"
                            v-if="bestVariant" @click="addToCard()">
                            <span class="t12400">اضافه کردن به سبد خرید</span>
                        </v-btn>
                        <v-btn dark color="Black" rounded="xl" min-width="207" v-else>
                            <span class="t12400">بازدید از فروشگاه</span>
                        </v-btn>

                    </v-row>
                    <!-- <v-row justify="end">
                        <v-col cols="5" md="4" class="mt-6 ml-2">
                         
                        </v-col>
                    </v-row> -->
                    <!-- <v-card outlined min-height="80" max-height="174" min-width="351">

                        <v-row justify="space-between" align="center" class="mt-6 mx-8" v-if="bestVariant">
                            <span class="t12400">
                                ۲۰٪ اجرت ساخت
                            </span>
                            <span class="t22600 dana-fa">
                                {{ splitChar(variantPrice) }} <span class="t18400">تومان</span>
                            </span>


                        </v-row>
                        <v-row justify="space-between" align="center" class="mt-6 mx-8" v-else>
                            <span class="t22600 DeepCarminePink--text">
                                ناموجود
                            </span>
                            <span class="t18400 dana-fa">
                                این کالا ناموجود میباشد
                            </span>


                        </v-row>
                    </v-card> -->

                </v-col>
            </v-row>

        </v-col>

        <v-snackbar v-model="snackbar" :timeout="4000">
            {{ text }}

            <template v-slot:actions>
                <v-btn color="blue" variant="text" @click="snackbar = false">
                    Close
                </v-btn>
            </template>
        </v-snackbar>

    </div>
</template>

<script>
import axios from 'axios'
export default {
    props: {
        product: ''
    },
    data() {
        return {
            loading: false,
            changeVariant: '',
            snackbar: '',
            text: '',
            color: ''
        }
    },
    methods: {
        splitChar(text) {
            if (text) {
                return text.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            } else {
                return 0;
            }
        },
        setBestvariant() {
            var variant = this.product.availableVariants.find(el => el.id == this.changeVariant)
            this.$store.commit("set_bestVariant", variant);
        },

        addToCard() {
            if (!this.$cookies.get('customer_token')) {
                this.$router.push('/register')
            }
            else{
                this.addToCardReq()
            }
        },
        addToCardReq() {
            this.loading = true
            axios({
                method: 'post',
                url: process.env.apiUrl + 'cart/client/',
                headers: {
                    Authorization: "Bearer " + this.$cookies.get("customer_token"),
                },
                data: {
                    variant: this.variantId
                }
            })
                .then(response => {
                    this.$store.dispatch('set_meCustomer')
                    this.snackbar = true
                    this.text = 'با موفقیت به سبد خرید اضافه شد'
                    this.color = 'success'
                    this.loading = false
                    this.$router.push('/order')
                    setTimeout(() => {
                        this.snackbar = false
                    }, 4000);
                })
                .catch(err => {
                    this.loading = false
                    this.snackbar = true
                    this.text = 'به مشکلی بر خوردیم'
                    this.color = 'success'
                    setTimeout(() => {
                        this.snackbar = false
                    }, 4000);
                })
        }
    },
    computed: {
        bestVariant() {
            return this.$store.getters['get_bestVariant']
        },

        variantId() {
            try {
                return this.bestVariant.id
            } catch (error) {
                return ''
            }
        },

        variantPrice() {
            try {
                return this.bestVariant.price
            } catch (error) {
                return ''
            }
        },
        variantPriceWithDiscount() {
            try {
                var price = (this.bestVariant.price + this.product.discountPercent) / 100
                return this.bestVariant.price - price.toFixed(0)
            } catch (error) {
                return ''
            }
        },
        variants() {
            try {
                var variants = []
                this.product.availableVariants.forEach(element => {
                    var form = { text: element.weight, value: element.id }
                    variants.push(form)
                });
                return variants
            } catch (error) {
                return []
            }
        }
    }
}
</script>