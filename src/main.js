import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import {routes} from './routes';
import store from './store/store';

Vue.config.productionTip = false
Vue.use(VueRouter);

Vue.filter('sign', (value) => {
  return '$' + value.toLocaleString();
});

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
