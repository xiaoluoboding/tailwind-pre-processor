import Vue from 'vue'

import 'normalize.css'
import '@/assets/styles/tailwindless.css'
// import '@/assets/styles/index.less'

import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
