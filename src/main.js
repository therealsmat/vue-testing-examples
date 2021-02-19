import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import HttpFactory from './api/HttpFactory';
import './index.css'

const HttpClient = axios.create({
  baseURL: '/',
})

Vue.prototype.$http = HttpFactory(HttpClient)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
