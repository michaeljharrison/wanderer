<template>
    <div v-if="currentState === STATES.ENCOUNTER" class="viewEncounterRoot row">
        <div class="leftButtons column">
            <p>Cards in deck: X</p>
            <a-button v-if="activeDeck.length < 1" type="primary" @click="shuffleDiscard"><p>Shuffle Discard</p></a-button>
            <a-button v-else  type="primary" @click="draw"><p>Draw a Card</p></a-button>
            <a-button type="primary" @click="endEncounter"><p>End Encounter</p></a-button>
        </div>
        <div class="handWrapper">
            <hand></hand>
        </div>
        
        <div class="rightButtons column">
            <p>Cards in Discard: X</p>
            <a-tooltip>
                <template #title>Coming soon.</template>
            <a-button type="primary" disabled>Encounter Guide</a-button>
            </a-tooltip>
            <a-button type="primary" disabled>View Discard</a-button>
        </div>
        
    </div>
</template>
    
<script>
import { STATES } from '../store';
import { mapState } from 'vuex';
import { message } from 'ant-design-vue';
import Hand from '../components/Hand.vue';
export default {
  components: { Hand },
   
    name: 'Encounter',
    computed:
    mapState(['currentDeck', 'activeDeck', 'activeHand', 'activeDiscard', 'activeEncounter', 'currentState']),
    setup() {
        
    },
    data() {
        return {
            STATES
        }
    },
    methods: {
        endEncounter: function () {
            message.info(`Ending encounter.`);
            this.$store.commit('endEncounter')
        },
        draw: function () {
            this.$store.commit('draw')
        },
        shuffleDiscard: function () {
            this.$store.commit('shuffleDiscard');
        }
    },
}
</script>

<style lang="scss" scoped>
.viewEncounterRoot {
    max-height: 355px;
    width: 100%;
    max-width: 100vw;
    justify-content: space-between;


    .column {
        min-height:355px;
        justify-content: flex-end;
        align-items: center;
        .ant-btn {
            width: 100%;
            margin-top: 6px;
        }
    }
}
</style>