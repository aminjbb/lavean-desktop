<template>
    <div class="mb-3 mt-6">
        <v-row justify="center" align="center">
            <v-col cols="12" class="mb-5 mt-6">
                <v-row justify="center">
                    <span class="t14600 Black--text">
                        موجودی شعب
                    </span>
                </v-row>
            </v-col>
            <v-col cols="12">
                <v-row justify="center">
                    <v-card outlined min-height="54" max-height="54" min-width="588" max-width="588" class=" br-15">
                        <v-row class="mt-1" justify="space-between" align="center">
                            <v-col cols="6">
                                <p class="text-center t14600 Black--text">وزن</p>
                            </v-col>
                            <v-col cols="">
                                <p class="text-center t14600 Black--text">نام فروشگاه</p>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-row>
            </v-col>

            <v-col cols="12" class="mt-1" v-if="branchelength > 0">
                <v-row justify="center" v-for="(branche, index) in Branches" :key="index">
                    <v-card outlined min-height="54" max-height="54" min-width="588" max-width="588" 
                        class="mt-2 br-15">
                        <v-row class="mt-1" justify="space-between" align="center">
                            <v-col cols="6">
                                <p class="text-center t14400 Black--text dana-fa">{{ branche.variant.weight }}</p>
                            </v-col>
                            <v-col cols="">
                                <p class="text-center t14400 Black--text">{{ branche.branch.name }} </p>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-row>
            </v-col>
            <v-col cols="12" class="mt-1" v-else>
                <v-row justify="center"  :key="index">
                    <v-card outlined min-height="54" max-height="54" min-width="588" max-width="588" 
                        class="mt-2  br-15 border-danger">
                        <v-row class="mt-1" justify="center" align="center">
                            <!-- <v-col cols="">
                                <p class="text-center t14400 Black--text">{{ branche.branch.name }} </p>
                            </v-col> -->
                            <p class="text-center t14400 Gray02--text mt-2">نا‌موجود </p>
                        </v-row>
                    </v-card>
                </v-row>
            </v-col>
            <!-- 
            <v-col cols="12" class="mt-1">
                <v-row justify="center">
                    <v-btn dark color="Black" rounded="xl" min-width="207">
                        <span class="t12400">بیشتر</span>
                    </v-btn>
                </v-row>
            </v-col> -->
        </v-row>
    </div>
</template>

<script>
import { computed } from 'vue'
export default {
    props: {
        Branches: []
    },
    computed: {
        branchelength() {
            try {
                return this.Branches.length
            } catch (error) {
                return 0
            }
        }
    }
}
</script>