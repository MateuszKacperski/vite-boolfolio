import { createApp } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppLoader from './components/AppLoader.vue';

import App from './components/App.vue';
import { router } from './components/router';


const app = createApp(App)

app.component('AppLoader', AppLoader)

app.use(router)

app.mount('#app')