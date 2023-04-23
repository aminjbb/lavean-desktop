<template>
    <v-dialog v-model="dialog" width="799">
        <template v-slot:activator="{ on, attrs }">

            <v-btn width="161" height="37" color="Black mt-14" dark rounded="xl" v-bind="attrs" v-on="on">
                <span class="t14400">
                    با لاوین هدیه بده!
                </span>
            </v-btn>

        </template>


        <v-card class="br-15  pb-15">
            <div class="pa-2 px-5">

                <v-col>
                    <v-row class="ma-0" justify="space-between" align="center">
                        <span class="t14600 Black--text">
                            انتخاب قیمت هدیه
                        </span>
                        <v-btn icon @click="dialog = false">
                            <v-icon> mdi-close </v-icon>
                        </v-btn>
                    </v-row>
                </v-col>
            </div>

            <v-divider></v-divider>


            <v-row justify="center" align="center" class="filter-price-box  mt-1-5  ma-15">
                <span class="t14400 mx-2">کمترین قیمت</span>
                <div class="show-fliter-price-box text-center mx-2 t10400 pt-1 dana-fa">
                    {{ splitChar(value[0]) }} تومان
                </div>

                <div class="position__relative">
                    <v-range-slider track-color="MagicMint" color="DeepGreen" class="price-filter-input " v-model="value"
                        min="0" max="20000000" step="50000"> </v-range-slider>
                </div>
                <div class="show-fliter-price-box text-center mx-2 t10400 pt-1 dana-fa">
                    {{ splitChar(value[1]) }} تومان
                </div>
                <span class="t14400 mx-2">بیشترین قیمت</span>


            </v-row>

            <v-row justify="center" align="center">
                <v-btn :to="'/products?max_price=' + value[1] + '&min_price=' + value[0]" width="207" height="37" color="Black" dark rounded="xl">
                    <span class="t12400">
                        ثبت اطلاعات
                    </span>
                </v-btn>
            </v-row>
        </v-card>

    </v-dialog>
    <!-- <v-dialog v-model="dialog" width="700">
      <template v-slot:activator="{ on, attrs }">
        <v-btn text class="pa-0"  v-bind="attrs" v-on="on">
            <v-icon class="mr-2 ">mdi-map-marker-plus-outline</v-icon>
          اضافه کردن آدرس جدید
          
        </v-btn>
      </template>
  
      <v-card>
        <v-col>
          <v-row class="ma-0" justify="space-between" align="center">
            <span class="rheadline">اضافه کردن آدرس جدید</span>
            <v-btn icon @click="dialog = false">
              <v-icon> mdi-close </v-icon>
            </v-btn>
          </v-row>
        </v-col>
        <v-divider></v-divider>
        <v-col class="pa-6">
          <AddAddress :cancele="close" sendMethod="post"/>
        
        </v-col>
      </v-card>
    </v-dialog> -->
</template>
  
<script>
import AddAddress from "~/components/Address/AddAddress.vue";

export default {

    components: {
        AddAddress
    },

    methods: {
        close() {
            this.dialog = false;
        },

        splitChar(text) {
            if (text) {
                return text.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            } else {
                return text;
            }
        },
    },

    data() {
        return {
            dialog: false,
            min: 2000000,
            max: 0,
            value: [0, 20000000],
        };
    },
};
</script>