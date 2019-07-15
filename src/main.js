import Vue from 'vue'
import 'lovue'
import 'lovue/dist/lovue.min.css'
import './style.less'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
