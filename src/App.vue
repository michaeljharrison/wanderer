<template>
  <a-layout>
    <a-drawer :placement="placement" :closable="false" :visible="drawerOpen" @close="onClose">
      <deck-list></deck-list>
    </a-drawer>
    <a-layout-header>
      <Logo class="logo" viewBox="0 0 320, 320" />
      <div class="column">
        <h1 class="headerTitle">Wanderer Cards</h1>
      </div>
    </a-layout-header>
    <a-layout-content>
      <h2>{{currentDeck?.name}}</h2>
      <h3>{{activeEncounter && 'In Encounter!' || 'Resting.'}}</h3>
      <div class="row">
        <a-button :disabled="activeEncounter" type="primary" @click="showDrawer">Choose Deck</a-button>
        <a-button :disabled="!currentDeck" type="primary" @click="startEncounter">{{!activeEncounter && 'Start Encounter' || 'End Encounter'}}</a-button>
      </div>
      
      <hr/>
      <div class="body">
        <div v-if="activeEncounter">
          <div class="playArea">
            <h3>Your Hand</h3>
            <p class="subtle">{{activeDeck?.length}} cards left.</p>
            <a-button type="primary" @click="draw">Draw Card</a-button>
            <hand></hand>
  
          </div>
        </div>
        <div v-else>
          <div class="cardList">
            <card v-for="card in currentDeck?.deck" :card="card" :key="card?.Number"></card>
          </div>
        </div>
        
       
      </div>

    </a-layout-content>
    <a-layout-footer>
      <p class="subtle"><i>No rights reserved, do what you want @2023</i></p>
    </a-layout-footer>
  </a-layout>
</template>

<script>
import { defineComponent, ref } from 'vue';
import DeckList from './components/DeckList.vue'
import Card from './components/Card.vue'
import Hand from './components/Hand.vue'
import Logo from './assets/icons/logo.svg?component'
import { mapState, mapGetters } from 'vuex';
export default {
  name: 'App',
  computed:
    mapState(['drawerOpen', 'currentDeckName', 'currentDeck', 'activeEncounter']),
  setup() {
    const placement = ref('left');

    return {
      placement,
    };
  },
  data() {
    return {
    }
  },
  methods: {
    showDrawer: function () {
      this.$store.commit('toggleDrawer')
    },

    startEncounter: function () {
      this.$store.commit('toggleActiveEncounter')
    },

    onClose: function () {
      this.$store.commit('toggleDrawer')
    },
    draw: function () {
      this.$store.commit('draw');
    }

  },
  components: {
    DeckList,
    Card,
    Hand,
    Logo,
  }
}
</script>


<style  lang="scss">

</style>
