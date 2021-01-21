import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueRouter from 'vue-router';
Vue.use(VueRouter);
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

import HomeComponent from './components/HomeComponent.vue';
import LoginComponent from './components/account/LoginComponent.vue';
import RegisterComponent from './components/account/RegisterComponent.vue';

const routes = [
  {
      name: 'home',
      path: '/',
      component: HomeComponent
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

new Vue(Vue.util.extend({ router }, App)).$mount('#app');