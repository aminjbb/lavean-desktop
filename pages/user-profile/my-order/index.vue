<template>
    <div class="mt-15 pt-10 ">
        <v-row justify="center" align="center">
            <v-col cols="8">
                <v-row justify="center">
                    <v-col cols="4">
                        <UserProfileNavigation />

                    </v-col>
                    <v-col cols="8">
                        <div class="container-avatar ma-auto mt-15">
                            <div class="ma-4">
                                <span class="t14600 Black--text">
                                    تاریخچه سفارشات
                                </span>
                            </div>

                        </div>

                        <v-card height="56" color="#EDEDED" outlined class="border-r-15 py-7 px-8">
                            <v-row justify="space-between">
                                <div class="text-center">
                                    <span class="t14400">
                                        شناسه سفارش
                                    </span>
                                </div>
                                <div class="text-center"> <span class="t14400">
                                        تاریخ
                                    </span></div>

                                <div class="text-center"> <span class="t14400">
                                        جمع کل
                                    </span></div>

                                <div class="text-center"><span class="t14400">
                                        وضعیت
                                    </span></div>

                                <div class="text-center"><span class="t14400">
                                        جزئیات
                                    </span></div>
                            
                            </v-row>
                        </v-card>
                        <v-card height="178" outlined class=" mt-5 border-r-15 py-7 px-8">
                            <v-row justify="space-between">
                                <div class="text-center"><span class="t14400">
                                        ۱۲۳۴۵۶۷
                                    </span></div>

                                <div class="text-end pr-10"> <span class="t14400">
                                        ۱۴۰۱/۱۰/۰۳
                                    </span></div>

                                <div class="text-center"> <span class="t14400">
                                        ۲۰,۰۰۰,۰۰۰ تومان
                                    </span></div>

                                <div class="text-center pl-8"> <span class="t14400">
                                        تحویل شده
                                    </span></div>

                                <div class="text-center"> <span class="t14400">
                                        <v-icon>mdi-dots-vertical</v-icon>
                                    </span></div>

                            </v-row>
                            <v-row justify="start" class="mt-6">
                                <div class="mx-3">
                                    <v-img height="92" width="92" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                                        class="border-r-15"></v-img>
                                </div>
                                <div class="mx-3">
                                    <v-img height="92" width="92" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                                        class="border-r-15"></v-img>
                                </div>
                                <div class="mx-3">
                                    <v-img height="92" width="92" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                                        class="border-r-15"></v-img>
                                </div>
                            </v-row>


                        </v-card>


                        <v-btn outlined block class="rounded-xl mt-3" color="SpanishGray" height="59">
                            بیشتر
                        </v-btn>
                    </v-col>
                </v-row>
            </v-col>

        </v-row>

    </div>
</template>

<script>
import UserProfileNavigation from '~/components/UserProfile/UserProfileNavigation.vue'
import ModalAddAddres from '~/components/Address/ModalAddAddres.vue'
export default {
    layout: 'headerBlack',
    components: {
        UserProfileNavigation,
        ModalAddAddres
    }
}
</script>