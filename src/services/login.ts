import request from '../utils/request'

// 登录
export const login = function (data: { userName: string; password: string }) {
  let url = `/api/login#${Date.now()}`
  console.log(url)
  return request.post(url, data)
}

// 退出登录
export const logout = function () {
  return request.get('/api/logout')
}
