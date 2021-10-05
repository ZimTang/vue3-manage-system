/**
 * 网络请求的管理
 */
import request from '../utils/request'

export const doLogin = params => {
  return request({
    url: '/users/login',
    method: 'post',
    params,
  })
}

export const getSideBar = () => {
  return request({
    url: '/getSide',
    method: 'get',
  })
}

export const getTable = () => {
  return request({
    url: '/getTable',
    method: 'get',
  })
}
