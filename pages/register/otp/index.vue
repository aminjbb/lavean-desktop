<template>
    <v-container>
        <div class="height-vh-90 d-flex align-center" justify="end" align="center">
            <v-card outlined color="Gray02 zindex-1 mt-16" max-height="376" max-width="392" min-height="376"
                min-width="392" class="border-r-15 position__relative">
                <div class="  pa-15">
                    <div class="text-right"> <span class="t18600 Black--text">
                            کد تایید را وارد کنید.

                        </span></div>
                    <div class="text-right"> <span class="t12400 Black--text">

                            کد تایید برای شماره موبایل ۰۹۳۰۲۴۸۳۷۸۵ ارسال شد.

                        </span></div>

                    <v-otp-input length="5" background-color="white" class="mt-5"></v-otp-input>
                    <div class="mt-2 mb-5">
                        <span class="t10400 DimGray--text">ارسال مجدد کد تا ۱۲ ثانیه دیگر</span>
                    </div>
                    <v-btn width="207" class="px-15" color="Black" dark rounded="xl">
                        <span class="t12400">
                            ورود
                        </span>
                    </v-btn>


                    <div class="mt-5"><v-img width="70" height="16"
                            :src="require('~/assets/img/lavin-logo.png')"></v-img></div>
                </div>

            </v-card>

            <div>
                <span class="t48600 white--text position__relative zindex-1-title-image">با لاوین، متفاوت باش!</span>
                <v-row justify="end">

                    <v-img max-width="873" max-height="458" :src="require('~/assets/img/register.png')"></v-img>
                </v-row>
            </div>

        </div>

    </v-container>

</template>

<script>
export default {

}
</script>