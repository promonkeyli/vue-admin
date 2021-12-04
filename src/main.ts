import { createApp } from 'vue'
import router from './router';
import App from './App.vue';
import './assets/styles/index.less';
import 'vfonts/Lato.css' // 通用字体
import 'vfonts/FiraCode.css' // 等宽字体
createApp(App).use(router).mount('#app')
