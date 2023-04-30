<template>
    <div class="main-container">

        <v-row justify="center" class="mt-15">
            <v-col cols="6">
                <div class="mt-5">
                    <v-form ref="contactUs" v-model="valid">
                        <div class="ma-0">
                            <div class="px-5 py-2">
                                <span class="t16400 Arsenic--text">موضوع</span>
                            </div>
                            <v-text-field :rules="rule" v-model="form.subject" color="black" class="border-r-15"
                                placeholder="موضوع" background-color="WhiteSmoke" outlined></v-text-field>
                        </div>
                        <div class="ma-0">
                            <div class="px-5 py-2">
                                <span class="t16400 Arsenic--text">آدرس ایمیل</span>
                            </div>
                            <v-text-field :rules="rule" v-model="form.email" color="black" class="border-r-15"
                                placeholder="ایمیل" background-color="WhiteSmoke" outlined></v-text-field>
                        </div>
                        <div>
                            <div class="px-5 py-2">
                                <span class="t16400 Arsenic--text">پیام</span>
                            </div>
                            <v-textarea :rules="rule" v-model="form.message" color="black" class="border-r-15"
                                placeholder="چطوری میتونم کمکت کنم؟" background-color="WhiteSmoke" outlined></v-textarea>
                        </div>
                    </v-form>
                </div>
                <v-row justify="end">
                    <v-col cols="5">
                        <v-btn :loading="loading" @click="validate()" block color="Black" dark rounded="xl">
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
                        <v-btn v-if="brancheShow.length == 3" block outlined color="Black" dark rounded="xl"
                            @click="loadBranche()">
                            <span class="t12400">
                                بیشتر
                            </span>
                        </v-btn>
                        <v-btn v-if="brancheShow.length > 3" block outlined color="Black" dark rounded="xl"
                            @click="minBranche()">
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

import axios from 'axios'
export default {
    layout: 'headerBlack',
    data() {
        return {
            brancheShow: [],
            valid: true,
            loading: false,
            form: {
                subject: '',
                email: '',
                message: ''
            },
            rule: [(v) => !!v || "این فیلد الزامی است"],
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

    methods: {
        loadBranche() {
            this.brancheShow = this.branches
        },
        minBranche() {
            this.brancheShow = this.branches.slice(0, 3)
        },

        validate() {
            this.$refs.contactUs.validate()
            setTimeout(() => {
                if (this.valid) {
                    this.submitForm()
                }
            }, 200);
        },
        submitForm() {
            this.loading = true;
            axios({
                method: 'post',
                url: process.env.apiUrl + 'contact_us/client/',
                data: {
                    email: this.form.email,
                    subject: this.form.subject,
                    message: this.form.message,
                }
            })
                .then(response => {
                    this.loading = false;
                })
                .catch(err => {
                    this.loading = false;
                })
        }
    }

}
</script>