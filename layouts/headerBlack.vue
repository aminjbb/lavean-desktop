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


    <HeaderBlack />
    <v-main>
      <!-- <v-container>
        <Nuxt />
      </v-container> -->
      <Nuxt />
    </v-main>
    <v-footer class="footer-box">
      <v-row justify="center">
        <div class="footer-green-box">
          <v-row justify="center" align="center" class="height-percent-100">
            <v-col cols="4">
              <div class="text-center">
                <span class="t14600 MagicMint--text">
                  لاوین در شبکه های اجتماعی
                </span>
              </div>
              <v-row justify="center" class="mt-2">
                <span class="mx-1">
                  <v-img width="31" height="31" :src="require('~/assets/img/instaIcon.svg')"></v-img>
                </span>
                <span class="mx-1">
                  <v-img width="33" height="33" :src="require('~/assets/img/facebookIcon.svg')"></v-img>
                </span>

                <span class="mx-1">
                  <v-img width="35" height="31" :src="require('~/assets/img/telegramicon.svg')"></v-img>
                </span>

              </v-row>
            </v-col>
            <v-col cols="4">
              <div class="text-center">
                <span class="t14600 MagicMint--text">
                  آدرس دفتر مرکزی
                </span>
              </div>
              <div class="text-center">
                <span class="t14400 Cultured02--text">
                  اتوبان ستاری، جنب مجتمع تجاری کورش
                </span>
              </div>
            </v-col>
            <v-col cols="4">
              <div class="text-center">
                <span class="t14600 MagicMint--text">
                  تلفن تماس
                </span>
              </div>
              <div class="text-center">
                <span class="t14400 Cultured02--text">
                  44000071-72
                </span>
              </div>
            </v-col>
          </v-row>
        </div>
        <v-container>
          <v-row justify="center" align="center" class="height-percent-100">
            <v-col cols="2">
              <div class="text-center">
                <v-btn to="/contact-us" text>
                  <span class="t14400 white--text">
                    تماس با ما
                  </span>
                </v-btn>
              </div>

            </v-col>
            <v-col cols="2">
              <div class="text-center">
                <v-btn to="/about-us" text>
                  <span class="t14400 white--text">
                    درباره ما
                  </span>
                </v-btn>

              </div>

            </v-col>
            <v-col cols="2">
              <div class="text-center">
                <v-btn to="/about-us" text>
                  <span class="t14400 white--text">
                    همکاری با لاوین
                  </span>
                </v-btn>

              </div>

            </v-col>
            <v-col cols="2">
              <div class="text-center">
                <v-btn to="/about-us" text>
                  <span class="t14400 white--text">
                    شرایط بازگشت کالا
                  </span>
                </v-btn>

              </div>

            </v-col>
            <v-col cols="2">
              <div class="text-center">
                <v-btn to="/about-us" text>
                  <span class="t14400 white--text">
                    پیگیری سفارشات
                  </span>
                </v-btn>

              </div>

            </v-col>
            <v-col cols="2">
              <div class="text-center">
                <v-btn to="/about-us" text>
                  <span class="t14400 white--text">
                    قوانین و مقررات
                  </span>
                </v-btn>

              </div>

            </v-col>

          </v-row>
          <v-row justify="center" align="center">
            <div>
              <v-img width="148" height="36" :src="require('~/assets/img/darkLogo.png')"></v-img>
            </div>

          </v-row>
          <v-row justify="center" align="center">
            <div class="mt-5">
              <v-img width="22" height="22" :src="require('~/assets/img/roshaklogo.png')"></v-img>
            </div>


          </v-row>
          <v-row justify="center" align="center">
            <div class="mt-2">
              <span class="t10400 white--text">
                Designed & Developed by Roshak
              </span>
            </div>


          </v-row>

        </v-container>

      </v-row>


    </v-footer>
  </v-app>
</template>

<script>
import HeaderBlack from "~/components/Public/HeaderBlack.vue";
export default {
  name: 'headerBlack',
  components: {
    HeaderBlack
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
  }
}
</script>
