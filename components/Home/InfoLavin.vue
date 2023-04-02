<template>
    <div class="main-container mt-10 position__relative">
        <span class="position__absolute t40600 why-lavin">چرا از لاوین <span class="white--text">
                خرید میکنند؟
            </span></span>
        <div class="info-home-box d-flex justify-center">
            <v-card height="411" width="647" color="LightSilver" class="LightSilver-box pt-15 px-10 t14400" 
                outlined>
                <v-col cols="7">
                    <ul>
                        <li class="t14400">ارسال رایگان به سراسر کشور</li>
                        <li class="t14400 mt-5">امکان تعویض تا یک هفته بعد از خرید</li>
                        <li class="t14400 mt-5">عودت و بازگشت وجه تا 24 ساعت بعد از خرید</li>
                        <li class="t14400 mt-5">با هر خرید 2% از کل مبلغ سفارشتان را در کیف پول دریافت و برای خرید بعدی از اعتبارتان استفاده
                            کنید!</li>
                        <li class="t14400 mt-5">تضمین اصالت کالا</li>
                        <li class="t14400 mt-5">تحویل سریع در کوتاه ترین زمان</li>
                        <li class="t14400 mt-5">امکان ابکاری محصولات قبل از ارسال</li>
                    </ul>

                </v-col>
            </v-card>

            <div class="info-image-box">
                <div class="info-image-box-tr">

                </div>
                <v-img height="375" width="625" :src="require('~/assets/img/template2.png')"></v-img>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>
<style>
.info-home-box ul {
  list-style: none;
}

.info-home-box ul li::before {
    content: "\2022";
    color: white;
    font-weight: bold;
    display: inline-block;
    margin-right: -1em;
    width: 1em;

  }</style>


