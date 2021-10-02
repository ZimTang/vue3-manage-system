/**
 * axios的二次封装
 */
import axios from "axios";

const request = axios.create({
  baseURL: 'http://',
  timeout: 5000
})

request.interceptors.request.use(req => {

})

request.interceptors.response.use(res => {
  const { data, code, msg } = res
  return res
})

export default request