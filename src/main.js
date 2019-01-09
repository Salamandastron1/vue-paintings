import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue';
import Home from './components/Home.vue';
import Photos from './components/Photos.vue';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/century/:id', component: Photos, props: true, }
];

const router = new VueRouter({
  routes,
  mode: 'history',
})

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})