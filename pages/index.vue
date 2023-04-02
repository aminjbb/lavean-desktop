<template>
  <div>
    <MainBanner />
    <SpecialDiscount />
    <HomeProduct />
    <InfoLavin />
    <div>
      <v-img height="414" :src="require('~/assets/img/bannerPlp.png')" class="mt-10">
        <v-container>
          <v-row justify="start" align="center" class="height-percent-100 mt-15">
            <v-col cols="5" class="mt-5">
              <span class="t50400 white--text">
                با لاوین در دنیای فشن سفر کنید!
              </span>
            </v-col>
            <v-col cols="6" class="mb-9">
              <v-btn style="    bottom: 50px;
    height: 58px;
    position: absolute;
    left: 190px;" class="px-15" color="Cultured" dark rounded="xl">
                <span class="t20400 Black--text">
                  شروع کنیم
                </span>
              </v-btn>
            </v-col>
          </v-row>
       
        </v-container>
      </v-img>
    </div>
    <HomeCategory />
    <LaveenLevel />

  </div>
</template>

<script>
import MainBanner from '~/components/Home/MainBanner.vue'
import SpecialDiscount from '~/components/Home/SpecialDiscount.vue'
import HomeProduct from '~/components/Home/HomeProduct.vue'
import InfoLavin from '~/components/Home/InfoLavin.vue'
import HomeCategory from '~/components/Home/HomeCategory.vue'
import LaveenLevel from '~/components/Home/LaveenLevel.vue'
export default {
  components: {
    MainBanner,
    SpecialDiscount,
    HomeProduct,
    InfoLavin,
    HomeCategory,
    LaveenLevel
  },
  

  beforeMount() {
    this.$store.dispatch('set_productHome')
    this.$store.dispatch('set_produCategories')
  }
}
</script>
