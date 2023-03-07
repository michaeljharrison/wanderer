import { createStore } from "vuex";
import { data } from "../data/stub";
import _ from "lodash";

export const STATES = {
  WELCOME: 'welcome',
  RESTING: 'resting',
  VIEW_DECK: 'view_deck',
  VIEW_GUIDES: 'view_guides',
  ENCOUNTER: 'encounter',

}

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
      currentState: STATES.WELCOME
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
      state.currentState = STATES.RESTING;
    },
    setDeckList(state, newDeckList) {
      state.deckList = newDeckList;
    },
    toggleDrawer(state) {
      state.drawerOpen = !state.drawerOpen;
    },
    startNewEncounter(state) {
      state.currentState = STATES.ENCOUNTER;
      state.activeEncounter = true;
      state.activeHand = [];
      state.activeDeck = [];
      state.activeDiscard = [];
      state.activeDeck = _.clone(state.currentDeck.deck, true).sort(() => 0.5 - Math.random());
    },
    endEncounter(state) {
      state.currentState = STATES.RESTING;
      state.activeEncounter = false;
      state.activeHand = [];
      state.activeDeck = [];
      state.activeDiscard = [];
    },
    draw(state) {
      console.log(state.activeDeck);
      console.log(state.activeHand);
      state.activeHand.push(state.activeDeck.pop())
    }
  },
});
