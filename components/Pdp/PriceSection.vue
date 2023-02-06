<template>
    <div>
        <v-col cols="11">

            <div class="d-flex ">
                <div class="mt-2">
                    <span class="ml-3">
                        وزن
                    </span>
                </div>
                <div class="w-100">
                    <v-select class="rounded-lg border_gray  " background-color="white" :items="items" dense label="وزن"
                        outlined></v-select>
                </div>

            </div>

        </v-col>
        <v-col cols="11">
            <v-card outlined rounded="lg" min-height="174" max-height="174" min-width="351">
                <v-row justify="space-between" align="center" class="  mb-7 mt-7 mx-8">
                    <span class="t12400 text-decoration-line-through">
                        ۲۵٬۰۰۰٬۰۰۰
                    </span>
                    <span class="t18400">
                        ۲۵٬۰۰۰٬۰۰۰ <span class="t18400">تومان</span>
                    </span>
                </v-row>
                <v-divider></v-divider>
                <v-row justify="space-between" align="center" class="mt-6 mx-8">
                    <span class="t12400">
                        ۲۰٪ اجرت ساخت
                    </span>
                    <span class="t22600">
                        ۲۵٬۰۰۰٬۰۰۰ <span class="t18400">تومان</span>
                    </span>


                </v-row>
            </v-card>


        </v-col>

        <v-row justify="end">
            <v-col cols="4" class="mt-3 mx-10">
                <v-btn dark color="Black" rounded="xl" min-width="207">
                    <span class="t12400">اضافه کردن به سبد خرید</span>
                </v-btn>
            </v-col>
        </v-row>
        <!-- <div color="OldLace" class="mt-10 border-accent"
            max-width="351">
            <p class="t14400 ma-5">
                فرآیند آبکاری تا یک هفته زمان میبرد و هزینه ی این کار بر اساس وزن کار محاسبه و به فاکتورخریدار اضافه می
                گردد.

            </p>
        </div> -->
    </div>
</template>

<script>

</script>