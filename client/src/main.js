import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import VueRouter from 'vue-router';
require('dotenv').config();

Vue.use(VueRouter);
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

const base = axios.create({
    baseURL: process.env.VUE_APP_API_URL
});
Vue.prototype.$http = base;

import HomeComponent from './components/HomeComponent.vue';
import LoginComponent from './components/account/LoginComponent.vue';
import RegisterComponent from './components/account/RegisterComponent.vue';

const routes = [
  {
      name: 'home',
      path: '/',
      component: HomeComponent,
      meta: {
          requiresAuth: true
      }
  },
  {
      name: 'login',
      path: '/login',
      component: LoginComponent
  },
  {
      name: 'register',
      path: '/register',
      component: RegisterComponent
  }
];

const router = new VueRouter({ mode: 'history', routes: routes});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (localStorage.getItem("jwt") == null) {
        next({
          path: "/"
        });
      } else {
        next();
      }
    } else {
      next();
    }
  });

new Vue(Vue.util.extend({ router }, App)).$mount('#app');