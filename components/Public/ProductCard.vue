<template>
    <v-row justify="center">
        <v-card class="br-10" height="369" width="239" outlined>
            <v-img height="235" :src="productImageCover" class="br-10"></v-img>
            <div class="mt--5 text-center">
                <v-chip color="collectionGray" class="pa-2 px-4 plp-colection" v-if="collectionName">
                    <span class="t1440">
                        {{ collectionName }}
                    </span>
                </v-chip>

            </div>
            <div :class="!collectionName ? ' text-center mt-10' : ' text-center mt-2'">
                <span class="Arsenic--text t14400">
                    {{ productName }}
                </span>

            </div>
            <div :class="!collectionName ? ' text-center mt-1' : ' text-center mt-1'">
                <span class="t12400" v-if="productDiscountPercent">
                    <span class="t10400 text-decoration-line-through">
                        {{ splitChar(withOutDiscountprice) }}
                    </span>
                    <v-avatar color="accent" size="22">
                        <span class="t10400 white--text pa-5">{{ productDiscountPercent }}%</span>
                    </v-avatar>

                </span>

            </div>

            <div class="text-center " :class="!productDiscountPercent ? 'mt-5 mb-5' : ' mb-2 mt-1'">
                <span class=" dana-fa t18600 Gunmetal--text" v-if="price > 0">
                    {{ splitChar(price) }}
                    <span class="t16400 Gunmetal--text">
                        تومان
                    </span>
                </span>
                <span class="t18600 Gray--text" v-else>
                    ناموجود
                </span>
            </div>
            <div class="d-flex justify-center">
                <v-btn :to="'/product/' + product.url" width="161" height="37" color="Black" class="rounded-xl"
                    elevation="2">
                    <span class="t12400 white--text">مشاهده کالا</span>
                </v-btn>

            </div>
        </v-card>

    </v-row>
</template>

<script>

export default {
    props: {
        product: ''
    },

    methods: {
        splitChar(text) {
            if (text) {
                return text.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            } else {
                return 0;
            }
        },
    },

    computed: {

        collectionName() {
            try {
                return this.product.collections[0].name
            } catch (error) {
                return ''
            }
        },
        productName() {
            try {
                return this.product.name
            } catch (error) {
                return ''
            }
        },
        productDiscountPercent() {
            try {
                return this.product.discountPercent
            } catch (error) {
                return ''
            }
        },

        withOutDiscountprice() {
            try {
                return this.product.bestVariant.price

            } catch (error) {
                return ''
            }
        },
        price() {
            try {
                if (this.productDiscountPercent) {
                    var price = (this.product.bestVariant.price * this.productDiscountPercent) / 100
                    return this.product.bestVariant.price - price.toFixed(0)
                }
                else {
                    return this.product.bestVariant.price
                }

            } catch (error) {
                return ''
            }
        },

        productImageCover() {
            try {
                return process.env.baseUrl + '/media/' + this.product.imageCover.imageThumbnail.medium
            } catch (error) {
                return ''
            }
        }
    }
}
</script>

<style  scoped>
.on-hover{
    background-color: rgba(#FFF, 0.8);
    cursor: pointer;
}
</style>
