
import axios from 'axios'
const ajax = axios.create({
  baseURL: 'https://open.duyiedu.com/',
  params: {
    appkey: 'sunQ_1606746390841'
  }
})
ajax.interceptors.response.use(function (config) {
  // 在发送请求之前做些什么
  if (config.data.msg === '成功') {
    return config.data.data
  } else {
    return config.data
  }
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})
export default ajax
