import Vue from 'vue'

import 'normalize.css'
// import '@/assets/styles/less/tailwindless.css'
// import '@/assets/styles/stylus/tailwindstylus.css'
import '@/assets/styles/sass/tailwindsass.css'
// import '@/assets/styles/index.less'

import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
