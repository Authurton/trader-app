
<template>
<div class="row">
<div class="card">
  <div class="card-header">
    <h5 class="card-tittle">
      {{currency.name}}
      <h6 class="float-right"><small>{{currency.currentPrice}} | LotSize: {{currency.LotSize}}</small></h6>
    </h5>
  </div>
  <div class="card-body">
    <h5 class="card-title"></h5>
    <p class="card-text">
      <input type="number" 
        class="form-control" 
        placeholder="Lot Size"
        v-model="LotSize"
        :class='{danger: insufficientFunds}'></p>
   <button class="btn btn-danger" 
    @click='sellCurrency' 
    :disabled="insufficientFunds || LotSize<0.1"
   >{{insufficientFunds ? 'Insufficient Funds' : 'Sell'}}</button>
 
  </div>
</div>
</div>
</template>
<style scoped>
  .danger{
    border: 1px solid red;
  }

</style>

<script>
import {mapActions} from 'vuex';

export default {
  props:['currency'],
  data(){
    return{
      LotSize:0.1
    }
  },

  computed:{
    funds(){
      return this.$store.getters.funds;

    },
    insufficientFunds(){
      return this.LotSize >13;

    }

  },

  methods:{
      ...mapActions({placeSellOrder:'sellCurrency'}),

    sellCurrency(){
        const order = {
            currencyId: this.currency.id,
            currentPrice: this.currency.currentPrice,
            LotSize: this.LotSize 
        };
        this.placeSellOrder(order);
        
        this.LotSize = 0.1;
    }
  }

  
}
</script>

<style>
  card{
    float: right;
  }
</style>