require('./bootstrap');
window.Vue = require('vue');

import App from './components/App'
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import {routes} from './routes';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Login from './components/Home/Login';
import Dashboard from './components/Home/Dashboard'
import Callback from './components/Home/Callback';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

let router = new VueRouter({
    mode: 'history',
    routes:  [
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                guest: true
            }
        },
        {
            path: '/',
            name: 'Callback',
            component: Callback
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard,
            meta: {
                requiresAuth: true
            }
        },
    ]
});

// router.beforeEach((to, from, next) => {
//     if(to.matched.some(record => record.meta.requiresAuth)) {
//         if (localStorage.getItem('token') == null) {
//             next({
//                 path: '/login',
//                 params: { nextUrl: to.fullPath }
//             })
//         } else {
//             next({ name: 'dashboard'})
//         }
//     } else if(to.matched.some(record => record.meta.guest)) {
//         if(localStorage.getItem('token') == null){
//             next()
//         }
//         else{
//             next({ name: 'dashboard'})
//         }
//     }else {
//         next()
//     }
// })

const app = new Vue({
    el: '#root',
    router: router,
    render: h => h(App),
});
