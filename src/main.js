import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/element-variables.scss'
import '@/styles/index.scss' // global css
import {
  errMessage,
  sucMessage
} from '@/utils/message'
Vue.prototype.errMessage = errMessage
Vue.prototype.sucMessage = sucMessage

import App from './App'
import store from './store'
import router from './router'
import Pagination from './components/Pagination'
import '@/icons' // icon
import '@/permission' // permission control

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
// if (process.env.NODE_ENV === 'production') {
//   const { mockXHR } = require('../mock')
//   mockXHR()
// }

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.component("Pagination", Pagination);
import Sticky from "@/components/Sticky";
Vue.component("Sticky", Sticky);
import Upload from "@/components/Upload";
Vue.component("Upload", Upload);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
