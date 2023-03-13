<template>
    <div class="mt-5">
        <v-row justify="center" align="center">
            <v-col cols="8">
                <v-row justify="center">
                    <v-col cols="4">
                        <UserProfileNavigation />

                    </v-col>
                    <v-col cols="8">
                        <div class="container-avatar ma-auto mt-12">
                            <v-row>
                                <v-col cols="6">
                                    <div class="pa-5">
                                        <span class="t16400 Arsenic--text">نام و نام خانوادگی</span>
                                    </div>
                                    <v-card class="border-r-15 d-flex align-center px-5 mx-4" outlined min-height="55"
                                        v-if="!editName">
                                        <v-row justify="space-between" class="px-3">
                                            <span class="t14400">{{ userFirstName }}</span>
                                            <v-icon @click="editName = true">mdi-square-edit-outline</v-icon>
                                        </v-row>

                                    </v-card>
                                    <v-text-field v-model="name" @click:append="sendData({ first_name: name } , 'user/client/me/user/')"
                                        append-icon="mdi-check-circle-outline" @blur="editName = false"
                                        v-else-if="editName" placeholder="نام و نام خانوادگی"
                                        background-color="WhiteSmoke" outlined class="border-r-15"></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <div class="pa-5">
                                        <span class="t16400 Arsenic--text">جنسیت</span>
                                    </div>
                                    <v-card class="border-r-15 d-flex align-center px-5 mx-4" outlined min-height="55"
                                        v-if="!editSex">
                                        <v-row justify="space-between" class="px-3">
                                            <span class="t14400">{{ userSex }}</span>
                                            <v-icon @click="editSex = true">mdi-square-edit-outline</v-icon>
                                        </v-row>

                                    </v-card>
                                    <v-select v-model="sex" :items="sexItem" @click:append="sendData({ sex: sex } , 'customer/client/me/')"
                                        append-icon="mdi-check-circle-outline" @blur="editSex = false"
                                        v-else-if="editSex" placeholder="جنسیت" background-color="WhiteSmoke" outlined
                                        class="border-r-15"></v-select>
                                </v-col>
                                <v-col cols="6">
                                    <div class="pa-5">
                                        <span class="t16400 Arsenic--text">کد ملی</span>
                                    </div>
                                    <v-card class="border-r-15 d-flex align-center px-5 mx-4" outlined min-height="55"
                                        v-if="!editNationalCode">
                                        <v-row justify="space-between" class="px-3">
                                            <span class="t14400">{{ userNationalCode }}</span>
                                            <v-icon @click="editNationalCode = true">mdi-square-edit-outline</v-icon>
                                        </v-row>
                                    </v-card>
                                    <v-text-field v-model="nationalCode" @click:append="sendData({ national_code: nationalCode } , 'customer/client/me/')"
                                        append-icon="mdi-check-circle-outline" @blur="editNationalCode = false"
                                        v-else-if="editNationalCode" placeholder="کد ملی" background-color="WhiteSmoke"
                                        outlined class="border-r-15"></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <div class="pa-5">
                                        <span class="t16400 Arsenic--text">شماره موبایل</span>
                                    </div>
                                    <v-card class="border-r-15 d-flex align-center px-5 mx-4" outlined min-height="55"
                                        v-if="!editMobile">
                                        <v-row justify="space-between" class="px-3">
                                            <span class="t14400">{{ userMobile }}</span>
                                            <v-icon @click="editMobile = true">mdi-square-edit-outline</v-icon>
                                        </v-row>
                                    </v-card>
                                    <v-text-field v-model="mobile" @click:append="editMobile = false"
                                        append-icon="mdi-check-circle-outline" @blur="editMobile = false"
                                        v-else-if="editMobile" placeholder="شماره موبایل" background-color="WhiteSmoke"
                                        outlined class="border-r-15"></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <div class="pa-5">
                                        <span class="t16400 Arsenic--text">تاریخ تولد</span>
                                    </div>
                                    <v-card class="border-r-15 d-flex align-center px-5 mx-4" outlined min-height="55"
                                        v-if="!editBirthdate">
                                        <v-row justify="space-between" class="px-3">
                                            <span class="t14400">{{ userBirthdate }}</span>
                                            <v-icon @click="editBirthdate = true">mdi-square-edit-outline</v-icon>
                                        </v-row>
                                    </v-card>
                                    <v-text-field v-model="birthdate" @click:append="editBirthdate = false"
                                        append-icon="mdi-check-circle-outline" @blur="editBirthdate = false"
                                        v-else-if="editBirthdate" placeholder="تاریخ تولد" background-color="WhiteSmoke"
                                        outlined class="border-r-15"></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <div class="pa-5">
                                        <span class="t16400 Arsenic--text">ایمیل</span>
                                    </div>
                                    <v-card class="border-r-15 d-flex align-center px-5 mx-4" outlined min-height="55"
                                        v-if="!editEmail">
                                        <v-row justify="space-between" class="px-3">
                                            <span class="t14400">{{ userEmail }}</span>
                                            <v-icon @click="editEmail = true">mdi-square-edit-outline</v-icon>
                                        </v-row>
                                    </v-card>
                                    <v-text-field v-model="email" @click:append="sendData({ email: email } , 'user/client/me/user/')"
                                        append-icon="mdi-check-circle-outline" @blur="editEmail = false"
                                        v-else-if="editEmail" placeholder="ایمیل" background-color="WhiteSmoke" outlined
                                        class="border-r-15"></v-text-field>
                                </v-col>
                            </v-row>
                        </div>

                        <v-card outlined min-height="129" class="mt-5 border-r-15 pa-5 px-10">
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
    components: {
        UserProfileNavigation
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
            sexItem:[{
                text:'مرد',
                value :'Male'
            },
            {
                text:'زن',
                value :'Female'
            }
        ]
        }
    },

    methods: {
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
                this.$store.dispatch('set_meCustomer')
            })


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