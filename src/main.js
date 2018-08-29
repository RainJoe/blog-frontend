// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'muse-ui/lib/styles/base.less'
import 'muse-ui/lib/styles/theme.less'
import 'muse-ui-message/dist/muse-ui-message.css'
import App from './App'
import router from './router'
import store from './store'
import { theme } from 'muse-ui'
import { carbon, createTheme } from 'muse-ui-carbon-theme/src'
// import 'iview/dist/styles/iview.css'

import { 
  Button, 
  Select,
  AppBar,
  Icon,
  Drawer,
  List,
  Grid,
  GridList,
  Form,
  TextField,
  Dialog,
  Avatar,
  Menu,
  DataTable,
  Card,
  Pagination
} from 'muse-ui'

import {
  Timeline,
  TimelineItem
} from 'iview'


Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(Button)
Vue.use(Select)
Vue.use(AppBar)
Vue.use(Icon)
Vue.use(Drawer)
Vue.use(List)
Vue.use(Grid)
Vue.use(GridList)
Vue.use(Form)
Vue.use(TextField)
Vue.use(Dialog)
Vue.use(Avatar)
Vue.use(Menu)
Vue.use(DataTable)
Vue.use(Card)
Vue.use(Pagination)
Vue.component('Timeline', Timeline)
Vue.component('TimelineItem', TimelineItem)

Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)
  })
})

theme.add('carbon', carbon).addCreateTheme(createTheme).use('carbon')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
