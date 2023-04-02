<template>
    <div class="main-container">
        <v-row justify="center" class="mt-10">
        <v-col cols="12">
            <v-row justify="center">
                <v-col cols="4">
                    <CarouselImageThumbnails2 :product="product.clientProductByUrl" />
                </v-col>
                <v-col cols="8">
                    <NameAndDetail :product="product.clientProductByUrl" />
                    <PriceSection :product="product.clientProductByUrl" />
                </v-col>

            </v-row>
        </v-col>


        <v-col cols="10" class="mt-6">
            <v-divider></v-divider>
            <Branches :Branches="product.clientBranchWarehouseStocks.results" />
        </v-col>
        <v-col cols="10" class="mt-6">
            <HomeProduct />
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
import { gql } from 'nuxt-graphql-request';
export default {
    layout:'headerBlack',
    components: {
        CarouselImageThumbnails2,
        NameAndDetail,
        PriceSection,
        Branches,
        HomeProduct
    },
    async asyncData({ $graphql, app, params, store, route, error }) {
        store.commit("public/set_overlay", true);
        const query = gql`
      query {
        clientBranchWarehouseStocks(variant_Product_Url:"`+ params.url + `"){
            results{
                variant{
                    id,weight,
                price,
                },
                branch{
                    id , name
                }
            }
        }
        clientProductByUrl(productUrl:"`+ params.url + `") {
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
                url,
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
            bestVariant{
                id,weight,
                price,
            }
          }
        }
        
    `;

        var product = await $graphql.default.request(query);


        // product.stocks.results[0].availableVariants.forEach((element) => {
        //     colors.push({ color: element.color, value: element.id });
        // });

        store.commit("public/set_overlay", false);
        store.commit("set_bestVariant", product.clientProductByUrl.bestVariant);
        return { product };

    },

    data() {
        return {
            product: ''
        }
    },
    beforeMount() {
    this.$store.dispatch('set_productHome')
  }
}
</script>