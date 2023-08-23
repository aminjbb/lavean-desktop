<template>
    <header>
        <div class="main-container" style="    height: 87px;">
            <v-row justify="space-between" class="pt-10">
                <v-card outlined rounded="xl" height="45" width="298">
                    <v-img width="30" height="30" class="clock-img absolute"
                        :src="require('~/assets/img/clock.svg')"></v-img>
                    <v-row justify="space-between" class="py-6 pr-9 pl-10 Arsenic--text">
                        <span class="t12400">
                            قیمت لحظه ای طلا
                        </span>
                        <span class="t12400 dana-fa">
                            {{ splitChar(clientGoldPrice) }} ریال
                        </span>
                    </v-row>
                </v-card>
                <div class="pl-15"><a href="/"><img width="180" height="40"
                            :src="require('~/assets/img/lavinLogoMain.png')"></a>
                </div>
                <div>
                    <v-row justify="space-between" class="mt-1">
                        <div class="ml-15 mt-1">
                            <v-img width="28" @click="searchBox = !searchBox" height="28"
                                :src="require('~/assets/img/search.svg')"></v-img>
                        </div>
                        <div class="d-flex">
                            <a @click="cartModal = !cartModal">
                                <v-badge v-if="cardDetail > 0" bordered offset-x="45" offset-y="40" color="DeepCarminePink"
                                    overlap>
                                    <template v-slot:badge>
                                        <span class="dana-fa">{{ cardDetail }}</span>
                                    </template>

                                    <img class="ml-2" width="29" height="32"
                                        :src="require('~/assets/img/card.svg')" /></v-badge>

                                <img class="ml-2" width="29" height="32" :src="require('~/assets/img/card.svg')"
                                    v-else /></a>

                            <img @click="userProfileRoute()" class="mt-1 mr-4" width="28" height="28"
                                :src="require('~/assets/img/userProfile.svg')" />
                        </div>

                    </v-row>
                </div>

            </v-row>
            <v-text-field color="black" v-if="searchBox" @click:append="searchProduct()" @keyup.enter="searchProduct()"
                v-model="search" append-icon="mdi-magnify" placeholder="جست‌وجو محصولات ما " dense
                background-color="Cultured02" outlined class="position__absolute search_box-1 z-index-10"></v-text-field>
            <div class="pa-5 position__absolute card-modal-box z-index-10" v-if="cartModal"
                v-click-outside="closeCartModal">
                <v-card min-width="678" color="white" outlined class="br-15">
                    <div v-if="cartDetailsLength.length > 0">
                        <div class="ma-4 d-felx align-content-center">
                            <span class="position__absolute">
                                <img src="~/assets/img/ShoppingCartSimple.svg" alt="">
                            </span>
                            <span class="t14600 Black--text mr-8">
                                سبد خرید
                            </span>
                        </div>
                        <v-divider></v-divider>
                        <v-row>
                            <OrderCardDetail v-for="(card, index) in cartDetails" :key="index" :card="card" />
                        </v-row>
                    </div>
                    <div cols="8" v-else>
                        <v-row justify="center ">
                            <v-card outlined class="pt-3 pb-3 br-15" width="1200" height="494">
                                <div class="ma-4 d-felx align-content-center">
                                    <span class="position__absolute">
                                        <img src="~/assets/img/ShoppingCartSimple.svg" alt="">
                                    </span>
                                    <span class="t14600 Black--text mr-8">
                                        سبد خرید
                                    </span>
                                </div>
                                <v-divider></v-divider>
                                <div class="mt-10">
                                    <v-row justify="center">
                                        <v-img class="mt-10" max-width="234" max-height="200"
                                            :src="require('~/assets/img/is-null-object.svg')"></v-img>

                                    </v-row>
                                    <v-row justify="center" class="mt-6">
                                        <p class="t18600 Black--text">سبد خرید شما خالی است!</p>

                                    </v-row>
                                    <v-row justify="center" class="mt-6">
                                        <v-btn to="/products" width="207" color="Black" dark rounded="xl">
                                            <span class="t12400">
                                                بازدید از فروشگاه
                                            </span>
                                        </v-btn>

                                    </v-row>
                                </div>
                            </v-card>
                        </v-row>
                    </div>
                </v-card>
                <v-row v-if="cartDetailsLength.length > 0" justify="end" class="ma-6">
                    <v-btn @click="cartModal = false ; $router.push('/order')" width="207" color="Black" dark rounded="xl">
                        <span class="t12400">
                           مشاهده سبد خرید
                        </span>
                    </v-btn>

                </v-row>
            </div>
            <!-- <v-card class="" color="Cultured02" width="395" height="49">
                <v-row justify="center" align="center">
                    <v-col cols="11">
                       
                    </v-col>
                    <v-col cols="1">
                        <v-row justify="center" align="center">
                            <img width="28" height="28" :src="require('~/assets/img/searchBox.svg')" />
                        </v-row>
                    </v-col>
                </v-row>
            </v-card> -->
        </div>
        <v-divider class="mt-5"></v-divider>
        <div class="main-container">
            <div class="position__absolute zindex-2">
                <v-btn-toggle class="mb-1" group>
                    <v-btn active-class="headr-active" to="/products" text class="d-flex align-center pb-0 mb-0" large>
                        <span class="t14400 Black--text"> فروشگاه</span>
                    </v-btn>

                    <v-btn to="/lavean-mag" active-class="headr-active" text class="d-flex align-centerpb-0 mb-0" exact
                        large>
                        <span class="t14400 Black--text"> لاوین مگ </span>
                    </v-btn>

                    <v-btn active-class="headr-active" text class="d-flex align-center pb-0 mb-0" to="/about-us" large>
                        <span class="t14400 Black--text"> درباره ما </span>
                    </v-btn>
                    <v-btn active-class="headr-active" text class="d-flex align-center pb-0 mb-0" to="/contact-us" large>
                        <span class="t14400 Black--text"> تماس با ما </span>
                    </v-btn>

                </v-btn-toggle>
            </div>
        </div>

    </header>
</template>
<script>
import OrderCardDetail from '~/components/Order/OrderCardDetail'
export default {
    components: {
        OrderCardDetail
    },
    data() {
        return {
            search: '',
            cartModal: false,
            searchBox: false,
            cartDetailsLength: [],
        }
    },

    methods: {
        closeCartModal() {
            if (this.cartModal) {
                this.cartModal = false
            }
        },
        userProfileRoute() {
            if (this.$cookies.get('customer_token')) {
                this.$router.push('/user-profile')
            }
            else {
                this.$router.push('/register')
            }
        },
        searchProduct() {
            this.$router.push('/products?name=' + this.search)
        },
        splitChar(text) {
            if (text) {
                return text.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            } else {
                return text;
            }
        },
    },
    computed: {
        clientGoldPrice() {
            const goldPrice = this.$store.getters['get_clientGoldPrice']
            if (goldPrice == null) return '-'
            else return goldPrice.price
        },
        cartDetails() {
            try {
                return this.$store.getters['get_meCustomer'].cartDetails
            } catch (error) {
                return []
            }
        },
        customer() {
            return this.$store.getters['get_meCustomer']
        },

        cardDetail() {
            try {
                return this.customer.cartDetails.length
            } catch (error) {
                return 0
            }
        }
    },

    watch: {
        cartDetails(val) {
            this.cartDetailsLength = val
        }
    },

    mounted() {
        if (this.$cookies.get('customer_token')) {
            this.$store.dispatch('set_meCustomer')
        }
    }

}
</script>