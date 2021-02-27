import Vue from 'vue'
import App from './App.vue'
import router from '@/router'

Vue.config.productionTip = false

import Typenav from '@/components/Typenav'
Vue.component('Typenav',Typenav)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
