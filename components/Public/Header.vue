<template>
    <header>
        <v-container>
            <v-row justify="space-between" class="pt-5">
                <v-card outlined rounded="xl" height="49" width="298">
                    <v-row justify="space-between" class="pa-6 Arsenic--text">
                        <span class="t14400">
                            قیمت لحظه ای طلا
                        </span>
                        <span class="t14400">
                            ۱,۴۵۵,۸۸۸,۹۳۰ ریال
                        </span>
                    </v-row>
                </v-card>
                <div justify="end"><a href="/"><v-img width="200" height="48"
                            :src="require('~/assets/img/lavinLogoMain.png')"></v-img></a>
                </div>
                <div>
                    <v-row justify="space-between" class="mt-1">
                        <div class="ml-15 mt-1"> <v-img width="30" @click="searchBox= !searchBox" height="30"
                                :src="require('~/assets/img/search.svg')"></v-img>
                        </div>
                        <div class="d-flex">
                            <img width="29" height="36" :src="require('~/assets/img/card.svg')" />
                            <img class="mt-1 mr-4" width="28" height="28"
                                :src="require('~/assets/img/userProfile.svg')" />
                        </div>

                    </v-row>
                </div>

            </v-row>
            <v-text-field v-if="searchBox"  @click:append="searchProduct()" v-model="search" append-icon="mdi-magnify" placeholder="جست‌وجو محصولات ما " dense background-color="Cultured02" outlined
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
        </v-container>
        <v-divider class="mt-2"></v-divider>
        <div class="position__absolute zindex-2">
            <v-btn-toggle class="mb-1" group>
                <v-btn text class="d-flex align-center pb-0 mb-0" to="/products" large>
                    <span class="t14400 white--text"> فروشگاه</span>
                </v-btn>

                <v-btn text class="d-flex align-centerpb-0 mb-0" exact large>

                    <span class="t14400 white--text"> لاوین مگ </span>
                </v-btn>

                <v-btn text class="d-flex align-center pb-0 mb-0" to="/about-us" large>
                    <span class="t14400 white--text"> درباره ما </span>
                </v-btn>
                <v-btn text class="d-flex align-center pb-0 mb-0" to="/contact-us" large>
                    <span class="t14400 white--text"> تماس با ما </span>
                </v-btn>

            </v-btn-toggle>
        </div>
    </header>
</template>
<script>
export default {
    data(){
        return{
            search:'',
            searchBox:false
        }
    },
    methods:{
        searchProduct(){
            this.$router.push('/products?name=' + this.search)
        }
    }
}
</script>