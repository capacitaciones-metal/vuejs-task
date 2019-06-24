import Vue from 'vue'
import App from './App.vue'
import store from './store/Store'

Vue.config.productionTip = false

var eventHub = new Vue()
Vue.prototype.$bus = eventHub

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')
