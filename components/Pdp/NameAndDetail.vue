<template>
    <div class="ma-5">
        <div>
            <span class="t18600">
                انگشتر ثمین مستطیل سبز
            </span>
        </div>
        <div class="mt-5 mb-4">
            <v-chip class="pa-2 px-4 ">
                <span class="t1440">
                    کالکشن اردیبهشت
                </span>
            </v-chip>
        </div>
        <div class="mt-8">
            <div class="d-flex box-pdp-select">
                <div class="mt-2">
                    <span class="ml-3">
                        رنگ
                    </span>
                </div>
                <div>
                    <v-select class="rounded-lg border_gray  " background-color="white" :items="items" dense label="رنگ"
                        outlined></v-select>
                </div>

            </div>
            <div class="d-flex box-pdp-select">
                <div class="mt-2">
                    <span class="ml-3">
                        سایز
                    </span>
                </div>
                <div>
                    <v-select class="rounded-lg border_gray  " background-color="white" :items="items" dense
                        label="سایز" outlined></v-select>
                </div>

            </div>
            <div class="d-flex box-pdp-select">
                <div class="mt-2">
                    <span class="ml-3">
                        وزن
                    </span>
                </div>
                <div>
                    <v-select class="rounded-lg border_gray  " background-color="white" :items="items" dense label="وزن"
                        outlined></v-select>
                </div>

            </div>
            <div class="mt-10">
                <span class="t14400">
                    توضیحات
                </span>
                <div class="d-flex align-start">
                    <v-icon color="#F39C12" class="ml-3"> mdi-information-outline</v-icon>
                    <p class="t12400">
                        در صورت تغییر رنگ طلا به رنگ‌های دیگر به علت وجود آبکاری کالا مرجوع نمی‌شود.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>
export default {
    data() {
        return {
            items: []
        }
    }
}
</script>