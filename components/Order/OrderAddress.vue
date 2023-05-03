<template>
    <div class="mt-2">
        <v-card outlined rounded="lg pt-3 pb-3">
            <div class="ma-4">
                <span class="position__absolute">
                    <img src="~/assets/img/map-pin.svg" alt="">
                </span>
                <span class="t14600 Black--text mr-8">
                    انتخاب آدرس ارسال
                </span>

            </div>
            <v-divider></v-divider>
            <v-radio-group v-model="address" class="px-8">
                <v-radio color="black" :value="address.id" v-for="(address ) in addresses" :key="address.id">
                    <template v-slot:label>
                        <div class="box-delivery border-r-15 py-3 text-right">
                            <span class="position__absolute" style="right: 10px;top: 30px;">
                                <img src="~/assets/img/map-pin.svg" alt="">
                            </span>
                            <p class="t14400 Arsenic--text ma-3 my-4 mr-8 ">
                                {{ address.addressDetail }}
                            </p>

                        </div>
                    </template>
                </v-radio>

            </v-radio-group>
            <v-row justify="end" class="pa-5 pl-8">
                <v-col cols="4">
                                <v-btn block color="Black" dark rounded="xl" @click="openMapAddress()">
                                    <span class="t12400">
                                        اضافه کردن آدرس جدید
                                    </span>
                                </v-btn>
                            </v-col>
            </v-row>

        </v-card>
        <ModalAddAddres />
        <ModalMapuserAddress />
    </div>
</template>

<script>
import ModalAddAddres from '~/components/Address/ModalAddAddres.vue'
import ModalMapuserAddress from '~/components/Address/ModalMapuserAddress.vue'
export default {
    data() {
        return {
            address: ''
        }
    },

    components: {
        ModalAddAddres,ModalMapuserAddress
    },
    computed: {
        user() {
            try {
                return this.$store.getters['get_meCustomer']
            } catch (error) {
                return ''
            }
        },

        addresses() {
            try {
                return this.user.client.addresses
            } catch (error) {
                return error
            }
        },
    },

    methods: {
        openMapAddress() {
            localStorage.setItem('modalMap' , 'add')
            this.$store.dispatch('public/set_provinces')
            this.$store.commit('public/set_addressMapModal', true)
        }
    }
}
</script>