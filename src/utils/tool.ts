// 存储token到浏览器localStorage
export const cacheToken = (token: string, userName: string) => {
  window.localStorage.setItem('token', token)
}

// 清除token
export const removeToken = () => {
  window.localStorage.removeItem('token')
}

// 跨域通过webSocket发送token
export const sendToken = ({ host, port }: { host: string; port: string }) => {
  const socket = new WebSocket(`ws://${host}:${port}/detail?socketId=sso${Date.now()}`)
  socket.onmessage = (event) => {
    socket.send(JSON.stringify({ token: localStorage.getItem('token') }))
    socket.close()
  }
}
