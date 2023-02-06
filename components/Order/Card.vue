<template>
    <div>
        <v-card outlined rounded="lg" class="py-3 mt-3">
            <span class="mt-2 mr-4 t14600 Black--text">
                سبد خرید
            </span>
            <v-divider class="mt-2 mb-2"></v-divider>
            <OrderCard/>
        </v-card>
    </div>    
</template>

<script>
import OrderCard from "~/components/Order/OrderCard.vue";

export default {
    components: {
 
        OrderCard
    }
}
</script>