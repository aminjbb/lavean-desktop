<template> 
  <v-dialog @click:outside="close()" v-model="dialog" width="725">



    <v-card class="br-15">
      <div class="pa-2 px-5">

        <v-col>
          <v-row class="ma-0" justify="space-between" align="center">
            <span class="t14600 Black--text">
              آدرس
            </span>
            <v-btn icon @click="close()">
              <v-icon> mdi-close </v-icon>
            </v-btn>
          </v-row>
        </v-col>
      </div>

      <v-divider></v-divider>


      <v-col class="pa-2 px-6">
        <AddAddress :cancele="close" sendMethod="post" />

        <!-- <v-row class="ma-0 " align="center" justify="center">
            
           <v-col cols="5">
            <v-btn @click="validate()" color="primary2" block depressed dark large>ویرایش</v-btn>
           </v-col>
          </v-row> -->
      </v-col>
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
      this.$store.commit('public/set_addAddressModal', false)
    }
  },

  data() {
    return {

    };
  },

  computed: {
    dialog() {
      try {
        return this.$store.getters['public/get_addAddressModal']
      } catch (error) {

      }
    }
  }
};
</script>