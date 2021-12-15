import { createApp } from 'vue'
import router from './router';
import vuex from './store'
import axios from './services/http';
import App from './App.vue';
import './assets/styles/index.less';
import 'vfonts/Lato.css' // 通用字体
import 'vfonts/FiraCode.css' // 等宽字体

const app = createApp(App);
app.use(vuex);
app.use(router);
// vue3 全局挂载axios
app.config.globalProperties.$http=axios

app.mount('#app');
