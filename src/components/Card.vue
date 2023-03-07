
<template>
    <div v-if="card" class="cardRoot">
        <div class="top">
            <Logo></Logo>
            <h2>{{ card?.Name }}</h2>
            <h5>{{ card?.Traits }}</h5>
        </div>
        <div class="bottom">
            <p class="subtle">{{ card['Flavour Text'] }}</p>
            <p class="description">{{ card['Description'] }}</p>
        </div>
    </div>
    <div v-else>
        <a-loading></a-loading>
    </div>
</template>

<script>
import { message } from 'ant-design-vue';
import Logo from '../assets/icons/Proficiencies/BA01.svg?component'
import { mapGetters } from 'vuex'
export default {
    name: 'Card',
    props: ['card'],
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
    computed: {
        ...mapGetters(['deckList', 'drawerOpen'])
    },
    components: {
        Logo
    }
}
</script>

<style  lang="scss">
svg {
    width: 60px;
  height: 60px;
}
  
</style>
