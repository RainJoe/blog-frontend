// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'muse-ui/lib/styles/base.less'
import { Button, Select } from 'muse-ui'
import 'muse-ui/lib/styles/theme.less'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(Button)
Vue.use(Select)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
