<template>
<div>
  <b-card title="Card Title" no-body>
    <b-card-header header-tag="nav">
      <b-nav card-header tabs fill>
        <router-link to="/" class="navbar-brand"><em>FxTrader</em></router-link>
        <router-link class="nav-link" to="/Portfolio" activeClass="active" tag="li"><a>Open Positions</a></router-link>
        <router-link class="nav-link" to="/stocks" activeClass="active" tag="li"><a>Quotes</a></router-link>
        
        
        <div>
        <b-dropdown id="dropdown-1" text="Save&Load" variant="primary" class="m-md-2"
          :class="{open: isDropDownOpen}" 
          @click.prevent="isDropDownOpen = !isDropDownOpen">
          <b-dropdown-item @click="SaveData">Save data</b-dropdown-item>
          <b-dropdown-item @click="LoadData">Load data</b-dropdown-item>

        </b-dropdown>
        <strong class="navbar-text pull-right">Acc Balance:{{funds | sign}}</strong>
    </div>
      </b-nav>
    </b-card-header>
    

    <b-card-body class="text-center">
      <b-card-text>
        Load your funds and enjoy trading with us
      </b-card-text>

      <b-button variant="primary">Load Funds</b-button>
    </b-card-body>
  </b-card>
</div>



</template>

<script>
import {mapActions} from 'vuex';


export default {
data(){
  return {
    isDropDownOpen: false
  }

},

  computed:{
    funds(){
      return this.$store.getters.funds;
    }
  },
  methods:{
    ...mapActions({
      fetchData: "LoadData"
    }),

    SaveData(){
      const data = {
        funds: this.$store.getters.funds,
        currencyPortfolio: this.$store.getters.currencyPortfolio,
        currencies: this.$store.getters.currencies
      };
      this.$http.put('data.json', data)
      
    },
    LoadData(){
      this.fetchData();
    }
  }
}
</script>
