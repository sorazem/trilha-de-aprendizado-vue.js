import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import store from './store/store'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.config.productionTip = false

import Home from './components/Home.vue';
import Favourites from './components/Favourites.vue';

const routes = [
  {path: '/home', component: Home},
  {path: '/favourites', component: Favourites}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
