import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import echarts from 'echarts'
import { Swipe, SwipeItem, Lazyload } from 'vant'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
