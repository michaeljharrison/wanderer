import { createStore } from "vuex";
import { data } from "../data/stub";
import _ from "lodash";

// Create a new store instance.
export const store = createStore({
  state() {
    return {
      deckList: data,
      currentDeck: null,
      drawerOpen: true,
      activeEncounter: false,
      activeHand: [],
      activeDeck: [],
      activeDiscard: [],
    };
  },
  getters: {
    deckList(state) {
      return state.deckList;
    },
    deckListNames(state, getters) {
      const deckList = getters.deckList;
      return _.map(deckList, (deck) => {
        return deck.name || "No Name";
      });
    },
    currentDeck(state) {
      return state.currentDeck;
    },
    currentDeckName(state, getters) {
      return state.currentDeck.name;
    },
    drawerOpen(state) {
      return state.drawerOpen;
    },
    activeHand(state) {
      return state.activeHand;
    }
  },
  mutations: {
    setDeck(state, newDeck) {
      state.currentDeck = newDeck;
    },
    setDeckList(state, newDeckList) {
      state.deckList = newDeckList;
    },
    toggleDrawer(state) {
      state.drawerOpen = !state.drawerOpen;
    },
    toggleActiveEncounter(state) {
      if(state.activeEncounter) {
        // Wipe existing encounter.
        state.activeHand = [];
        state.activeDeck = [];
        state.activeDiscard = [];
      }
      state.activeEncounter = !state.activeEncounter;
      // First 'shuffle' the deck.a
      console.log(state)
      state.activeDeck = _.clone(state.currentDeck.deck, true).sort(() => 0.5 - Math.random());
    },
    draw(state) {
      console.log(state.activeDeck);
      console.log(state.activeHand);
      state.activeHand.push(state.activeDeck.pop())
    }
  },
});
