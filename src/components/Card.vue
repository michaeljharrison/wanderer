
<template>
    <div v-if="hidden" class="cardWrapper hidden">
        <div v-if="card" class="cardActions">
            <div class="action column">
                <a-button @click="revealActive" shape="circle">
                    <template #icon><img class="buttonIcon" src="src/assets/icons/play.svg"></template>
                </a-button>
                <p class="actionDescription">
                    Reveal
                </p>
            </div>
            <div class="action column">
                <a-tooltip>
                    <template #title>Coming soon.</template>
                    <a-button disabled @click="view" shape="circle">
                        <template #icon><img class="buttonIcon" src="src/assets/icons/view.svg"></template>
                    </a-button>
                </a-tooltip>

                <p class="actionDescription">
                    View
                </p>
            </div>
            <div class="action column">
                <a-button @click="discardActive" shape="circle">
                    <template #icon><img class="buttonIcon" src="src/assets/icons/discard.svg"></template>
                </a-button>
                <p class="actionDescription">
                    Discard
                </p>
            </div>
        </div>
        <div v-if="card" class="cardRoot cardBack">
            <img class="cardBackImage" src="src\assets\cardbacks\CombatCard.svg">
        </div>
        <div v-else>
            <a-loading></a-loading>
        </div>
        <div class="cardBottom">
            <p>
                {{ card.Name }}
            </p>

        </div>

    </div>
    <div v-else-if="active" class="cardWrapper active">
        <div v-if="card" class="cardActions">
            <div class="action column">
                <a-tooltip>
                    <template #title>Coming soon.</template>
                    <a-button disabled @click="view" shape="circle">
                        <template #icon><img class="buttonIcon" src="src/assets/icons/view.svg"></template>
                    </a-button>
                </a-tooltip>

                <p class="actionDescription">
                    View
                </p>
            </div>
            <div class="action column">
                <a-button @click="discardActive" shape="circle">
                    <template #icon><img class="buttonIcon" src="src/assets/icons/discard.svg"></template>
                </a-button>
                <p class="actionDescription">
                    Discard
                </p>
            </div>
        </div>
        <div v-if="card" class="cardRoot">
            <div class="top">
                <div class="cardLogoContainer">
                    <img class="cardLogo" src="src/assets/icons/proficiencies/pb01.svg">
                </div>
                <h2>{{ card?.Name }}</h2>
                <h5>{{ card?.Traits }}</h5>
            </div>
            <div class="bottom">
                <p class="subtle">{{ card['Flavour Text'] }}</p>
                <p class="description">{{ card['Description'] }}</p>
            </div>
        </div>
        <div v-else>
            <a-loading></a-loading>
        </div>
    </div>
    <div v-else class="cardWrapper row">
        <div v-if="card" class="cardActions">
            <div class="action column">
                <a-button :disabled="activeCard" @click="play" shape="circle">
                    <template #icon><img class="buttonIcon" src="src/assets/icons/play.svg"></template>
                </a-button>
                <p class="actionDescription">
                    Play
                </p>
            </div>
            <div class="action column">
                <a-tooltip>
                    <template #title>Coming soon.</template>
                    <a-button disabled @click="view" shape="circle">
                        <template #icon><img class="buttonIcon" src="src/assets/icons/view.svg"></template>
                    </a-button>
                </a-tooltip>

                <p class="actionDescription">
                    View
                </p>
            </div>
            <div class="action column">
                <a-button @click="discard" shape="circle">
                    <template #icon><img class="buttonIcon" src="src/assets/icons/discard.svg"></template>
                </a-button>
                <p class="actionDescription">
                    Discard
                </p>
            </div>
        </div>
        <div v-if="card" class="cardRoot">
            <div class="top">
                <div class="cardLogoContainer">
                    <img class="cardLogo" src="src/assets/icons/proficiencies/pb01.svg">
                </div>
                <h2>{{ card?.Name }}</h2>
                <h5>{{ card?.Traits }}</h5>
            </div>
            <div class="bottom">
                <p class="subtle">{{ card['Flavour Text'] }}</p>
                <p class="description">{{ card['Description'] }}</p>
            </div>
        </div>
        <div v-else>
            <a-loading></a-loading>
        </div>
    </div>
</template>

<script>
import { message } from 'ant-design-vue';
import { mapState } from 'vuex'
export default {
    name: 'Card',
    props: ['card', 'hidden', 'active'],
    data() {
        return {
        }
    },
    methods: {
        play() {
            this.$store.commit('playCard', this.card)
            message.info(`Playing ${this.card?.Name}`);
        },
        discard() {
            this.$store.commit('discard', this.card)
            message.info(`Discarded ${this.card?.Name}`);
        },
        revealActive() {
            this.$store.commit('revealCard')
            message.info(`Revealed ${this.card?.Name}`);
        },
        discardActive() {
            this.$store.commit('discardActive', this.card)
            message.info(`Discarded ${this.card?.Name}`);
        }
    },
    computed: {
        ...mapState(['deckList', 'drawerOpen', 'activeCard'])
    },
    components: {
    }
}
</script>

<style  lang="scss">
svg {
    width: 60px;
    height: 60px;
}
</style>
