<template>
    <div class="mt-15 pt-10 ">
        <v-row justify="center" align="center">
            <v-col cols="8">
                <v-row justify="center">
                    <v-col cols="4">
                        <UserProfileNavigation />

                    </v-col>
                    <v-col cols="8">
                        <div class="container-avatar ma-auto mt-12">
                            <v-row class="order-user-info">
                                <v-col cols="6" class="box-h">
                                    <div class="pa-5">
                                        <span class="t14600 Gray02--text">نام و نام خانوادگی</span>
                                    </div>
                                    <v-card class="border-r-15 d-flex align-center px-5 mx-4" outlined min-height="55"
                                        v-if="!editName">
                                        <v-row justify="space-between" class="px-3">
                                            <span class="t14400">{{ userFirstName }}</span>
                                            <v-icon @click="editName = true">mdi-square-edit-outline</v-icon>
                                        </v-row>

                                    </v-card>
                                    <div class="px-4" v-else-if="editName">
                                        <v-text-field color="Black" v-model="name"
                                            @click:append="sendData({ first_name: name }, 'user/client/me/user/')"
                                            append-icon="mdi-check-circle-outline" @blur="editName = false"
                                            placeholder="نام و نام خانوادگی" background-color="WhiteSmoke" outlined
                                            class="border-r-15"></v-text-field>
                                    </div>
                                </v-col>
                                <v-col cols="6" class="box-h">
                                    <div class="pa-5">
                                        <span class="t14600 Gray02--text">جنسیت</span>
                                    </div>
                                    <v-card class="border-r-15 d-flex align-center px-5 mx-4" outlined min-height="55"
                                        v-if="!editSex">
                                        <v-row justify="space-between" class="px-3">
                                            <span class="t14400" v-if="userSex == 'MALE'">مرد</span>
                                            <span class="t14400" v-else>زن</span>
                                            <v-icon @click="editSex = true">mdi-square-edit-outline</v-icon>
                                        </v-row>

                                    </v-card>
                                    <div class="px-4" v-else-if="editSex">
                                        <v-select color="Black" v-model="sex" :items="sexItem"
                                            @click:append="sendData({ sex: sex }, 'customer/client/me/')"
                                            append-icon="mdi-check-circle-outline" @blur="editSex = false"
                                            placeholder="جنسیت" background-color="WhiteSmoke" outlined
                                            class="border-r-15"></v-select>
                                    </div>

                                </v-col>
                                <v-col cols="6" class="box-h">
                                    <div class="pa-5">
                                        <span class="t14600 Gray02--text">کد ملی</span>
                                    </div>
                                    <v-card class="border-r-15 d-flex align-center px-5 mx-4" outlined min-height="55"
                                        v-if="!editNationalCode">
                                        <v-row justify="space-between" class="px-3">
                                            <span class="t14400">{{ userNationalCode }}</span>
                                            <v-icon @click="editNationalCode = true">mdi-square-edit-outline</v-icon>
                                        </v-row>
                                    </v-card>
                                    <div class="px-4" v-else-if="editNationalCode">
                                        <v-text-field color="Black" v-model="nationalCode"
                                            @click:append="sendData({ national_code: nationalCode }, 'customer/client/me/')"
                                            append-icon="mdi-check-circle-outline" @blur="editNationalCode = false"
                                            placeholder="کد ملی" background-color="WhiteSmoke" outlined
                                            class="border-r-15"></v-text-field>
                                    </div>


                                </v-col>
                                <v-col cols="6" class="box-h">
                                    <div class="pa-5">
                                        <span class="t14600 Gray02--text">شماره موبایل</span>
                                    </div>
                                    <v-card class="border-r-15 d-flex align-center px-5 mx-4" outlined min-height="55"
                                        v-if="!editMobile">
                                        <v-row justify="space-between" class="px-3">
                                            <span class="t14400">{{ userMobile }}</span>
                                            <v-icon @click="editMobile = true">mdi-square-edit-outline</v-icon>
                                        </v-row>
                                    </v-card>
                                    <div class="px-4" v-else-if="editMobile">
                                        <v-text-field color="Black" v-model="mobile" @click:append="editMobile = false"
                                            append-icon="mdi-check-circle-outline" @blur="editMobile = false"
                                            placeholder="شماره موبایل" background-color="WhiteSmoke" outlined
                                            class="border-r-15"></v-text-field>
                                    </div>


                                </v-col>
                                <v-col cols="6" class="box-h">
                                    <div class="pa-5">
                                        <span class="t14600 Gray02--text">تاریخ تولد</span>
                                    </div>
                                    <v-card class="border-r-15 d-flex align-center px-5 mx-4" outlined min-height="55"
                                        v-if="!editBirthdate">
                                        <v-row justify="space-between" class="px-3">
                                            <span class="t14400">{{ userBirthdate }}</span>
                                            <v-icon @click="editBirthdate = true">mdi-square-edit-outline</v-icon>
                                        </v-row>
                                    </v-card>
                                    <div class="px-4" v-else-if="editBirthdate">
                                        <v-text-field color="Black" v-model="birthdate"
                                            @click:append="sendData({ first_name: name }, 'user/client/me/user/')"
                                            append-icon="mdi-check-circle-outline" placeholder="تاریخ تولد"
                                            background-color="WhiteSmoke" outlined class="border-r-15"
                                            id="birthdate"></v-text-field>
                                        <client-only>
                                            <date-picker v-if="datePicker" v-model="birthdate" range format="jYYYY-jMM-jDD"
                                                custom-input="#birthdate" />
                                        </client-only>

                                    </div>


                                </v-col>
                                <v-col cols="6" class="box-h">
                                    <div class="pa-5">
                                        <span class="t14600 Gray02--text">ایمیل</span>
                                    </div>
                                    <v-card class="border-r-15 d-flex align-center px-5 mx-4" outlined min-height="55"
                                        v-if="!editEmail">
                                        <v-row justify="space-between" class="px-3">
                                            <span class="t14400">{{ userEmail }}</span>
                                            <v-icon @click="editEmail = true">mdi-square-edit-outline</v-icon>
                                        </v-row>
                                    </v-card>
                                    <div class="px-4" v-else-if="editEmail">
                                        <v-text-field color="Black" v-model="email"
                                            @click:append="sendData({ email: email }, 'user/client/me/user/')"
                                            append-icon="mdi-check-circle-outline" @blur="editEmail = false"
                                            placeholder="ایمیل" background-color="WhiteSmoke" outlined
                                            class="border-r-15"></v-text-field>
                                    </div>


                                </v-col>
                            </v-row>
                        </div>

                        <v-card outlined min-height="129" class="mt-5 border-r-15 pa-5 mx-4 mt-15 px-10">
                            <p class="t12400">محرمانگی اطلاعات مشتری</p>
                            <p class="t12400">
                                داده‌های شخصی‌ای که فراهم می‌کنید برای پاسخ دادن به سوالات، پردازش سفارشات یا صدور اجازه
                                دسترسی به اطلاعات خاص مورد استفاده قرار می‌گیرد. شما می‌توانید تمام اطلاعات شخصی که در
                                صفحه «حساب‌کاربری من» وجود دارد را ویرایش یا حذف کنید.</p>

                        </v-card>
                    </v-col>
                </v-row>
            </v-col>

        </v-row>

    </div>
</template>

<script>
import UserProfileNavigation from '~/components/UserProfile/UserProfileNavigation.vue'

import { AxiosMethods } from "~/store/classes"
export default {
    layout: 'headerBlack',
    components: {
        UserProfileNavigation,
    },
    data() {
        return {
            editName: false,
            editSex: false,
            editNationalCode: false,
            editMobile: false,
            editEmail: false,
            editBirthdate: false,
            axiosMethods: new AxiosMethods([], ''),
            name: '',
            sex: '',
            nationalCode: '',
            mobile: '',
            birthdate: '',
            email: '',
            sexItem: [{
                text: 'مرد',
                value: 'Male'
            },
            {
                text: 'زن',
                value: 'Female'
            }
            ]
        }
    },

    methods: {

        jalaliToGregorian(j_y, j_m, j_d) {
            var JalaliDate = {
                g_days_in_month: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                j_days_in_month: [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29]
            };
            j_y = parseInt(j_y);
            j_m = parseInt(j_m);
            j_d = parseInt(j_d);
            var jy = j_y - 979;
            var jm = j_m - 1;
            var jd = j_d - 1;

            var j_day_no = 365 * jy + parseInt(jy / 33) * 8 + parseInt((jy % 33 + 3) / 4);
            for (var i = 0; i < jm; ++i) j_day_no += JalaliDate.j_days_in_month[i];

            j_day_no += jd;

            var g_day_no = j_day_no + 79;

            var gy = 1600 + 400 * parseInt(g_day_no / 146097); /* 146097 = 365*400 + 400/4 - 400/100 + 400/400 */
            g_day_no = g_day_no % 146097;

            var leap = true;
            if (g_day_no >= 36525) /* 36525 = 365*100 + 100/4 */ {
                g_day_no--;
                gy += 100 * parseInt(g_day_no / 36524); /* 36524 = 365*100 + 100/4 - 100/100 */
                g_day_no = g_day_no % 36524;

                if (g_day_no >= 365) g_day_no++;
                else leap = false;
            }

            gy += 4 * parseInt(g_day_no / 1461); /* 1461 = 365*4 + 4/4 */
            g_day_no %= 1461;

            if (g_day_no >= 366) {
                leap = false;

                g_day_no--;
                gy += parseInt(g_day_no / 365);
                g_day_no = g_day_no % 365;
            }

            for (var i = 0; g_day_no >= JalaliDate.g_days_in_month[i] + (i == 1 && leap); i++)
                g_day_no -= JalaliDate.g_days_in_month[i] + (i == 1 && leap);
            var gm = i + 1;
            var gd = g_day_no + 1;

            gm = gm < 10 ? "0" + gm : gm;
            gd = gd < 10 ? "0" + gd : gd;
            return gy + '-' + gm + '-' + gd
            // return [gy, gm, gd];
        },

        isTextTrue(edit) {
            this.edit = edit
            this.isText = true
        },
        isTextFalse() {
            this.edit = ''
            this.isText = false
        },
        sendData(query, endPoint) {
            this.axiosMethods.method = 'put'
            this.axiosMethods.query = query
            this.axiosMethods.endpoint = endPoint
            this.axiosMethods.sendDate(function (response) {
            })
            this.editName = false
            this.editSex = false
            this.editNationalCode = false
            this.editMobile = false
            this.editEmail = false
            this.editBirthdate = false
            this.$store.dispatch('set_meCustomer')

        }
    },

    beforeMount() {
        if (this.$cookies.get('customer_token')) {
            this.$store.dispatch('set_meCustomer')
        }
        else {
            this.$router.push('/')
        }
    },

    computed: {
        datePicker() {
            if (process.client) {
                return () => import('vue-persian-datetime-picker')
            }
        },
        userInfo() {
            return this.$store.getters['get_meCustomer']
        },
        userFirstName() {
            try {
                return this.userInfo.client.user.firstName
            } catch (error) {
                return ''
            }
        },
        userSex() {
            try {
                return this.userInfo.sex
            } catch (error) {
                return ''
            }
        },
        userNationalCode() {
            try {
                return this.userInfo.nationalCode
            } catch (error) {
                return ''
            }
        },
        userMobile() {
            try {
                return this.userInfo.client.mobile
            } catch (error) {
                return ''
            }
        },
        userBirthdate() {
            try {
                return this.userInfo.birthdate
            } catch (error) {
                return ''
            }
        },
        userEmail() {
            try {
                return this.userInfo.client.user.email
            } catch (error) {
                return ''
            }
        }
    }
}
</script>