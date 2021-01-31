<template>
    <div class="row">
        <app-stock v-for="currency in currencies" :key="currency.id" :currency="currency"></app-stock>
    </div>
</template>

<script>
import Stock from './Stock.vue';
export default {
    components:{
        appStock: Stock
    },
    computed:{
        currencies(){
            return this.$store.getters.currencies;
        }
    }
}
</script>