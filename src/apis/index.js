/**
 * 网络请求的管理
 */
import request from '../utils/request'

export default doLogin = (params) => {
  return request({
    url: '/api/login',
    params
  })
}