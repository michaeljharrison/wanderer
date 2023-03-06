
<template>
    <div v-if="activeHand" class="handRoot">
        <card v-for="card in activeHand" :card="card" :key="card?.Number"></card>
    </div>
    <div v-else>
        <a-loading></a-loading>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import Card from './Card.vue'
import { message } from 'ant-design-vue';
import { mapState } from 'vuex'
export default {
    name: 'Hand',
    data() {
        return {

        }
    },
    methods: {
        selectDeck(deck) {
            this.$store.commit('setDeck', deck)
            this.$store.commit('toggleDrawer')
            message.info(`Selected ${deck.name}`);
        }
    },
    computed: 
        mapState(['activeHand']),
        components: {
            Card
        }
}
</script>

<style  lang="scss">
.handRoot {
    margin-top: 20px;
        display: flex;
        flex-direction: row;
        flex-wrap:wrap;
}</style>
