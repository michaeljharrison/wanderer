<template>
    <div>
        <div class="focusArea">
            <card v-if="activeCard" :card="activeCard"></card>
        </div>
        <div v-if="currentState === STATES.ENCOUNTER" class="viewEncounterRoot row">
            <div class="leftButtons column">
                <a-button v-if="activeDeck.length < 1" type="primary" @click="shuffleDiscard"><p>Shuffle Discard</p></a-button>
                <a-button v-else  type="primary" @click="draw"><p>Draw a Card</p></a-button>
                <a-button type="primary" @click="endEncounter"><p>End Encounter</p></a-button>
            </div>
            <div class="handWrapper">
                <hand></hand>
            </div>
            
            <div class="rightButtons column">
                <a-tooltip>
                    <template #title>Coming soon.</template>
                <a-button type="primary" disabled>Encounter Guide</a-button>
                </a-tooltip>
            </div>
            
        </div>
    </div>
    
</template>
    
<script>
import { STATES } from '../store';
import { mapState } from 'vuex';
import { message } from 'ant-design-vue';
import Hand from '../components/Hand.vue';
import Card from '../components/Card.vue';
export default {
  components: { Hand, Card },
   
    name: 'Encounter',
    computed:
    mapState(['currentDeck', 'activeCard', 'activeDeck', 'activeHand', 'activeDiscard', 'activeEncounter', 'currentState']),
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
.focusArea {
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
}

.viewEncounterRoot {
    max-height: 355px;
    width: 100%;
    max-width: 100vw;
    justify-content: center;

    .column {
        min-height:355px;
        justify-content: flex-end;
        .ant-btn {
            width: 100%;
            margin-top: 6px;
        }
    }
}
</style>