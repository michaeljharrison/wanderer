<template>
    <div v-if="currentState === STATES.ENCOUNTER" class="viewEncounterRoot row">
        <div class="leftButtons column">
            <a-button type="primary" @click="draw"><p>Draw a Card</p></a-button>
            <a-button type="primary" @click="endEncounter"><p>End Encounter</p></a-button>
        </div>
        <div class="handWrapper">
            <hand></hand>
        </div>
        
        <div class="rightButtons column">
            <a-button type="primary" disabled>Encounter Guide</a-button>
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
    mapState(['currentDeck', 'activeEncounter', 'currentState']),
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
        .ant-btn {
            width: 100%;
            margin-top: 6px;
        }
    }
}
</style>