<!--<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 class="panel-tittle">
                    NAME
                    <small>(Price:PRICE)</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input type="number" class="form-control" placeholder="Loss/Profit">
                </div>
                <div class="pull-right">
                    <button class="btn btn-primary">Buy</button>
                </div>
            </div>
        </div>
    </div>
</template>-->
<template>
<div class="row">

<div class="card">
  <div class="card-header">
    <h5 class="card-tittle">
      {{currency.name}}
      <h6 class="float-right"><small>{{currency.currentPrice}}</small></h6>
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
   <button class="btn btn-primary" 
   @click='buyCurrency' :disabled="insufficientFunds || LotSize<=0"
   >{{insufficientFunds ? 'Insufficient Funds' : 'Buy'}}</button>
   
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

