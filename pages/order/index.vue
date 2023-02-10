<template>
    <div>
        <v-row justify="center" align="center">
            <v-col cols="8">
                <v-row justify="center mt-10">
                    <v-col cols="7">
                        <OrderDetail v-if="orderStep == 1" />
                        <OrderUserInfo v-if="orderStep == 2" />
                        <OrderDelivery v-if="orderStep == 3" />
                        <OrderBranche v-if="orderStep == 4" />
                        <OrderAddress v-if="orderStep == 5" />

                    </v-col>
                    <v-col cols="5">
                        <OrderPrice />
                    </v-col>
                </v-row>
            </v-col>

        </v-row>

    </div>
</template>

<script>

import OrderDetail from '~/components/Order/OrderDetail.vue'
import OrderPrice from '~/components/Order/OrderPrice.vue'
import OrderDelivery from '~/components/Order/OrderDelivery.vue'
import OrderUserInfo from '~/components/Order/OrderUserInfo.vue'
import OrderBranche from '~/components/Order/OrderBranche.vue'
import OrderAddress from '~/components/Order/OrderAddress.vue'
import ModalAddAddres from '~/components/Address/ModalAddAddres.vue'
import { computed } from 'vue'
export default {
    layout:'headerBlack',
    components: {
        OrderDetail,
        OrderUserInfo,
        OrderPrice,
        OrderDelivery,
        OrderBranche,
        OrderAddress,
        ModalAddAddres
    },

    computed: {
        orderStep() {
            return this.$store.getters['get_orderStep']
        }
    },

    mounted() {
        if (sessionStorage.getItem('orderStep')) {
            this.$store.commit('set_orderStep', sessionStorage.getItem('orderStep'))
        }
        else{
             this.$store.commit('set_orderStep', 1)
        }
    }
}
</script>