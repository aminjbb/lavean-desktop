<template>
    <v-card rounded="lg" height="369">
        <v-img height="253" :src="productImageCover" class="border-r-15"></v-img>
        <div class=" mt-5 text-center">
            <span class="Arsenic--text t14400">
                {{ productName }}
            </span>
        </div>
        <v-card-text>
            <div class="text-center">
                <span class="t18600 Gunmetal--text" v-if="price > 0" >
                    {{ splitChar(price) }}
                    <span class="t16400 Gunmetal--text">
                        تومان
                    </span>
                </span>
                <span class="t18600 Gray--text" v-else>
                    ناموجود
                </span>
            </div>

        </v-card-text>
        <div class="d-flex justify-center">
            <v-btn :to="'/product/' + product.url" width="161" height="37" color="Black" class="rounded-xl" elevation="2">
                <span class="t12400 white--text">مشاهده کالا</span>
            </v-btn>
          
        </div>
    </v-card>

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

        productName() {
            try {
                return this.product.name
            } catch (error) {
                return ''
            }
        },

        price() {
            try {
                return this.product.bestVariant.price
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