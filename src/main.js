import Vue from 'vue'
import VueFire from 'vuefire'
import VueRouter from 'vue-router'


import { app } from './config/db'

import App from './App.vue'
import store from './store'
import Dashboard from './components/Dashboard.vue'
import Signin from './components/Signin.vue'
import Signup from './components/Signup.vue'
import EditEvent from './components/EditEvent.vue'





import '../node_modules/nprogress/nprogress.css'

Vue.use(VueFire)
Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [

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
  },
  {
    name: 'EditEvent',
    path: '/EditEvent/:id',
    component: EditEvent
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
