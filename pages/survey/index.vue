<template>
    <div class="main-container">
        <v-row justify="center" align="center" class="pa-15">
            <v-col cols="6">
                <div class="my-5">
                    <span class="t14600 dana-fa">۱. چقدر از تنوع محصولات موجود راضی بودید؟</span>
                </div>
                <div class="survey-box pt-5">
                    <v-slider class="survey-filter-input" v-model="value" step="1" ticks="always" tick-size="5"
                        max="4"></v-slider>

                    <v-row justify="space-between" align="center" class="pt-3">
                        <span class="t14400 mr-5">خیلی راضی</span>
                        <span class="t14400 mr-4"> راضی</span>
                        <span class="t14400 mr-5"> نظری ندارم</span>
                        <span class="t14400 pr-5"> ناراضی</span>
                        <span class="t14400 ml-5">خیلی ناراضی</span>
                    </v-row>
                </div>
            </v-col>
            <v-col cols="6">
                <div class="my-5">
                    <span class="t14600 dana-fa">۶. آیا محصولات سر زمان مقرر به دست شما رسیدند؟</span>
                </div>
                <div class="survey-box pt-4 pr-4">
                    <v-radio-group v-model="row" row>
                        <v-radio color="#21725E" value="radio-1">
                            <template v-slot:label>
                                <span class="t14400 Gray02--text">بله، به موقع به دستم رسید.</span>
                            </template>
                        </v-radio>
                        <v-radio color="#21725E" value="radio-2">
                            <template v-slot:label>
                                <span class="t14400 Gray02--text">خیر، به موقع به دستم نرسید.</span>
                            </template>
                        </v-radio>
                    </v-radio-group>
                </div>
            </v-col>

            <v-col cols="6">
                <div class="my-5">
                    <span class="t14600 dana-fa">۲. چه میزان از کیفیت محصولات خریداری شده خود رضایت داشتید؟</span>
                </div>
                <div class="survey-box pt-5">
                    <v-slider class="survey-filter-input" v-model="value" step="1" ticks="always" tick-size="5"
                        max="4"></v-slider>

                    <v-row justify="space-between" align="center" class="pt-3">
                        <span class="t14400 mr-5">خیلی راضی</span>
                        <span class="t14400 mr-4"> راضی</span>
                        <span class="t14400 mr-5"> نظری ندارم</span>
                        <span class="t14400 pr-5"> ناراضی</span>
                        <span class="t14400 ml-5">خیلی ناراضی</span>
                    </v-row>
                </div>
            </v-col>
            <v-col cols="6">
                <div class="my-5">
                    <span class="t14600 dana-fa">۷. از نحوه ارسال و تحویل محصولات چه اندازه احساس رضایت داشتید؟</span>
                </div>
                <div class="survey-box pt-5">
                    <v-slider class="survey-filter-input" v-model="value" step="1" ticks="always" tick-size="5"
                        max="4"></v-slider>

                    <v-row justify="space-between" align="center" class="pt-3">
                        <span class="t14400 mr-5">خیلی راضی</span>
                        <span class="t14400 mr-4"> راضی</span>
                        <span class="t14400 mr-5"> نظری ندارم</span>
                        <span class="t14400 pr-5"> ناراضی</span>
                        <span class="t14400 ml-5">خیلی ناراضی</span>
                    </v-row>
                </div>
            </v-col>
            <v-col cols="6">
                <div class="my-5">
                    <span class="t14600 dana-fa">۳. چه اندازه از قیمت محصولات راضی بودید؟</span>
                </div>
                <div class="survey-box pt-5">
                    <v-slider class="survey-filter-input" v-model="value" step="1" ticks="always" tick-size="5"
                        max="4"></v-slider>

                    <v-row justify="space-between" align="center" class="pt-3">
                        <span class="t14400 mr-5">خیلی راضی</span>
                        <span class="t14400 mr-4"> راضی</span>
                        <span class="t14400 mr-5"> نظری ندارم</span>
                        <span class="t14400 pr-5"> ناراضی</span>
                        <span class="t14400 ml-5">خیلی ناراضی</span>
                    </v-row>
                </div>
            </v-col>
            <v-col cols="6">
                <div class="my-5">
                    <span class="t14600 dana-fa">۸. با توجه به تجربه خود، چقدر احتمال می دهید که دوباره از لاوین خرید
                        کنید؟</span>
                </div>
                <div class="survey-box pt-5">
                    <v-slider class="survey-filter-input" v-model="value" step="1" ticks="always" tick-size="5"
                        max="4"></v-slider>

                    <v-row justify="space-between" align="center" class="pt-3">
                        <span class="t14400 mr-5">خیلی راضی</span>
                        <span class="t14400 mr-4"> راضی</span>
                        <span class="t14400 mr-5"> نظری ندارم</span>
                        <span class="t14400 pr-5"> ناراضی</span>
                        <span class="t14400 ml-5">خیلی ناراضی</span>
                    </v-row>
                </div>
            </v-col>
            <v-col cols="6">
                <div class="my-5">
                    <span class="t14600 dana-fa">۴. چقدر از بسته بندی محصولات رضایت داشتید؟</span>
                </div>
                <div class="survey-box pt-5">
                    <v-slider class="survey-filter-input" v-model="value" step="1" ticks="always" tick-size="5"
                        max="4"></v-slider>

                    <v-row justify="space-between" align="center" class="pt-3">
                        <span class="t14400 mr-5">خیلی راضی</span>
                        <span class="t14400 mr-4"> راضی</span>
                        <span class="t14400 mr-5"> نظری ندارم</span>
                        <span class="t14400 pr-5"> ناراضی</span>
                        <span class="t14400 ml-5">خیلی ناراضی</span>
                    </v-row>
                </div>
            </v-col>
            <v-col cols="6">
                <div class="my-5">
                    <span class="t14600 dana-fa">۹. چه اندازه مشتاق هستید لاوین را به دوستان و اطرافیان خود پیشنهاد
                        کنید؟</span>
                </div>
                <div class="survey-box pt-5">
                    <v-slider class="survey-filter-input" v-model="value" step="1" ticks="always" tick-size="5"
                        max="4"></v-slider>

                    <v-row justify="space-between" align="center" class="pt-3">
                        <span class="t14400 mr-5">خیلی راضی</span>
                        <span class="t14400 mr-4"> راضی</span>
                        <span class="t14400 mr-5"> نظری ندارم</span>
                        <span class="t14400 pr-5"> ناراضی</span>
                        <span class="t14400 ml-5">خیلی ناراضی</span>
                    </v-row>
                </div>
            </v-col>
            <v-col cols="6">
                <div class="my-5">
                    <span class="t14600 dana-fa">۵. چه میزان از نحوه برخورد و خدمت رسانی پرسنل لاوین راضی بودید؟</span>
                </div>
                <div class="survey-box pt-5">
                    <v-slider class="survey-filter-input" v-model="value" step="1" ticks="always" tick-size="5"
                        max="4"></v-slider>

                    <v-row justify="space-between" align="center" class="pt-3">
                        <span class="t14400 mr-5">خیلی راضی</span>
                        <span class="t14400 mr-4"> راضی</span>
                        <span class="t14400 mr-5"> نظری ندارم</span>
                        <span class="t14400 pr-5"> ناراضی</span>
                        <span class="t14400 ml-5">خیلی ناراضی</span>
                    </v-row>
                </div>
            </v-col>
            <v-col cols="6" id="surveyTextarea">
                <div class="my-5">
                    <span class="t14600 dana-fa">۱۰. چه تغییراتی برای بهبود تجربه خریدتان از لاوین به ما پیشنهاد می
                        دهید؟</span>
                </div>
                <v-textarea hide-details="" color="#21725E" auto-grow outlined name="surveyTextarea"
                    placeholder="اینجا برامون بنویسید."></v-textarea>
            </v-col>
        </v-row>

        <v-row justify="center" align="center">
            <v-btn width="207" height="37" color="Black" dark rounded="xl">
                <span class="t12400">
                    ارسال
                </span>
            </v-btn>
        </v-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ticksLabels: [
                'خیلی راضی',
                'راضی',
                'نظری ندارم',
                'ناراضی',
                'خیلی ناراضی',
            ],
        }
    }
}
</script>