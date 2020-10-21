import axios from 'axios'
// import { Message } from 'element-ui'
import qs from 'qs'
import URLs from './env-url'
// import Cookies from 'js-cookie'
import { saveErrorLog } from '@/api/reusableApi/error'

// 请求地址设置
const reqUrl = (type = '') => {
  if (!(window.XHLCUSTOM_ENV && window.XHLCUSTOM_ENV.VUE_APP_MODE)) return ''
  const env = window.XHLCUSTOM_ENV && window.XHLCUSTOM_ENV.VUE_APP_MODE
  return URLs[env + type]
}
axios.defaults.baseURL = reqUrl()

// 其他设置
axios.defaults.withCredentials = true
axios.defaults.headers = {
  'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
}
axios.defaults.transformRequest = [
  (data) => {
    data = qs.stringify(data)
    return data
  }
]
axios.defaults.timeout = 30000
// 定义多种发送配置
const ajax = axios.create({
  baseURL: reqUrl()
})
const ajaxInternational = axios.create({
  baseURL: reqUrl('international')
})

const responseInterceptorError = async (error) => {
  if (error && error.response) {
    // 记录错误日志
    saveErrorLog({
      name: `ERR_STATUS ${error.response.request.responseURL}`,
      msg: error.response.data || error
    })
  }
  // 记录错误日志
  if (error && !error.response && error.message) {
    saveErrorLog({
      name: 'ERR_MESSAGE',
      msg: error
    })
  }
  console.error(error)
  return error
}
const responseInterceptorSuccess = async (response) => {
  return response
}

[ajax, ajaxInternational].forEach(item => {
  item.interceptors.response.use(responseInterceptorSuccess, responseInterceptorError)
})

const util = {
  ajax,
  ajaxInternational
}

export default util
