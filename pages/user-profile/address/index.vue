<template>
    <div class="mt-15 pt-10 ">
        <v-row justify="center" align="center">
            <v-col cols="8">
                <v-row justify="center">
                    <v-col cols="4">
                        <UserProfileNavigation />

                    </v-col>
                    <v-col cols="8">
                        <div class="container-avatar ma-auto mt-15">
                            <div class="ma-4">
                                <span class="t14600 Black--text">
                                    آدرس ها
                                </span>
                            </div>
                            <div class="box-delivery border-r-15 py-3 mt-3 position__relative"
                                v-for="(address ) in userAddress" :key="address.id">
                                <v-row justify="center" align="center">
                                    <v-col cols="10">
                                        <span class="position__absolute" style="right: 10px;top: 30px;">
                                            <img src="~/assets/img/map-pin.svg" alt="">
                                        </span>
                                        <p class="t14400 Arsenic--text ma-3 my-4 ">
                                            {{ address.addressDetail }}
                                        </p>
                                    </v-col>
                                    <v-col cols="1  ">
                                        <v-icon>mdi-square-edit-outline</v-icon>
                                    </v-col>
                                </v-row>

                            </div>

                        </div>

                        <v-row justify="end" class="pa-5 pl-8">
                            <v-col cols="4">
                                <v-btn block color="Black" dark rounded="xl" @click="openMapAddress()">
                                    <span class="t12400">
                                        اضافه کردن آدرس جدید
                                    </span>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-col>

        </v-row>
        <ModalAddAddres />
        <ModalMapuserAddress/>
    </div>
</template>

<script>
import UserProfileNavigation from '~/components/UserProfile/UserProfileNavigation.vue'
import ModalAddAddres from '~/components/Address/ModalAddAddres.vue'
import ModalMapuserAddress from '~/components/Address/ModalMapuserAddress.vue'
export default {
    layout: 'headerBlack',
    components: {
        UserProfileNavigation,
        ModalAddAddres,
        ModalMapuserAddress
    },

    computed: {
        userAddress() {
            try {
                return this.$store.getters['get_meCustomer'].client.addresses
            } catch (error) {
                return []
            }
        }
    },

    methods:{
        openMapAddress(){
            this.$store.commit('public/set_addressMapModal' , true)
        }
    },


    mounted() {
        if (this.$cookies.get('customer_token')) {
            this.$store.dispatch('set_meCustomer')
            this.$store.dispatch('public/set_provinces')
        }
        else {
            this.$router.push('/')
        }

    }
}
</script>