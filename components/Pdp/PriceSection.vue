<template>
    <div>
        <v-col cols="11">
            <div class="d-flex ">
                <div class="mt-2">
                    <span class="ml-3">
                        وزن
                    </span>
                </div>
                <div class="w-100">
                    <v-select class="rounded-lg border_gray " v-model="changeVariant" background-color="white"
                        @change="setBestvariant()" :disabled="!bestVariant" :items="variants" dense label="وزن"
                        outlined></v-select>
                </div>

            </div>

        </v-col>
        <v-col cols="11">
            <v-card outlined rounded="lg" min-height="80" max-height="174" min-width="351" v-if="bestVariant">

                <v-row justify="space-between" align="center" class="mt-6 mx-8" v-if="bestVariant">
                    <span class="t12400">
                        تخفیف
                        <v-avatar color="accent" size="22">
                            <span class="t10400 white--text pa-5">10%</span>
                        </v-avatar>

                    </span>
                    <span class="t22600 dana-fa">
                        {{ splitChar(variantPriceWithDiscount) }} <span class="t18400">تومان</span>
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
            </v-card>
            <v-card outlined rounded="lg" min-height="80" max-height="174" min-width="351">

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
            </v-card>


        </v-col>

        <v-row justify="end">
            <v-col cols="4" class="mt-3 ">
                <v-btn dark color="Black" rounded="xl" min-width="207" v-if="bestVariant">
                    <span class="t12400">اضافه کردن به سبد خرید</span>
                </v-btn>
                <v-btn dark color="Black" rounded="xl" min-width="207" v-else>
                    <span class="t12400">بازدید از فروشگاه</span>
                </v-btn>
            </v-col>
        </v-row>

    </div>
</template>

<script>
export default {
    props: {
        product: ''
    },
    data() {
        return {
            changeVariant: ''
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
        }
    },
    computed: {
        bestVariant() {
            return this.$store.getters['get_bestVariant']
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