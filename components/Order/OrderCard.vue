<template>
    <v-col cols="12">
        <v-divider></v-divider>
        <v-row class="my-5">
            <v-col cols="3">
                <v-img height="92" width="92" class="rounded-lg mr-6" :src="imageCover"></v-img>
            </v-col>
            <v-col cols="9">
                <div>
                        <span class="t14600 Black--text">
                            {{ productName }}
                        </span>
                        <v-chip class="px-5 ma-2" v-if="collectionName">
                            <span class="t10400"> {{ collectionName }}</span>
                        </v-chip>
                    </div>

                <v-row justify="space-between" :class="collectionName ? 'mt-1' : 'mt-5'">

                    <div>
                        <v-chip class="mt-2 ml-2 " outlined pill>
                            <span class="dana-fa"> {{ weight }} گرم</span>
                        </v-chip>

                    </div>
                    <div class="ml-10 mt-6">
                        <span class="t18600 Black--text dana-fa">
                            {{ splitChar(variantPirce) }}
                        </span>
                        <span class="16400 Black--text">
                            تومان
                        </span>
                    </div>
                </v-row>
            </v-col>

        </v-row>

    </v-col>
</template>
<script>
import axios from 'axios'
export default {
    props: {
        card: ''
    },

    methods: {
        splitChar(text) {
            if (text) {
                return text.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            } else {
                return 0;
            }
        },

        deleteCart() {
            axios({
                method: "delete",
                url: process.env.apiUrl + "cart/client/",
                headers: {
                    Authorization: "Bearer " + this.$cookies.get("customer_token"),
                },
                data: {
                    variant: this.variant.id,
                },
            })
                .then((response) => {
                    this.$store.dispatch('set_meCustomer')
                })
                .catch((err) => {

                });
        }

    },

    computed: {
        variant() {
            try {
                return this.card.variant
            } catch (error) {
                return ''
            }
        },

        weight() {
            try {
                return this.variant.weight
            } catch (error) {
                return ''
            }
        },

        variantPirce() {
            return this.variant.price
        },

        productName() {
            try {
                return this.variant.product.name
            } catch (error) {
                return ''
            }
        },

        imageCover() {
            try {
                return process.env.baseUrl + '/media/' + this.variant.product.imageCover.imageThumbnail.medium
            } catch (error) {
                return ''
            }
        },

        collectionName() {
            try {
                return this.variant.product.collections[0].name
            } catch (error) {
                return ''
            }
        }

    }
}
</script>

