/**
 * axios的二次封装
 */
import axios from 'axios'

const request = axios.create({
  baseURL:
    'https://www.fastmock.site/mock/f750b31e484c24ecb91b679f1bebc92f/api',
  timeout: 5000,
})
/**
 * 请求拦截器
 */
request.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = 'Bearer ' + token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

/**
 * 响应拦截器
 */
request.interceptors.response.use(config => {
  const { data, code, msg } = config.data
  return {
    data,
    code,
    msg,
  }
})

export default request
