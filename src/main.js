import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  { path: 'collection/:centuryId', component: Collections },
  { path: '/', component: Home }
];

const router = new VueRouter({
  routes,
  mode: 'history',
})

new Vue({
  el: '#app',
  render: h => h(App),
})