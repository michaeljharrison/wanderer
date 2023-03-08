import { createStore } from "vuex";
import { data } from "../data/stub";
import _ from "lodash";

export const STATES = {
  WELCOME: "welcome",
  RESTING: "resting",
  VIEW_DECK: "view_deck",
  VIEW_GUIDES: "view_guides",
  ENCOUNTER: "encounter",
  ENCOUNTER_WAIT: "encounter_wair",
};

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
      viewCard: null,
      activeCard: null,
      currentState: STATES.WELCOME,
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
    },
  },
  mutations: {
    setDeck(state, newDeck) {
      state.currentDeck = newDeck;
      state.currentState = STATES.RESTING;
    },
    resetDeck(state) {
      state.currentDeck = null;
      state.currentState = STATES.WELCOME;
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
      state.activeDeck = _.clone(state.currentDeck.deck, true).sort(
        () => 0.5 - Math.random()
      );
    },
    endEncounter(state) {
      state.currentState = STATES.RESTING;
      state.activeEncounter = false;
      state.activeHand = [];
      state.activeDeck = [];
      state.activeDiscard = [];
    },
    shuffleDiscard(state) {
      state.activeDeck = _.clone(state.activeDiscard, true).sort(
        () => 0.5 - Math.random()
      );
      state.activeDiscard = [];
    },
    draw(state) {
      state.activeHand.push(state.activeDeck.pop());
    },
    discard(state, card) {
      _.remove(state.activeHand, {
        Number: card.Number,
      });
      state.activeDiscard.push(card);
    },
    playCard(state, card) {
      state.activeCard = card;
    },
  },
});
