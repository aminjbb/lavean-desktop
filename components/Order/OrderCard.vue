<template>
    <v-col cols="12">
        <v-divider></v-divider>
        <v-row class="my-5">
            <v-col cols="3">
                <v-img height="92" width="92" class="rounded-lg mr-6" :src="imageCover"></v-img>
            </v-col>
            <v-col cols="9">
                <div><span class="t16600 Black--text">
                        {{productName}}
                    </span>
                    <v-chip class="px-5 ma-2">
                        <span class="t14400"> {{collectionName}}</span>
                    </v-chip>
                </div>
                <v-row justify="space-between" class="mt-1">

                    <div>
                        <!-- <v-chip class="mt-2 ml-2" outlined pill>
                            رز گلد
                        </v-chip>
                        <v-chip class="mt-2 ml-2" outlined pill>
                            رز گلد
                        </v-chip> -->
                    </div>
                    <div class="ml-10 mt-6">
                        <span class="t18600 Black--text dana-fa">
                            {{variantPirce}}
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
export default {
    props:{
        card: ''
    },

    computed:{
        variant(){
            try {
                return this.card.variant
            } catch (error) {
                return ''
            }
        },

        variantPirce(){
            return this.variant.price
        },

        productName(){
            try {
                return this.variant.product.name
            } catch (error) {
                return ''
            }
        },

        imageCover(){
            try {
                return process.env.baseUrl + '/media/' + this.variant.product.imageCover.imageThumbnail.medium
            } catch (error) {
                return ''
            }
        },

        collectionName(){
            try {
                return this.variant.product.collection.name
            } catch (error) {
                return ''
            }
        }

    }
}
</script>

