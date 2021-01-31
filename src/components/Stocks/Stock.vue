
<template>
<div >
 <b-col md="12">
  <b-row align-h="end">
  <b-card-body>
  <b-card-group deck>

    <b-card footer="Let's trade">
    <div class="card-title"><h5 class="card-tittle">
      {{currency.name}}
      <h6 class="float-right"><small>{{currency.currentPrice}}</small></h6>
    </h5></div>
    <input type="number" 
        class="form-control" 
        placeholder="Lot Size"
        v-model="LotSize"
        :class='{danger: insufficientFunds}'>
        <br>
    <b-button href="#" variant="primary" @click='buyCurrency' :disabled="insufficientFunds || LotSize<=0"> 
      {{insufficientFunds ? 'Insufficient Funds' : 'Buy'}}
    </b-button>
    </b-card>
  </b-card-group>
  </b-card-body>
  </b-row>
 </b-col> 
</div>
</template>

<style scoped>
  .danger{
    border: 1px solid red;
  }

</style>


<script>
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
    buyCurrency(){
      const order = {
        currencyId: this.currency.id,
        currentPrice: this.currency.currentPrice,
        LotSize: this.LotSize,

      };
      // console.log(order);
      this.$store.dispatch('buyCurrency',order);
      this.LotSize = 0.1;
    }
  }

  
}
</script>

