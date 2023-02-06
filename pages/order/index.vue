<template>
    <v-row justify="center">
        <v-col cols="10">
            <v-row justify="center">
                <v-col cols="7">
                    <Card />
                </v-col>
                <v-col cols="5">
                    <NameAndDetail />
                </v-col>
                
            </v-row>
        </v-col>
    

       
    </v-row>
</template>

<script>

import Card from "~/components/Order/Card.vue";
export default {
    components: {
 
        Card
    }
}
</script>