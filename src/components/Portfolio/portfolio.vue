<template>
  <div>
    <!-- <currency v-for="currency in currencies" :key="currency.id" :currency="currency"/> -->
    <currency v-for="currency in currencies" :key="currency.id" :currency="currency" ></currency>
  </div>
</template>


<script>
import {mapGetters} from 'vuex';
import Currency from './stock.vue';

export default {
  
  computed: {
    ...mapGetters({
      currencies: 'currencyPortfolio'
    })
  },
  components: {
    Currency,
  },
  
}
</script>