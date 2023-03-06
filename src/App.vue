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
$orange: #FFA800;
$red: #fF3d00;
$black: #001529;
$orangeGradient: radial-gradient(81.88% 81.88% at 50% 81.88%, #FF3D00 0%, #FFA800 100%);

.ant-layout {
  height: 100vh;
}

.ant-layout-content {
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 20px;
  padding-right: 20px;
  overflow-y: scroll;
  .cardList {
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
  }
}

.ant-layout-header {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  min-height: 120px;

  .column {
    margin-left: auto;
    margin-right: auto;

    h1 {
      margin-bottom: 0px;
      color: $orange
    }

    p {
      color: white;
      font-size: 12px;
      margin: 0;
      max-height: 14px;
    }
  }

}

.ant-layout-footer {
  border-top:1px solid $black;
  height: 40px;
  padding: 0px;
}

svg.logo {
  justify-self: flex-start;
  width: 60px;
  height: 60px;
}

.ant-btn {
  background: $orange !important;
  background-color: $orange !important;
  border: none !important;
  margin-left: 5px;
  margin-right: 5px;
}

.subtle {
  opacity: 0.7
}

.column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

</style>
