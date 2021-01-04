import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant'
import './assets/css/global.css'
import product from './views/product_detail'
import axios from 'axios'; 

Vue.config.productionTip = false
Vue.component('product', product)
Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
