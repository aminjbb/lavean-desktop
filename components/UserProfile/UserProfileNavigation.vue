<template>
  <v-card class="Cultured mt-15" outlined rounded="lg">
    <v-row justify="center">
      <v-avatar class="pa-2  position__relative up-info-section" color="white" size="106">
        <v-img width="94" height="94" :src="require('~/assets/img/userProfile.svg')"></v-img>
      </v-avatar>
    </v-row>
    <div class="text-center mt-m-4">
      <span class="t14400">
        {{ userFirstName }}
      </span>
    </div>
    <div class="text-center mt-2">
      <v-chip class="ma-2 px-5" color="white" text-color="white">
        <span class="t14400 Black--text">
          {{ userMobile }}
        </span>
      </v-chip>
    </div>
    <!-- <v-divider></v-divider> -->

    <v-list color="Cultured">
      <v-list-item-group class="mx-5 Gunmetal--text border-r-15">
        <template v-for="(item, i) in items" class="border-r-15">
          <v-list-item active-class="success--text" :key="i" :to="item.to" exact class="border-r-15 ma-3 white">
            <v-list-item-icon class="ml-3">


              <v-img width="24" height="24" :src="item.icon"></v-img>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                <span class=" Black--text t14400">{{ item.text }}</span>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>

      </v-list-item-group>

      <v-row justify="end" class="pa-5 pl-15">
        <span class="mx-2">
          <v-img width="24" height="24" :src="require('~/assets/img/log-out.svg')"></v-img>
        </span>
        <span class="mainError--text t16400">خروج</span>

      </v-row>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        text: "اطلاعات شخصی",
        icon: require('~/assets/img/info.svg'),
        to: "/user-profile",
      },
      {
        text: "آدرس ها",
        icon: require('~/assets/img/map-pin.svg'),
        to: "/user-profile/address",
      },
      {
        text: "تاریخچه سفارش ها",
        icon: require('~/assets/img/package.svg'),
        to: "/user-profile/my-order",
      },
      // {
      //   text: "امتیاز های لاوین",
      //   icon: require('~/assets/img/info.svg'),
      //   to: "/user-profile/emtiaz",
      // },

    ],
  }),

  computed: {
    userInfo() {
      return this.$store.getters['get_meCustomer']
    },
    userFirstName() {
      try {
        return this.userInfo.client.user.firstName
      } catch (error) {
        return ''
      }
    },
    userMobile() {
      try {
        return this.userInfo.client.mobile
      } catch (error) {
        return ''
      }
    },


  },

  methods: {
    gotoAvatar() {
      this.$router.push('/user-profile/avatar')
    },

    logout() {
      this.$cookies.remove('customer_token')
      this.$router.push('/')
    }
  }
};
</script>