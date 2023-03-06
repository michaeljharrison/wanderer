
<template>
    <div v-if="card" class="cardRoot">
        <div class="top">
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
</template>

<script>
import { ref, onMounted } from 'vue'
import { message } from 'ant-design-vue';
import { mapGetters } from 'vuex'
export default {
    name: 'Card',
    props: ['card'],
    data() {
        return {

        }
    },
    methods: {
        selectDeck(deck) {
            this.$store.commit('setDeck', deck)
            this.$store.commit('toggleDrawer')
            message.info(`Selected ${deck.name}`);
        }
    },
    computed: {
        ...mapGetters(['deckList', 'drawerOpen'])
    },
}
</script>

<style  lang="scss">


.cardRoot {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 20px;
    width: 280px;
    height: 400px;
    margin-bottom: 10px;
    margin-right: 10px;
    background-color: $grey;
    border: 4px solid $dark_grey;

    .top {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding-top: 10px;
        padding-bottom: 10px;
        min-height: 40%;
        h1,
        h2,
        h3,
        h4,
        h5 {
            color: white;
        }

    }

    .bottom {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-top: 20px;
        padding-bottom: 10px;
        background-color: white;
        flex-grow: 1;
        border-radius: 20px;
        .subtle {
            margin-bottom: auto;
            font-size: 10px;
        }
        .description {
            margin-top: auto;
            margin-bottom: auto;
        }
    }
}</style>
