import Vue from 'vue'
import App from './App.vue'
import edpGlobal from './index.js'
Vue.use(edpGlobal)
new Vue({
  el: '#app',
  render: h => h(App)
})
