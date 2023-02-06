<template>
    <v-container>
        <div class="mt-4">
            <v-row>
                <v-col cols="6" class="pl-15">
                    <v-row justify="end" align="center">
                        <v-col cols="12">
                            <div class="d-flex justify-end align-center">
                                <h5 class="t50800 black--text">
                                    تخفیف ویژه!
                                </h5>
                            </div>

                        </v-col>
                        <v-col cols="12">
                            <v-row justify="end" align="center">
                                <v-col cols="2">
                                    <div>
                                        <span class="t50400 black--text mx-2">
                                            30
                                        </span>
                                    </div>
                                    <div>
                                        <span class="t16400 black--text mx-2">
                                            Seconds
                                        </span>
                                    </div>

                                </v-col>
                                <v-col cols="2">
                                    <div>
                                        <span class="t50400 black--text mx-2">
                                            30
                                        </span>
                                    </div>
                                    <div>
                                        <span class="t16400 black--text mx-2">
                                            Minutes
                                        </span>
                                    </div>
                                </v-col>
                                <v-col cols="2">
                                    <div>
                                        <span class="t50400 black--text mx-2">
                                            30
                                        </span>
                                    </div>
                                    <div>
                                        <span class="t16400 black--text mx-2">
                                            Hours
                                        </span>
                                    </div>
                                </v-col>


                            </v-row>

                        </v-col>
                        <v-col cols="6">
                            <v-row justify="start">
                                <span class="t20400 text-decoration-line-through DimGray--text dana-fa">
                                    ۲۵٬۰۰۰٬۰۰۰
                                </span>
                                <v-avatar class="mx-2" color="orange" size="31"><span
                                        class="t15400 white--text dana-fa m">5%</span></v-avatar>

                            </v-row>

                        </v-col>

                        <v-col cols="12">
                            <v-row justify="end">
                                <span class="t40600 black--text dana-fa">
                                    ۲۵٬۰۰۰٬۰۰۰
                                    <span class="t30400 black--text">تومان</span>
                                </span>
                            </v-row>
                        </v-col>
                        <v-col cols="6" class="mt-2">
                            <v-row justify="center">
                                <v-btn class="rounded-lg" block color="black" dark depressed height="59"> مشاهده
                                    کالا</v-btn>
                            </v-row>
                        </v-col>
                    </v-row>

                </v-col>
                <v-col cols="6" >
                    <v-row justify="end" align="center">
                        <div class="pa-5 ">
                            <v-img height="215" width="574" :src="require('~/assets/img/template1.png')"></v-img>
                        </div>
                    </v-row>
                </v-col>
            </v-row>
        </div>
    </v-container>
</template>
<script>
export default {

}
</script>