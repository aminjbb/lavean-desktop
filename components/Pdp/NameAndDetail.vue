<template>
    <v-row class="ma-5">
        <v-col cols="6">
            <div>
                <div class="mt-5">
                    <span class="t18600">
                        انگشتر ثمین مستطیل سبز
                    </span>
                </div>
                <div class="mt-5 mb-4">
                    <v-chip class="pa-2 px-4 ">
                        <span class="t1440">
                            کالکشن اردیبهشت
                        </span>
                    </v-chip>
                </div>
            
            </div>
        </v-col>

        <v-col cols="5">
            <v-row justify="center" align="center">
                <v-col cols="4" >
                    <div class="mt-2">
                        <v-img width="64" :src="require('~/assets/img/cardPdp.svg')"></v-img>
                    </div>
                    <div class="text-center mt-3">
                        <span class="t12400 " >
                            پرداخت امن
                        </span>
                    </div>
                </v-col>
                <v-col cols="4" >
                    <div>
                        <v-img width="62" :src="require('~/assets/img/packeagePdp.svg')"></v-img>
                    </div>
                    <div class="text-center">
                        <span class="t12400">
                            پرداخت امن
                        </span>
                    </div>
                </v-col>
                <v-col cols="4" >
                    <div>
                        <v-img width="64" :src="require('~/assets/img/starPdp.svg')"></v-img>
                    </div>
                    <div class="text-center">
                        <span class="t12400">
                            پرداخت امن
                        </span>
                    </div>
                </v-col>
            </v-row>
        </v-col>

    </v-row>
</template>
    
<script>
export default {
    data() {
        return {
            items: []
        }
    }
}
</script>