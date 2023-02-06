<template>
    <v-card rounded="lg" height="188" width="190" outlined>
        <v-row justify="center" align="center" class="height-percent-100">
            <v-img max-height="130" max-width="108" :src="categoriImage"
                class="border-r-15"></v-img>
        </v-row>
        <div class="d-flex justify-center">
            <v-btn width="137" height="37" color="Cultured rounded-xl" elevation="2">
                <span class="t14400 Black--text">{{ name}}</span>
            </v-btn>
        </div>
    </v-card>

</template>

<script>
export default {
    props: {
        categori: ''
    },

    computed: {
        name() {
            try {
                return this.categori.name
            } catch (error) {
                return ''
            }
        },
        categoriImage() {
            try {
                return process.env.baseUrl + '/media/' + this.categori.image
            } catch (error) {
                return ''
            }
        },
    }
}
</script>