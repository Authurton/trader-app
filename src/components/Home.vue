<template>
    <div>
        <h1>Trade or check open positions</h1>
        <h6>You may save and load your data</h6>
        <h6>Close positions on 'End day' button</h6>
        <hr>
        <p>Your account balance: {{funds | sign}}</p>
    </div>
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