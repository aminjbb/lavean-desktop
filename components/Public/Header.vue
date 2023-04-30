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
                        <span class="t12400">
                            ۱,۴۵۵,۸۸۸,۹۳۰ ریال
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
                            <a href="/order"> <img class="ml-2" width="29" height="32"
                                    :src="require('~/assets/img/card.svg')" /></a>

                            <img @click="userProfileRoute()" class="mt-1 mr-4" width="28" height="28"
                                :src="require('~/assets/img/userProfile.svg')" />
                        </div>

                    </v-row>
                </div>

            </v-row>
            <v-text-field v-if="searchBox" @click:append="searchProduct()" v-model="search" append-icon="mdi-magnify"
                placeholder="جست‌وجو محصولات ما " dense background-color="Cultured02" outlined
                class="position__absolute search_box z-index-10"></v-text-field>
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
                    <v-btn active-class="headr-active" text class="d-flex align-center pb-0 mb-0" to="/products" large link>
                        <span class="t14400 white--text"> فروشگاه</span>
                    </v-btn>

                    <v-btn to="/lavean-mag" active-class="headr-active" text class="d-flex align-centerpb-0 mb-0" exact large>

                        <span class="t14400 white--text"> لاوین مگ </span>
                    </v-btn>

                    <v-btn active-class="headr-active" text class="d-flex align-center pb-0 mb-0" to="/about-us" large>
                        <span class="t14400 white--text"> درباره ما </span>
                    </v-btn>
                    <v-btn active-class="headr-active" text class="d-flex align-center pb-0 mb-0" to="/contact-us" large>
                        <span class="t14400 white--text"> تماس با ما </span>
                    </v-btn>

                </v-btn-toggle>
            </div>
        </div>

    </header>
</template>
<script>
export default {
    data() {
        return {
            search: '',
            searchBox: false
        }
    },
    methods: {
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
        }
    }
}
</script>