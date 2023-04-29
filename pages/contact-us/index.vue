<template>
    <div class="main-container">

        <v-row justify="center" class="mt-15">
            <v-col cols="6">
                <div class="mt-5">
                    <div class="ma-0">
                        <div class="px-5 py-2">
                            <span class="t16400 Arsenic--text">موضوع</span>
                        </div>
                        <v-text-field color="black" class="border-r-15" placeholder="موضوع" background-color="WhiteSmoke"
                            outlined></v-text-field>
                    </div>
                    <div class="ma-0">
                        <div class="px-5 py-2">
                            <span class="t16400 Arsenic--text">آدرس ایمیل</span>
                        </div>
                        <v-text-field color="black" class="border-r-15" placeholder="ایمیل" background-color="WhiteSmoke"
                            outlined></v-text-field>
                    </div>
                    <div>
                        <div class="px-5 py-2">
                            <span class="t16400 Arsenic--text">پیام</span>
                        </div>
                        <v-textarea color="black" class="border-r-15" placeholder="چطوری میتونم کمکت کنم؟"
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
                    <v-card outlined class="br-15 mt-3" v-for="branche in brancheShow" :key="branche.id">
                        <div class="pt-4 pr-4">
                            <span class="t14600">
                                {{ branche.name }}
                            </span>
                        </div>
                        <div class="pt-4 pr-4 d-flex">
                            <span>
                                <v-img class="mt-1 ml-2" width="15" height="15"
                                    :src="require('~/assets/img/map-pin.svg')"></v-img>
                            </span>
                            <span class="t14400">
                                {{ branche.address }}
                            </span>
                        </div>
                        <div class="mb-4 pt-3 pr-4 d-flex">
                            <span>
                                <v-img class="mt-1 ml-2" width="15" height="15"
                                    :src="require('~/assets/img/phone.svg')"></v-img>
                            </span>
                            <span class="t14400">
                                ۰۹۳۰۰۱۷۹۶۴۸
                            </span>
                        </div>
                    </v-card>

                </div>
                <v-row justify="end" class="mt-4">
                    <v-col cols="5">
                        <v-btn v-if="brancheShow.length == 3" block outlined color="Black" dark rounded="xl" @click="loadBranche()">
                            <span class="t12400">
                                بیشتر
                            </span>
                        </v-btn>
                        <v-btn v-if="brancheShow.length > 3" block outlined color="Black" dark rounded="xl" @click="minBranche()">
                            <span class="t12400">
                                کمتر
                            </span>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

    </div>
</template>

<script>


export default {
    layout: 'headerBlack',
    data() {
        return {
            brancheShow: []
        }
    },
    beforeMount() {
        this.$store.dispatch('set_braches')
    },

    computed: {
        branches() {
            try {
                return this.$store.getters['get_braches']
            } catch (error) {
                return []
            }
        }
    },

    watch: {
        branches(val) {
            this.brancheShow = val.slice(0, 3)
        }
    },

    methods:{
        loadBranche(){
            this.brancheShow = this.branches
        },
        minBranche(){
            this.brancheShow = this.branches.slice(0, 3)
        }
    }

}
</script>