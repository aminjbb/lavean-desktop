<template>
    <v-row class="ma-5">
        <v-col cols="6">
            <div>
                <div class="mt-5">
                    <span class="t18600">
                        {{ productName }}
                    </span>
                </div>
                <div class="mt-5 mb-4">
                    <v-chip class="pa-2 px-4 " v-if="collectionName">
                        <span class="t1440">
                            {{ collectionName }}
                        </span>
                    </v-chip>
                </div>

            </div>
        </v-col>

        <v-col cols="5">
            <v-row justify="center" align="center">
                <v-col cols="4">
                    <v-row justify="center" class="mt-2">
                        <!-- <div>
                            <span class="t12400 mr-1">
                                پرداخت امن
                            </span>
                        </div> -->

                        <div><v-img width="64" :src="require('~/assets/img/cardPdp.svg')"></v-img></div>
                    </v-row>

                </v-col>
                <v-col cols="4">
                    <v-row justify="center" class="mt-2">
                        <div> <v-img width="62" :src="require('~/assets/img/packeagePdp.svg')"></v-img>

                        </div>
                    </v-row>

                </v-col>
                <v-col cols="4">
                    <v-row justify="center" align="center" class="mt-2">
                        <div> <v-img width="64" :src="require('~/assets/img/starPdp.svg')"></v-img>

                        </div>
                    </v-row>
                </v-col>
            </v-row>
            <v-row justify="center" align="center">
                <v-col cols="4">
                    <v-row justify="center" class="mt-2">
                        <!-- <div>
                            <span class="t12400 mr-1">
                                پرداخت امن
                            </span>
                        </div> -->

                        <div> <span class="t12400 mr-1">
                                پرداخت امن
                            </span></div>
                    </v-row>

                </v-col>
                <v-col cols="4">
                    <v-row justify="center" class="mt-2">
                        <div> <span class="t12400 mr-1">
                            ارسال رایگان
                            </span>
                        </div>
                    </v-row>

                </v-col>
                <v-col cols="4">
                    <v-row justify="center" align="center" class="mt-2">
                        <div> <span class="t12400 mr-1">
                            تضمین اصالت کالا
                            </span>
                        </div>
                    </v-row>
                </v-col>
            </v-row>
        </v-col>

    </v-row>
</template>
    
<script>
export default {
    props: {
        product: ''
    },
    data() {
        return {
            items: []
        }
    },

    computed: {
        productName() {
            try {
                return this.product.name
            } catch (error) {
                return ''
            }
        },

        collectionName() {
            try {
                return this.product.collection.name
            } catch (error) {
                return ''
            }
        }
    }
}
</script>