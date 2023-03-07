<template>
    <div class="viewHomeRoot">
        <h1>Welcome, Wanderer.</h1>
        <p>Choose your Deck to begin.</p>
        <hr/>
        <deck-list></deck-list>
    </div>
</template>
    
<script>
import DeckList from '../components/DeckList.vue'
export default {
  components: { DeckList },
    name: 'Home',
    setup() {
        
    },
}
</script>

<style lang="scss" scoped>

</style>