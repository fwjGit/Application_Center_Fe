import request from '../utils/request'

// 查询用户名
export const queryUserName = function () {
  return request.get('/api/queryUserName')
}
