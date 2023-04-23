<template>
    <v-row class="my-15 py-15" justify="center">
        <div class="gift-section">
            <v-row align="center" justify="center">


                <v-col cols="5" class="position__relative">
                    <div class="gift-image-box">
                        <img src="~/assets/img/gift.png" alt="">
                    </div>
                </v-col>
                <v-col cols="7" >
                    <v-row justify="space-between" class="pa-15 mt-1">
                        <div>
                            <div>
                                <span class="t40600 white--text">
                                    با لاوین هدیه بده!
                                </span>
                            </div>
                            <div>
                                <span class="t18400 black2--text">
                                    از لاوین هدیه ارزشمند برای روز خاصت بخر
                                </span>
                                <br/>
                                <span class="t18400 black2--text">
                                     و خوشحالش کن!
                                </span>
                            </div>
                        </div>
                        <ModalGift/>
                    </v-row>
                </v-col>
            </v-row>
        </div>
    </v-row>
</template>

<script>
import ModalGift from '~/components/Home/ModalGift.vue'
export default {
    components:{
        ModalGift
    }
}
</script>