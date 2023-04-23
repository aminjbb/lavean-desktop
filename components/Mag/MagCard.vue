<template>
    <div class="br-15 mag-card" outlined @click="$router.push('/lavean-mag/1')">
        <v-img height="293" :src="require('~/assets/img/tmplate3.png')"></v-img>
        <v-row justify="space-between" class="pa-5 pt-5">
            <v-col cols="8">
                <h3 class="t14600 Black--text">
                    سنگ ماه تولد تیر و خواص آن را بشناسید
                </h3>
                <div>
                    <span class="t12400 Black--text">
                        سنگ ماه تولد تیر و خواص آن را بشناسید
                    </span>
                </div>
                <div>
                    <span class="t12400 SpanishGray--text">
                        سنگ های قیمتی
                    </span>
                </div>
            </v-col>
            <v-col cols="3">
                <div class="text-left pl-2">
                    <span class="t12400 SpanishGray--text">۲۸ تیرماه ۱۴۰۱</span>
                </div>
                <div class="text-left mt-5 pl-2">
                    <v-icon color="#616161">mdi-chevron-left-circle-outline</v-icon>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {

}
</script>