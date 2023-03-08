
<template>
    <div class="cardWrapper row">
      
        <div v-if="card" class="cardActions">
            <a-button shape="circle">
                <template #icon><SearchOutlined /></template>
              </a-button> <a-button shape="circle">
                <template #icon><SearchOutlined /></template>
              </a-button> <a-button shape="circle">
                <template #icon><SearchOutlined /></template>
              </a-button>
        </div>
    <div v-if="card" class="cardRoot">
        <div class="top">
            <!-- I've put the icon styling on the cardLogo class, so if you update this icon to be dynamic, LMK if I need to change anything. ATM it's only doing sizing anyway. --> 
            <div class="cardLogoContainer">
                <img class="cardLogo" src="src/assets/icons/proficiencies/pb01.svg">
            </div>
            <div class="cardTextContainer">
                <h2>{{ card?.Name }}</h2>
                <h5>{{ card?.Traits }}</h5>
            </div>

        </div>
        <div class="bottom">
            <p class="subtle">{{ card['Flavour Text'] }}</p>
            <p class="description">{{ card['Description'] }}</p>
        </div>
    </div>
    <div v-else>
        <a-loading></a-loading>
    </div>
</div>
</template>

<script>
import { message } from 'ant-design-vue';
import { SearchOutlined } from '@ant-design/icons-vue';
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
        Logo,
        SearchOutlined,
    }
}
</script>

<style  lang="scss">
svg {
    width: 60px;
  height: 60px;
}
  
</style>
