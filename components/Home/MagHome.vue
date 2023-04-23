<template>
    <div class="mt-15 pt-10 ">
        <v-row justify="center " class="position__relative">
            <div class="mag-home-title">
                <span class="t30600">
                    لاوین مگ
                </span>
            </div>
        </v-row>
        <v-divider></v-divider>

        <div class="main-container mt-15">
            <v-row justify="center" align="center">
                <v-col cols="4">
                    <HomeMagCard />
                </v-col>
                <v-col cols="4">
                    <HomeMagCard />
                </v-col>
                <v-col cols="4">
                    <HomeMagCard />
                </v-col>
            </v-row>

            <v-row justify="center" class="mt-15">
                <v-btn  color="Black" dark rounded="xl" width="171" height="48" to="/lavean-mag">
                    <span class="t16600">
                        بیشتر بخوانید
                    </span>
                </v-btn>
            </v-row>
        </div>
    </div>
</template>

<script>
import HomeMagCard from '~/components/Public/HomeMagCard'
export default {
    components: {
        HomeMagCard
    }
}
</script>