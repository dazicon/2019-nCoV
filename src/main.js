import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import echarts from 'echarts'
import { Swipe, SwipeItem, Lazyload, Collapse, CollapseItem, Icon } from 'vant'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Icon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
