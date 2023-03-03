<template>
    <div class="mt-5">
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
                            <div class="box-delivery border-r-15 py-3 mt-3" v-for="(address ) in userAddress" :key="address.id">
                                <v-row justify="center" align="center">
                                    <v-col cols="10">
                                        <p class="t14400 Arsenic--text ma-3 my-4 text-right">
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
                            <ModalAddAddres />
                        </v-row>
                    </v-col>
                </v-row>
            </v-col>

        </v-row>

    </div>
</template>

<script>
import UserProfileNavigation from '~/components/UserProfile/UserProfileNavigation.vue'
import ModalAddAddres from '~/components/Address/ModalAddAddres.vue'
export default {
    components: {
        UserProfileNavigation,
        ModalAddAddres
    },

    computed:{
        userAddress(){
            try {
                return this.$store.getters['get_meCustomer'].client.addresses
            } catch (error) {
                return []
            }
        }
    },  


    mounted(){
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