<template>
  <v-app dark>
    <!-- <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>  -->


    <Header />
    <v-main>
      <!-- <v-container>
        <Nuxt />
      </v-container> -->
      <Nuxt />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from "~/components/Public/Header.vue";
import Footer from "~/components/Public/Footer.vue";
export default {
  name: 'DefaultLayout',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },

  beforeMount() {

    this.$store.dispatch('set_clientGoldPrice')
  }
}
</script>
