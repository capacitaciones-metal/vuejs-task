import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

var eventHub = new Vue()
Vue.prototype.$bus = eventHub

new Vue({
  render: h => h(App),
}).$mount('#app')
