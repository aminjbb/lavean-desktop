<template>
    <div>

        <v-row justify="center" align="center" class="mt-10">

            <v-col cols="8">
                <v-row justify="center">
                    <v-col cols="6">
                        <div>
                            <div class="ma-0">
                                <div class="pa-5">
                                    <span class="t16400 Arsenic--text">موضوع</span>
                                </div>
                                <v-text-field class="border-r-15" placeholder="موضوع" background-color="WhiteSmoke"
                                    outlined></v-text-field>
                            </div>
                            <div class="ma-0">
                                <div class="pa-5">
                                    <span class="t16400 Arsenic--text">آدرس ایمیل</span>
                                </div>
                                <v-text-field class="border-r-15" placeholder="ایمیل" background-color="WhiteSmoke"
                                    outlined></v-text-field>
                            </div>
                            <div>
                                <div class="pa-5">
                                    <span class="t16400 Arsenic--text">پیام</span>
                                </div>
                                <v-textarea class="border-r-15" placeholder="چطوری میتونم کمکت کنم؟"
                                    background-color="WhiteSmoke" outlined></v-textarea>
                            </div>
                        </div>
                        <v-row justify="end">
                            <v-col cols="5">
                                <v-btn block color="Black" dark rounded="xl">
                                    <span class="t12400">
                                        ارسال
                                    </span>
                                </v-btn>
                            </v-col>

                        </v-row>
                    </v-col>
                    <v-col cols="6">
                        <div class="mt-15">
                            <v-card outlined rounded="lg pt-3 pb-3">
                                <div class="pt-4 pr-4">
                                    <span class="t14600">
                                        شعبه اوپال
                                    </span>
                                </div>
                                <div  class="pt-4 pr-4 d-flex">
                                    <span>
                                        <v-img class="mt-1 ml-2" width="15" height="15" :src="require('~/assets/img/map-pin.svg')"></v-img>
                                    </span>
                                    <span class="t14400">
                                        سعادت آباد، خیابان علامه جنوبی، کوچه ۳۴ شرقی، پلاک ۲۷، واحد ۱۶
                                    </span>
                                </div>
                                <div  class="mb-4 pt-3 pr-4 d-flex" >
                                    <span>
                                        <v-img class="mt-1 ml-2" width="15" height="15" :src="require('~/assets/img/phone.svg')"></v-img>
                                    </span>
                                    <span class="t14400">
                                        ۰۹۳۰۰۱۷۹۶۴۸
                                    </span>
                                </div>
                            </v-card>
                        </div>
                    </v-col>
                </v-row>
            </v-col>

        </v-row>

    </div>
</template>

<script>


export default {
    layout: 'headerBlack',



}
</script>