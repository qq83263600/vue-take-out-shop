import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import axios from 'axios'
import {Button} from "mint-ui";
import './fiters/index'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './mocks/mockServer';//加载mockserver

import loading from './assets/img/common/abcd.jpg'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  loading
})

Vue.use(ElementUI);

Vue.config.productionTip = false

Vue.component(Button.name,Button)
// Vue.component(MessageBox.name,MessageBox)

// axios.defaults.baseURL='http://localhost:4000/'
// axios.defaults.baseURL='api/'
// Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
