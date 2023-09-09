<template>
  <div class="main-container pt-8">
    <v-row justify="center" class="mt-15">
      <v-col cols="12">
        <v-row justify="center">
          <v-col cols="4">
            <CarouselImageThumbnails2 :product="product"/>
          </v-col>
          <v-col cols="8">
            <NameAndDetail :product="product"/>
            <PriceSection :product="product"/>
          </v-col>

        </v-row>
      </v-col>


      <v-col cols="10" class="mt-6">
        <v-divider></v-divider>
        <Branches :Branches="branches"/>
      </v-col>
      <v-col cols="12" class="mt-6">
        <HomeProduct/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CarouselImageThumbnails2 from "~/components/Carousel/CarouselImageThumbnails2.vue";
import NameAndDetail from "~/components/Pdp/NameAndDetail.vue";
import Branches from "~/components/Pdp/Branches.vue";
import PriceSection from "~/components/Pdp/PriceSection.vue";
import HomeProduct from '~/components/Home/HomeProduct.vue'
import {gql} from 'nuxt-graphql-request';

export default {
  layout: 'headerBlack',
  components: {
    CarouselImageThumbnails2,
    NameAndDetail,
    PriceSection,
    Branches,
    HomeProduct
  },
  async asyncData({$graphql, app, params, store, route, error}) {
    store.commit("public/set_overlay", true);
    const query = gql`
      query {
        clientProductByUrl(productUrl:"` + params.url + `") {
            id,
            name,
            metaDescription,
            discountPercent
            metaTitle,
            metaTags,
            canonical,
            schema,
            collection{
                name,

            }
            images{
                imageThumbnail{
                    large
                }
            },
            mainCategory{
                name, id, url
            }
            availableVariants{
                id,weight,
                price,
            }
            inStockVariants{
              id,
              weight,
              branch{
                name
              }
            }
            bestVariant{
                id,weight,
                price,
            }
          }
        }

    `;

    let data = await $graphql.default.request(query);
    let product = data.clientProductByUrl
    let branches = product.inStockVariants
    store.commit("public/set_overlay", false);
    store.commit("set_bestVariant", product.bestVariant);
    return {product, branches};

  },

  data() {
    return {
      product: '',
      branches: [],
    }
  },
  beforeMount() {
    this.$store.dispatch('set_productHome')
  }
}
</script>
