require('./bootstrap');

window.Vue = require('vue');
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify);
import  User from './Helpers/User'
Window.User = User;

window.EventBus = new Vue();

Vue.component('AppHome', require('./components/AppHome').default);
import router from './Router/router'

const app = new Vue({
    el: '#app',
    router
});
