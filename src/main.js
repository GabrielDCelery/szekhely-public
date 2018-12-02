'use strict';

import Vue from 'vue';
import Vuetify from 'vuetify';
import router from './router';
 
Vue.use(Vuetify);

import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

import 'babel-polyfill';

import App from './App.vue';

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});