require('./bootstrap');

import { createApp } from 'vue';
import App from './components/App.vue';
import { createRouter, createWebHashHistory } from "vue-router";

const app = createApp({});

import { routes } from './components/routes';

const router = createRouter ({
    history: createWebHashHistory(),
    routes,
})


app.use(router);

app.component('app', App);
app.mount('#app');
