import 'babel-polyfill';

import Vue from 'vue';
import store from './store';
const router = require('./router');
import App from './App.vue';

window.VM = new Vue({
    el: '#app',
    render: h => h(App),
    store,
    router,
});


