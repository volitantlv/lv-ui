import Vue from 'vue'
import App from './App.vue'
import LvUi from 'lvcx-ui'
Vue.config.productionTip = false
Vue.use(LvUi)
new Vue({
  render: h => h(App)
}).$mount('#app')
