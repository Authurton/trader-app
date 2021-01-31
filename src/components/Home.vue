<template>

  <b-card 
    overlay
    img-src="https://picsum.photos/900/250/?image=3"
    
    img-alt="Card Image"
    text-variant="white"
    
    title="Best experience with the best"
    sub-title="You may save and load your data"
  >
    <b-card-text>
        <p>Your account balance: {{funds | sign}}</p>
      Some quick example text to build on the card and make up the bulk of the card's content.
    </b-card-text>
  </b-card>

    
</template>

<script>
export default {
    computed:{
        funds(){
            return this.$store.getters.funds;
        }
    }
}
</script>