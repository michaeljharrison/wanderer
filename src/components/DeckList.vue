
<template>
    <div class="deckListRoot">
        <a-list size="large" :data-source="deckList">
            <template #renderItem="{ item }">
                <a-list-item><a-button class="ant-btn-wide" type="primary" @click="selectDeck(item)">
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
import OBR from "@owlbear-rodeo/sdk";
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
            OBR.notification.show(`${deck.name} has been selected.`,'SUCCESS');
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
    padding: auto;
    .ant-list-item {
        border-bottom: 0px;
        padding: 10px 2px;
    }
  }
  h2 {
    text-align: center;
  }
.ant-list-item {
    max-width: 40%;
}
}
</style>
