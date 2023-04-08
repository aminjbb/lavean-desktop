<template>
    <v-container>
        <div class="height-vh-90 d-flex align-center" justify="end" align="center">
            <v-card outlined color="Cultured" max-height="376" max-width="392" min-height="376" min-width="392"
                class="border-r-15 position__relative  zindex-1 mt-16">
                <div class="  pa-15">
                    <div class="text-right"> <span class="t18600 Black--text">
                            کد تایید را وارد کنید.

                        </span></div>
                    <div class="text-right"> <span class="t12400 Black--text">

                            کد تایید برای شماره موبایل {{ phone }} ارسال شد.

                        </span></div>
                     <div class="mx-auto" style="max-width: 320px; direction: ltr">
                        <v-form @submit.prevent="validate()" ref="sndCode" v-model="valid">
                            <v-otp-input color="Black" v-model="code" length="5" @finish="validate()" :rules="Rule" background-color="white"
                                class="mt-5"></v-otp-input>
                        </v-form>
                    </div>


                    <div class="mt-2 mb-5">
                        <span class="t10400 DimGray--text">ارسال مجدد کد تا {{
                            countDown
                        }} ثانیه دیگر</span>
                    </div>
                    <v-btn @click="validate()" width="207" class="px-15" color="Black" dark rounded="xl">
                        <span class="t12400">
                            ورود
                        </span>
                    </v-btn>


                    <div class="mt-5"><v-img width="70" height="16"
                            :src="require('~/assets/img/lavin-logo.png')"></v-img></div>
                </div>

            </v-card>

            <div>
                <span class="t48600 mr-5 white--text position__relative zindex-1-title-image">با لاوین، متنوع باش!</span>
                <v-row justify="end">

                    <v-img max-width="873" max-height="458" :src="require('~/assets/img/otpImage.png')"></v-img>
                </v-row>
            </div>

        </div>

    </v-container>

</template>

<script>
import axios from "axios";
export default {
    layout: "empty",
    head() {
        return {
            meta: [
                { hid: 'robots', name: 'robots', content: 'noindex' }
            ]
        }
    },
    data() {
        return {
            countDown: 120,
            phone: "",
            loading: false,
            toast: false,
            text: '',
            color: '',
            valid: true,
            resendLoading: false,
            code: "",
            Rule: [(v) => !!v || "این فیلد الزامی است"],
        };
    },

    methods: {
        convertPersianNumber(str) {
            var persianNumbers = [
                /۰/g,
                /۱/g,
                /۲/g,
                /۳/g,
                /۴/g,
                /۵/g,
                /۶/g,
                /۷/g,
                /۸/g,
                /۹/g,
            ];
            var englishnumber = [
                /0/g,
                /1/g,
                /2/g,
                /3/g,
                /4/g,
                /5/g,
                /6/g,
                /7/g,
                /8/g,
                /9/g,
            ];

            if (typeof str === "string") {
                for (var i = 0; i < 10; i++) {
                    str = str.replace(persianNumbers[i], i).replace(englishnumber[i], i);
                }
            }
            return str;
        },
        validate() {
            this.$refs.sndCode.validate();
            setTimeout(() => {
                if (this.valid) {
                    this.sendCode();
                }
            }, 100);
        },

        sendCode() {
            this.loading = true;
            axios({
                method: "post",
                url: process.env.apiUrl + "user/client/otp/",
                data: {
                    mobile: this.convertPersianNumber(this.phone),
                    code: this.code,
                },
            })
                .then((response) => {
                    this.$cookies.set("customer_token", response.data.access);
                    this.$store.commit("set_isLogin", true);
                    this.$router.push('/')
                })
                .catch((err) => {

                    if (err.response.status == 400) {
                        this.openToast('کد وارد شده صحیح نیست', 'error')
                    }
                    this.loading = false;
                });
        },

        openToast(text, color) {

            this.toast = true,
                this.text = text,
                this.color = color,


                setTimeout(() => {
                    this.closeToast();
                }, 4000);
        },

        closeToast() {

            this.toast = false
            this.text = ""
            this.color = ""

        },

        countDownTimer() {
            if (this.countDown > 0) {
                setTimeout(() => {
                    this.countDown -= 1;
                    this.countDownTimer();
                }, 1000);
            }
        },

        sendSms() {
            this.countDown = 120;
            this.countDownTimer();
            this.resendLoading = true;
            axios({
                method: "get",
                url: process.env.apiUrl + "user/client/otp",
                params: {
                    mobile: this.convertPersianNumber(this.phone),
                },
            })
                .then((response) => {
                    this.resendLoading = false;
                    this.code = "";
                })
                .catch((err) => {
                    this.resendLoading = false;
                });
        },
    },
    mounted() {
        // this.countDownTimer();
        this.phone = this.$cookies.get("registerPhone");
        this.sendSms();
    },

    destroyed() {
        localStorage.removeItem("submitSupplay");
    },
};
</script>