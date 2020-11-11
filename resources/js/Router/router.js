import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login/Login'
import Logout from '../components/Login/Logout'
import Register from '../components/Login/Register'
import Forum from '../components/Forum/Forum'
Vue.use(VueRouter);
const routes = [
    { path: '/login', component: Login },
    { path: '/logout', component: Logout },
    { path: '/forum', component: Forum, name: 'forum' },
    { path: '/register', component: Register }
];

const router = new VueRouter({
    routes, // short for `routes: routes`,
    mode: 'history'
});


export default router
