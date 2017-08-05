// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuex from 'vuex'
import $ from 'jquery' 
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap.min.js'
// import 'bootstrap.min.css'
Vue.config.productionTip = false
// Vue.use(bootstrap);
// Vue.use(jquery);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
