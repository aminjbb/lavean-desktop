import axios from 'axios'
import cookies from 'vue-cookies'
import { gql } from 'nuxt-graphql-request';
export const strict = false
export const state = () => ({
  products: [],
  productPageLength: 1,
  prodcutHome: [],
  produCategories: [],
  bestVariant: '',
  collections: []
})

export const mutations = {
  set_collections(state, obj) {
    state.collections = obj
  },
  set_bestVariant(state, obj) {
    state.bestVariant = obj
  },
  set_produCategories(state, obj) {
    state.produCategories = obj
  },
  set_productHome(state, obj) {
    state.prodcutHome = obj
  },
  set_productPageLength(state, number) {
    state.productPageLength = number;
  },
  set_products(state, obj) {
    state.products = obj
  },
}



export const actions = {

  async set_collections({ commit }, form) {

    const query = gql`
        query{
          clientCollections(limit:100){
              results{
                id,name,url
              }
            }
          } `;
    const collections = await this.$graphql.default.request(query, {});
    commit('set_collections', collections.clientCollections.results);
  },
  async set_produCategories({ commit }, form) {

    const query = gql`
        query{
            clientProductCategories{
              results{
                id,name,image,url
              }
            }
          } `;
    const categories = await this.$graphql.default.request(query, {});
    commit('set_produCategories', categories.clientProductCategories.results);
  },
  async set_productHome({ commit }, form) {

    const query = gql`
        query{
            clientProducts(limit:4) {
                totalCount
                results {
                  id,
                  name,
                  url,
                  bestVariant{
                      id,weight,price
                  }
                  imageCover{
                    imageThumbnail{
                      medium
                    }
                  },
                  mainCategory{
                    name,url,id
                  },

                }
              }
          } `;
    const products = await this.$graphql.default.request(query, {});
    commit('set_productHome', products.clientProducts.results);
  },
  async set_products({ commit }, form) {

    commit('set_tableLoading', true)
    const query = gql`
        query{
            clientProducts(limit:20) {
                totalCount
                results {
                  id,
                  name,
                  url,
                  bestVariant{
                      id,weight,price
                  }
                  imageCover{
                    imageThumbnail{
                      medium
                    }
                  },
                  mainCategory{
                    name,url,id
                  },

                }
              }
          } `;
    const products = await this.$graphql.default.request(query, {});
    commit('set_productPageLength', Math.ceil(products.clientProducts.totalCount / 20));
    commit('set_products', products.clientProducts.results);
  },
}

export const getters = {
  get_collections(state) {
    return state.collections
  },
  get_bestVariant(state) {
    return state.bestVariant
  },
  get_produCategories(state) {
    return state.produCategories
  },
  get_productHome(state) {
    return state.prodcutHome
  },
  get_productPageLength(state) {
    return state.productPageLength;
  },
  get_products(state) {
    return state.products
  },
}