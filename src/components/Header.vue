<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <router-link to="/" class="navbar-brand">FxTrader</router-link>
  <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button> -->
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="nav navbar-nav navbar-right">
        <!-- <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> -->
        <router-link class="nav-link" to="/Portfolio" activeClass="active" tag="li"><a>Open Positions</a></router-link>
        
        <router-link class="nav-link" to="/stocks" activeClass="active" tag="li"><a>Quotes</a></router-link>
        <router-link class="nav-link" to="/stocks" activeClass="active" tag="li"><a>Close All Positions</a></router-link>
        <strong class="navbar-text pull-right">Account Balance:{{funds | sign}}</strong>
      
      <li class="dropdown" :class="{open: isDropDownOpen}" @click="isDropDownOpen =! isDropDownOpen">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Save & load
        </a>
        <div class="dropdown-menu" >
          <a class="dropdown-item" href="#">Save Data</a>
          <a class="dropdown-item" href="#">Load Data</a>
          
        </div>
      </li>
    </ul>
  </div>
</nav>

</template>

<script>
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
  }
}
</script>
