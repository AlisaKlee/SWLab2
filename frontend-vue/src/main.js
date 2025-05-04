import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/styles.scss';  // oder wo deine styles.scss liegt

createApp(App).use(router).mount('#app');