import Vue from 'vue'
import App from './App'
import './icon/iconfont.css'
import store from '@/components/store/store'

Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$store = store

const app = new Vue(App)
app.$mount()
