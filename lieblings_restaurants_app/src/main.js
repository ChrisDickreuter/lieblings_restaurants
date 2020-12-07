import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueOffline from 'vue-offline'

Vue.config.productionTip = false

const moment = require('moment')
require('moment/locale/de')

Vue.use(require('vue-moment'), {
    moment
})
Vue.use(VueOffline)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
