<template>
    <header>
        <v-container>
            <v-row justify="space-between" class="pt-5">
                <v-card outlined rounded="xl" height="45" width="298">
                    <v-img  width="30"  height="30" class="clock-img absolute"
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
                <div justify="end">
                    <a href="/">
                        <v-img  width="200" height="48" :src="require('~/assets/img/lavinLogoMain.png')"></v-img>
                    </a>
                </div>
                <div>
                    <v-row justify="space-between" class="mt-1">
                        <div class="ml-15 mt-1"> <v-img width="30" height="30"
                                :src="require('~/assets/img/search.svg')"></v-img>
                        </div>
                        <div class="d-flex">
                            <v-img width="29" height="36" :src="require('~/assets/img/card.svg')"></v-img>
                            <v-img class="mt-1 mr-3" width="28" height="28"
                                :src="require('~/assets/img/userProfile.svg')"></v-img>
                        </div>

                    </v-row>
                </div>

            </v-row>
        </v-container>
        <v-divider class="mt-2"></v-divider>
        <div class="position__absolute zindex-2">
            <v-btn-toggle class="mb-1" group>
                <v-btn to="/products" text class="d-flex align-center pb-0 mb-0" large>
                    <span class="t14400 Black--text"> فروشگاه</span>
                </v-btn>

                <v-btn text class="d-flex align-centerpb-0 mb-0"  exact large>
                    <span class="t14400 Black--text"> لاوین مگ </span>
                </v-btn>

                <v-btn text class="d-flex align-center pb-0 mb-0" to="/about-us" large>
                    <span class="t14400 Black--text"> درباره ما </span>
                </v-btn>
                <v-btn text class="d-flex align-center pb-0 mb-0" to="/contact-us" large>
                    <span class="t14400 Black--text"> تماس با ما </span>
                </v-btn>

            </v-btn-toggle>
        </div>
    </header>
</template>
<script>
export default {

}
</script>