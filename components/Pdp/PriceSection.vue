<template>
    <div>
        <div class="d-flex mt-5">
            <div class="mx-8">
                <div>
                    <v-img width="64" :src="require('~/assets/img/cardPdp.svg')"></v-img>
                </div>
                <div class="text-center">
                    <span class="t12400">
                        پرداخت امن
                    </span>
                </div>
            </div>
            <div class="mx-8">
                <div>
                    <v-img width="62" :src="require('~/assets/img/packeagePdp.svg')"></v-img>
                </div>
                <div class="text-center">
                    <span class="t12400">
                        پرداخت امن
                    </span>
                </div>
            </div>
            <div class="mx-8">
                <div>
                    <v-img width="64" :src="require('~/assets/img/starPdp.svg')"></v-img>
                </div>
                <div class="text-center">
                    <span class="t12400">
                        پرداخت امن
                    </span>
                </div>
            </div>

        </div>

        <v-card class="mt-2" outlined rounded="lg" min-height="174" max-height="174" min-width="351" >
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

                <v-col cols="12" class="mt-3">
                <v-row justify="center">
                    <v-btn dark color="Black" rounded="xl" min-width="207">
                        <span class="t12400">اضافه کردن به سبد خرید</span>
                    </v-btn>
                </v-row>
            </v-col>
            </v-row>
        </v-card>

        <div color="OldLace" class="mt-10 border-accent"
            max-width="351">
            <p class="t14400 ma-5">
                فرآیند آبکاری تا یک هفته زمان میبرد و هزینه ی این کار بر اساس وزن کار محاسبه و به فاکتورخریدار اضافه می
                گردد.

            </p>
        </div>
    </div>
</template>

<script>

</script>