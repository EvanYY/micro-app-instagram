import Vue from 'vue'
import App from './App.vue'

// 私有模块
import '@/plugins/Element'
// import ElementLocale from 'element-ui/lib/locale'
import i18n from '@/locale'

// 注册全局组件
import '@/plugins/custom'

// 微应用配置
import './public-path'
import store from './store'
import SharedModule from '@/shared'
import { toStore } from '@/shared/subscript-store'
import { cloneDeep } from 'lodash'
// 原型方法
import dynamicDatas from '@/utils/dynamicDatas'
const MICRO_NAME = 'MicroAppInstagram'

Vue.config.productionTip = false
Vue.prototype.$dym = dynamicDatas

let instance = null
let sharedUnsubscribe = null
window.XHLCUSTOM_ENV = {}

function render (props) {
  const { shared = SharedModule.getShared(), NODE_ENV = process.env.NODE_ENV, VUE_APP_MODE = process.env.VUE_APP_MODE } = props
  SharedModule.overloadShared(shared)
  const { common } = shared.getState()
  window.XHLCUSTOM_ENV = {
    NODE_ENV,
    VUE_APP_MODE
  }
  store.commit('MainCommon/updateMainCommon', cloneDeep(common)) // 初始化 shared module
  i18n.locale = 'zh-CN' // 初始化微应用语言系统
  sharedUnsubscribe = shared.subscribe(toStore) // 订阅主应用通信模型映射到当前应用
  instance = new Vue({
    store,
    i18n,
    render: (h) => h(App)
  }).$mount('#micro-app-instagram')
}

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap (props) {
  console.log(`${MICRO_NAME}  bootstraped`, props)
}
export async function mount (props) {
  console.log(`${MICRO_NAME}  mount`, props)
  render(props)
}
export async function unmount () {
  console.log(`${MICRO_NAME} unmount`)
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
  sharedUnsubscribe()
}
