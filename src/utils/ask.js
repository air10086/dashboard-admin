import api from '../api'
import axios from 'axios'
import qs from 'qs'

const base = ''

export default function ask(name, opt = {}, baseURL = base) {
  //获取传进来的用户信息
  let { headers, data, params, responseType, path } = opt
  params = params || {}
  data = data || {}

  params = Object.assign(
    {},
    {
      // 请求令牌
      // token
      // userId
    },
    params,
  )

  data = qs.stringify(data, {
    skipNulls: true,
  })

  /**
   * 获取接口信息
   * 如果后期涉及到权限
   * 可以在接口信息里面
   * 设定 并取到
   */
  let { method = 'get', url, ...rest } = api[name]
  if (rest.baseURL !== void 0) {
    baseURL = rest.baseURL
  }
  if (url[0] !== '/') {
    url = `/${url}`
  }
  if (path) {
    url = `${url}/${path}`
  }
  method = method.toUpperCase()
  const defaultHeader = {}
  let instance = axios.create({
    baseURL,
    // `withCredentials` 表示跨域请求时是否需要使用凭证
    // withCredentials: true,
  })

  instance.interceptors.request.use(
    request => {
      return request
    },
    (error, promise) => {
      console.log(error)
      promise.reject(error)
    },
  )
  instance.interceptors.response.use(
    function (response) {
      return response.data
    },
    function (error) {
      // 请求失败 错误在此

      return Promise.reject(error)
    },
  )

  let promise = instance.request({
    responseType,
    url,
    method,
    headers: {
      ...headers,
      ...defaultHeader,
    },
    params,
    data,
  })
  return promise
}
