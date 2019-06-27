import Vue from 'vue'
import App from './App.vue'
import store from './store/Store'
import Vuetify from 'vuetify'
import './plugins/vuetify'

Vue.config.productionTip = false


Vue.use(Vuetify)

var eventHub = new Vue()
Vue.prototype.$bus = eventHub

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')
