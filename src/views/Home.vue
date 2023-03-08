<template>
    <div v-if="currentState === STATES.WELCOME" class="viewHomeRoot">
        <h1>Welcome, Wanderer.</h1>
        <p>Choose your Deck to begin.</p>
        <hr/>
        <deck-list></deck-list>
        <a-button disabled><p>View All Cards</p></a-button>
    </div>
    <div v-else-if="currentState === STATES.RESTING" class="viewHomeRoot">
        <h1>Great to have you, {{getFirstName(currentDeck.name)}}!</h1>
        <hr style="margin-bottom: 18px;"/>
        <a-tooltip>
            <template #title>Coming soon.</template>
        <a-button type="primary" disabled @click="viewDeck"><p>View Deck</p></a-button>
        </a-tooltip>
        <a-button type="primary" @click="changeDeck"><p>Change Deck</p></a-button>
        <a-tooltip>
            <template #title>Coming soon.</template>
        <a-button type="primary" disabled><p>View Guides</p></a-button>
        </a-tooltip>
        <a-button type="primary" @click="startEncounter"><p>Start an Encounter</p></a-button>
    </div>
</template>
    
<script>
import DeckList from '../components/DeckList.vue'
import { STATES } from '../store';
import { mapState } from 'vuex';
import { message } from 'ant-design-vue';
export default {
  components: { DeckList },
    name: 'Home',
    computed:
    mapState(['currentDeck', 'activeEncounter', 'currentState']),
    setup() {
        
    },
    data() {
        return {
            STATES
        }
    },
    methods: {
        getFirstName: function (fullName) {
            const words = fullName.split(' ');
            if(words && words[0])
                return words[0].replace(/\W/g, "")
            else 
                return fullName
        },
        viewDeck: function () {
            this.$store.commit('viewDeck')
        },
        changeDeck: function () {
            this.$store.commit('resetDeck')
        },
        startEncounter: function () {
            message.info(`Starting new encounter.`);
            this.$store.commit('startNewEncounter')
        },
    },
}
</script>

<style lang="scss" scoped>
.viewHomeRoot {
    padding: 8px;
}
hr {
    opacity: 0.2
}
</style>