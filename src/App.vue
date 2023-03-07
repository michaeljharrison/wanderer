<template>
  <a-layout>
    
    <a-layout-content>
      <div v-if="currentState === STATES.WELCOME">
        <home></home>
      </div>
      <div v-else-if="currentState === STATES.ENCOUNTER">
        <encounter></encounter>
      </div>
    </a-layout-content>
  </a-layout>
</template>

<script>
import { ref } from 'vue';
import DeckList from './components/DeckList.vue'
import Card from './components/Card.vue'
import Hand from './components/Hand.vue'
import { mapState } from 'vuex';
import { STATES } from './store';
import Home from './views/Home.vue'
import Encounter from './views/Encounter.vue';
export default {
  name: 'App',
  computed:
    mapState(['drawerOpen', 'currentDeckName', 'currentDeck', 'activeEncounter', 'currentState']),
  setup() {
    const placement = ref('left');

    return {
      placement,
    };
  },
  data() {
    return {
      STATES
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
    Home,
    Encounter,
  }
}
</script>


<style  lang="scss">

</style>
