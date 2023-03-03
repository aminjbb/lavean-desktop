<template>
    <div class="mt-2">
        <v-row justify="center">

            <v-img class="mt-2" max-height="491" :src="require('~/assets/img/bannerPlp.png')">
                <v-container>
                    <v-row justify="start" align="center" class="height-percent-100 mt-15">
                        <v-col cols="5">
                            <span class="t50400 white--text">
                                با لاوین در دنیای فشن سفر کنید!
                            </span>
                        </v-col>
                    </v-row>
                    <v-row justify="end" align="center" class="height-percent-100 mt-15">
                        <v-col cols="3">
                            <v-btn height="58" class="px-15" color="Cultured" dark rounded="xl">
                                <span class="t20400 Black--text">
                                    شروع کنیم
                                </span>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-container>


            </v-img>

            <v-col cols="9">
                <v-card rounded="lg" outlined>
                    <v-col cols="12" class="py-2">

                        <div class="text-center">
                            <v-menu offset-y open-on-hover>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn text v-bind="attrs" v-on="on">
                                        <span class="t14400 mx-3 Black--text">
                                            همه
                                        </span>
                                    </v-btn>
                                </template>
                                <v-list>
                                    <v-list-item v-for="(item, index) in items" :key="index">
                                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                            <v-menu offset-y>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn text v-bind="attrs" v-on="on">
                                        <span class="t14400 mx-3 Black--text">
                                            گردن بند
                                        </span>
                                    </v-btn>
                                </template>
                                <v-list>
                                    <v-list-item v-for="(item, index) in items" :key="index">
                                        <v-list-item-title><v-btn text to="/">
                                                {{ item.title }}
                                            </v-btn></v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>

                        </div>


                    </v-col>
                </v-card>

                <v-row justify="space-between" class="mt-5">
                    <div class="d-flex">
                        <div class="position__absolute">
                            <v-btn @click="searchShow = !searchShow" height="48" class="px-10" color="ChineseWhite" dark
                                outlined rounded="xl">
                                <v-row justify="space-between">
                                    <span class="t14400 Black--text">
                                        کالکشن ها
                                    </span>
                                    <v-icon class="mr-5" color="Black">
                                        mdi-chevron-down
                                    </v-icon>
                                </v-row>
                            </v-btn>

                        </div>




                        <v-card outlined class="border-r-15  px-1 mr-175" max-height="48">
                            <v-item-group v-model="shopFilterBtn" active-class="btn2_toggle-plp">
                                <v-item v-slot="{ active, toggle }" value="most_expensive">
                                    <v-btn depressed rounded class=" white_back border-r-15" large @click="toggle"
                                        active-class="btn2_toggle-plp">

                                        <span>موجود</span>
                                    </v-btn>
                                </v-item>
                                <v-item v-slot="{ active, toggle }" value="all">
                                    <v-btn depressed rounded class="border-r-15 white_back" large @click="toggle"
                                        active-class="btn2_toggle-plp">

                                        <span> همه</span>
                                    </v-btn>
                                </v-item>
                            </v-item-group>
                        </v-card>

                        <div class="position__absolute position__absolute_left">
                            <v-btn @click="sortShow = !sortShow" height="48" class="px-10" color="ChineseWhite" dark
                                outlined rounded="xl">
                                <v-row justify="space-between">
                                    <v-icon class="ml-5" color="Black">
                                        mdi-sort-variant
                                    </v-icon>
                                    <span class="t14400 Black--text">
                                        جدید ترین
                                    </span>

                                </v-row>
                            </v-btn>

                        </div>
                    </div>
                </v-row>
                <v-card v-click-outside="outsideSearchShow" v-if="searchShow"
                    class="pa-10 mt-5 position__absolute z-index-10" width="421" rounded="lg" color="Cultured" outlined>
                    <div>
                        <v-text-field prepend-inner-icon="mdi-search-web" max-height="36" background-color="WhiteSmoke"
                            outlined class="border-r-15" placeholder="جست و جوی کالکشن" clearable></v-text-field>
                    </div>
                    <v-card width="323" color="white" outlined>
                        <template>
                            <v-container fluid>
                                <v-checkbox :value="colection.url" class="mx-5 my-3" v-model="selectedColection"
                                    v-for="(colection, index) in collections" :key="colection.id"
                                    :label="colection.name"></v-checkbox>
                                <v-divider></v-divider>
                            </v-container>
                        </template>


                    </v-card>

                    <v-row justify="center" class="mt-5 px-6">
                        <v-btn @click="fillterColection()" height="46" class="px-15" block color="DeepGreen" dark
                            rounded="xl">
                            <span class="t14400 white--text">
                                انتخاب
                            </span>
                        </v-btn>
                    </v-row>
                </v-card>
                <v-card v-click-outside="outsidesortShow" v-if="sortShow"
                    class="pa-10 mt-5 position__absolute  position__absolute_rigth z-index-10" width="421" rounded="lg"
                    color="Cultured" outlined>

                    <v-card width="323" color="white" outlined>
                        <v-radio-group v-model="radioGroup">
                            <v-radio class="ma-3" label="جدید‌ترین" value="n"></v-radio>
                            <v-divider></v-divider>
                            <v-radio class="ma-3" label="کمترین قیمت" value="n"></v-radio>
                            <v-divider></v-divider>
                            <v-radio class="ma-3" label="بیشترین قیمت" value="n"></v-radio>
                            <v-divider></v-divider>

                        </v-radio-group>


                    </v-card>


                </v-card>

                <v-row justify="center" align="center" class="my-10">
                    <v-col cols="3" v-for="(product, index) in  products" :key="index">
                        <ProductCard :product="product" />
                    </v-col>

                </v-row>

                <template v-if="isFilter && products.length == 0">
                    <v-row justify="center">
                        <v-img class="mt-2" max-width="304" max-height="259"
                            :src="require('~/assets/img/is-null-object.svg')"></v-img>

                    </v-row>
                    <v-row justify="center" class="mt-6">
                        <p class="t24400 DimGray--text">نتیجه ای برای این کلید واژه یافت نشد.</p>

                    </v-row>

                </template>

                <div class="text-center my-15" v-if="productPageLength">
                    <v-pagination color="Black" v-model="page" :length="productPageLength" circle></v-pagination>
                </div>

                <v-row justify="center">
                    <v-card outlined width="1197" class="pa-10" rounded="lg">
                        <p>
                            یاقوت سرخ به عنوان اصلی‌ترین سنگ ماه تولد تیر شناخته می‌شود و در کنار آن، زمرد، مون استون و
                            مروارید نیز سنگ‌های فرعی متولدین تیر ماه هستند.
                            سنگ ماه تولد تیر (جولای): روبی (یاقوت سرخ)
                            یاقوت نوعی از کرندوم است. کروندوم خالص بی‌رنگ است که در این حالت یاقوت سفید را به وجود
                            می‌آورد؛
                            بنابراین رنگ در اثر ناخالصی‌های شیمیائی به‌وجود می‌آید. رنگ قرمز موجود در روبی به خاطر کروم
                            موجود در این سنگ‌قیمتی است. وقتی مقدار کروم در روبی کم باشد، رنگ آن صورتی می‌شود و به عنوان
                            «یاقوت صورتی» در بازار عرضه می‌شود. درجه سختی روبی (یاقوت) با الماس قابل مقایسه است. این سنگ
                            درجه سختی ۹ در مقیاس موس دارد. یعنی از بیشتر سنگ‌های جواهر سخت‌تر و مستحکم‌تر است. این محکم
                            بودن
                            باعث می‌شود تا این سنگ را روی انگشتر سوار کنند، زیرا به راحتی شکسته نمی‌شود.
                            بهترین نوع سنگ یاقوت سرخ در منطقه ماگوک در کشور برمه پیدا شده است. این گوهر را در سنگ‌های
                            رودخانه‌ای نیز می‌توان یافت. همچنین جالب است بدانید نادرترین و ارزشمندترین یاقوت برمه‌ای،
                            یاقوت
                            سرخ ستاره‌ای نام دارد که به «خون کبوتر» نیز معروف است چون مانند خون کبوتر سرخ است. درون این
                            نوع
                            روبی چیزی مثل یک ستاره شش وجهی نورانی با تقارن عالی به چشم می‌خورد و وقتی سنگ را می‌چرخانید
                            مرکز
                            ستاره نیز حرکت می‌کند.
                            یاقوت به دو صورت کابوشون و برلیان تراشیده می‌شود. نوع مصنوعی آن هم در کارخانه ساخته می‌شود
                            که
                            قیمت ارزان‌تری نسبت به یاقوت اصل دارد. از جذابیت‌های روبی این است که نور طبیعی را به خود جذب
                            می‌کند و بعدا در نبود نور آن را بازتاب می‌دهد. در مطلب آیا سنگ ماه تولدتان را می‌شناسید؟
                            می‌توانید مشخصات و خواص دیگر سنگ‌های ماه تولد را بخوانید.
                        </p>
                    </v-card>
                </v-row>
            </v-col>

        </v-row>

    </div>
</template>

<script>
import ProductCard from '~/components/Public/ProductCard.vue'
export default {
    beforeMount() {
        this.$store.dispatch('set_products', '')
        this.$store.dispatch('set_collections')
    },
    components: {
        ProductCard
    },
    computed: {
        products() {
            return this.$store.getters['get_products']
        },
        productPageLength() {
            return this.$store.getters['get_productPageLength']
        },

        collections() {
            return this.$store.getters['get_collections']
        }
    },
    data() {
        return {
            isFilter: false,
            text: '',
            page: 1,
            shopFilterBtn: 'all',
            searchShow: false,
            sortShow: false,
            selectedColection: [],
            isSend: true,
            items: [
                { title: 'Click Me' },
                { title: 'Click Me' },
                { title: 'Click Me' },
                { title: 'Click Me 2' },
            ],
        }
    },

    methods: {
        outsideSearchShow() {
            if (this.searchShow) {
                this.searchShow = false;
            }
        },
        outsidesortShow() {
            if (this.sortShow) {
                this.sortShow = false;
            }
        },
        fillterColection() {

            if (this.selectedColection.length > 0) {
                var colections = ''
                this.selectedColection.forEach(el => {
                    colections += '"' + el + '",'
                })
                if (this.isSend) {
                    setTimeout(() => {

                        if (this.$route.query.colection) {
                            const query = Object.assign({}, this.$route.query);
                            query.colection = colections;
                            this.$router.push({ query });
                        } else {
                            var route = this.$route.fullPath.split("?");
                            var query = "";
                            if (route[1]) {
                                query = route[1] + "&colection=" + colections;
                            } else {
                                query = "?colection=" + colections;
                            }

                            this.$router.push("/products?" + query);
                        }
                    }, 25);
                }
            } else {
                let url = new URL(window.location.href);
                let params = new URLSearchParams(url.sort);
                params.delete("colection");
                var newParams = params.toString();

                this.$router.push("/products?" + newParams);
            }
        }
    },

    watch: {
        $route(to) {
            this.isFilter = true
            var query = ''
            if (to.query.colection) {
                query = ',collection_Url_In:[' + to.query.colection + ']'
            }
            this.$store.dispatch('set_products', query)
        }
    }
}
</script>