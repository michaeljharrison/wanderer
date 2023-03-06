import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import {store} from './store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

// Create App.
const app = createApp(App)
// Use Vuex store.
app.use(store);
// Use Antd component library.
app.use(Antd);
// Mount application.
app.mount('#app')
