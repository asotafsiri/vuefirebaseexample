import Vue from 'vue'
import VueFire from 'vuefire'
import VueRouter from 'vue-router'
import NProgress from 'nprogress';

import { app } from './config/db'

import App from './App.vue'
import store from './store'
import Dashboard from './components/Dashboard.vue'
import Signin from './components/Signin.vue'
import Signup from './components/Signup.vue'

import AddItem from './components/AddItem.vue'
import EditItem from './components/EditItem.vue'
import ListItem from './components/ListItem.vue'
import Home from './components/Home.vue'

import '../node_modules/nprogress/nprogress.css'

Vue.use(VueFire)
Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
        name: 'Add',
        path: '/add',
        component: AddItem
  },
  {
      name: 'Edit',
      path: '/edit/:id',
      component: EditItem
  },
  {
      name: 'List',
      path: '/index',
      component: ListItem
  },
  {
    name: 'dashboard',
    path: '/dashboard',
    component: Dashboard
  },
  {
    name: 'signin',
    path: '/signin',
    component: Signin
  },
  {
    name: 'signup',
    path: '/signup',
    component: Signup
  }
];

const router = new VueRouter({ mode: 'history', routes: routes });

app.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch('signIn',user)
    router.push('/dashboard')
  } else {
    router.replace('/signin')
  }
})
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
}).$mount('#app')
