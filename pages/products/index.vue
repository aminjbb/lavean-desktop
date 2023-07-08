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
                            <v-btn height="58" class="px-15" color="Cultured" dark rounded="xl" to="/lavean-mag">
                                <span class="t20400 Black--text">
                                    شروع کنیم
                                </span>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-container>


            </v-img>

            <div class="main-container mt-5">
                <v-card rounded="lg" outlined height="74">
                    <v-col cols="12" class="py-4">
                        <div class="text-center">
                            <v-btn color="DeepGreen" v-bind="attrs" v-on="on" class="br-10">
                                <span class="t14400 mx-3 Black--text white--text">
                                    همه
                                </span>
                            </v-btn>
                            <v-menu offset-y v-for="(cat, index) in produCategories" :key="index">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn text  @click="assignCat(cat)">
                                        <span class="t14400 mx-3 Black--text">
                                            {{ cat.name }}
                                        </span>
                                    </v-btn>
                                </template>
                                <!-- <v-list v-if="cat.subCategories.length >0">
                                    <v-list-item v-for="(item, index) in cat.subCategories" :key="index">
                                        <v-list-item-title><v-btn text to="/">
                                                {{ item.name }}
                                            </v-btn></v-list-item-title>
                                    </v-list-item>
                                </v-list> -->
                            </v-menu>

                        </div>


                    </v-col>
                </v-card>

                <v-row justify="space-between" class="mt-5">
                    <div class="d-flex">
                        <div class="position__absolute">
                            <v-btn @click="searchShow = !searchShow" height="48" class="px-10 br-15" color="ChineseWhite"
                                dark outlined>
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
                        <v-card outlined class="border-r-15  mr-175" max-height="48">
                            <v-item-group v-model="available" active-class="btn2_toggle-plp">
                                <v-item v-slot="{ active, toggle }" value="available">
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

                        <v-row justify="center" align="center" class="filter-price-box mr-5 mt-1-5">
                            <span class="t14400 mx-2">کمترین قیمت</span>
                            <div class="show-fliter-price-box text-center mx-2 t10400 pt-1 dana-fa">
                                {{ splitChar(value[0]) }} تومان
                            </div>

                            <div class="position__relative">
                                <v-range-slider track-color="MagicMint" color="DeepGreen" class="price-filter-input "
                                    v-model="value" min="0" max="20000000" step="50000"> </v-range-slider>
                            </div>
                            <div class="show-fliter-price-box text-center mx-2 t10400 pt-1 dana-fa">
                                {{ splitChar(value[1]) }} تومان
                            </div>
                            <span class="t14400 mx-2">بیشترین قیمت</span>


                        </v-row>
                        <div class="position__absolute position__absolute_left">
                            <v-btn @click="sortShow = !sortShow" height="48" class="px-10 br-15" color="ChineseWhite" dark
                                outlined>
                                <v-row justify="space-between">
                                    <v-icon class="ml-5" color="Black">
                                        mdi-sort-variant
                                    </v-icon>
                                    <span class="t14400 Black--text" v-if="sort == 'cheapest'">
                                         کمترین
                                    </span>
                                    <span class="t14400 Black--text" v-else-if="sort == 'most_expensive'">
                                        بیشترین 
                                    </span>
                                    <span class="t14400 Black--text" v-else>
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
                        <v-text-field dense prepend-inner-icon="mdi-magnify" color="black" height="36"
                            background-color="white" outlined class="border-r-15" placeholder="جست و جوی کالکشن"
                            clearable></v-text-field>
                    </div>
                    <v-card rounded="lg" width="323" color="white" outlined>
                        <template>
                            <v-container fluid>
                                <template v-for="(colection, index) in collections">
                                    <v-checkbox color="DeepGreen" :value="colection.id" class="mx-5 mt-5"
                                        v-model="selectedColection" :key="colection.id"
                                        :label="colection.name"></v-checkbox>
                                    <v-divider></v-divider>
                                </template>
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
                        <template>
                            <v-container fluid>
                                <v-radio-group v-model="sort">
                                    <v-radio color="DeepGreen" class="mx-5 mb-5" label="جدید‌ترین" value="newest"></v-radio>
                                    <v-divider></v-divider>
                                    <v-radio color="DeepGreen" class="ma-5" label="کمترین قیمت" value="cheapest"></v-radio>
                                    <v-divider></v-divider>
                                    <v-radio color="DeepGreen" class="mx-5 mt-5" label="بیشترین قیمت"
                                        value="most_expensive"></v-radio>


                                </v-radio-group>
                            </v-container>
                        </template>



                    </v-card>


                </v-card>

                <v-row justify="center" align="center" class="mb-10">
                    <v-col cols="3" v-for="(product, index) in  products" :key="index" class="mt-13">
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
                    <v-card outlined width="1200" class="pa-10" rounded="lg">
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
            </div>

        </v-row>

    </div>
</template>

<script>
import ProductCard from '~/components/Public/ProductCard.vue'
import { ProductListFilter } from "~/store/classes"
import { debounce } from "debounce";
export default {
    beforeMount() {
        if (this.$route.query.name) {
            this.productFilter.name = this.$route.query.name
        }
        this.$store.dispatch('set_products', this.productFilter.query_maker_graph(this.$route))
        this.$store.dispatch('set_collections')
        this.$store.dispatch('set_produCategories')

    },

    mounted() {
        if (this.$route.query.max_price && this.$route.query.min_price) {
            this.value = [this.$route.query.min_price, this.$route.query.max_price]
        }
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
        },
        produCategories() {
            try {
                var cat = this.$store.getters['get_produCategories']
                return cat.slice(0, 9)
            } catch (error) {
                return []
            }
        }
    },
    data() {
        return {
            available: 'all',
            min: 2000000,
            max: 0,
            value: [0, 20000000],
            isFilter: false,
            sort: '',
            text: '',
            page: 1,
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
            productFilter: new ProductListFilter()
        }
    },

    methods: {
        assignCat(cat){
            this.$router.push('/products?cat=' + cat.id)
        },
        splitChar(text) {
            if (text) {
                return text.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            } else {
                return text;
            }
        },


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

            this.productFilter.colection = this.selectedColection
            this.$router.push("/products?" + this.productFilter.query_maker());
        },
        filterSort() {

            this.productFilter.sort = this.sort
            this.$router.push("/products?" + this.productFilter.query_maker());
        },
        filterPrice: debounce(function (e)  {
            this.productFilter.min_price = this.value[0]
            this.productFilter.max_price = this.value[1]

            this.$router.push("/products?" + this.productFilter.query_maker());
        }, 1000),
        filterAvailable() {
            if (this.available == 'available') {
                this.productFilter.available = 'available'
            }
            else {
                this.productFilter.available = ''
            }
            this.$router.push("/products?" + this.productFilter.query_maker());
        }
    },

    watch: {
        $route(to) {

            this.isFilter = true
            this.$store.dispatch('set_products', this.productFilter.query_maker_graph(to))
        },
        sort() {
            this.filterSort()
        },
        value() {
            this.filterPrice()
        },
        available() {
            this.filterAvailable()
        },
        page(val) {
            this.productFilter.page = val

            this.$router.push("/products?" + this.productFilter.query_maker());
        }
    },

}
</script>