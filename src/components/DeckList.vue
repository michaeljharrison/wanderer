
<template>
    <div class="deckListRoot">
        <h2> Select your deck</h2>
        <a-list size="large" :data-source="deckList">
            <template #renderItem="{ item }">
                <a-list-item><a-button type="primary" @click="selectDeck(item)">
                        <p>{{ item?.name }}</p>
                    </a-button></a-list-item>
            </template>
        </a-list>
    </div>
</template>


<script setup>
import { ref } from 'vue'
</script>


<script>
import { ref, onMounted } from 'vue'
import { message } from 'ant-design-vue';
import { mapGetters } from 'vuex'
export default {
    name: 'Deck List',
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
.deckListRoot {
    
.ant-list-items {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap:wrap;
    flex-grow:1;
    flex-shrink:1;
    padding: 0px;
    .ant-list-item {

    }
  }
  h2 {
    text-align: center;
  }
}
</style>
