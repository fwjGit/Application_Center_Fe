import { defineStore } from 'pinia'
import { logout } from '@/services/login'
import { queryUserName } from '@/services/detail'
import { useRouter } from 'vue-router'
import { removeToken } from '@/utils/tool'
import { ref } from 'vue'

export const useDetailStore = defineStore('detail', () => {
  const router = useRouter()
  const userName = ref('')

  const logoutAction = async () => {
    let result: { code?: number; data?: any } = await logout()
    if (result?.code && result?.code === 200) {
      removeToken()
      router.push({ path: '/login' })
    } else {
      alert('退出失败，请重试')
    }
  }

  const queryUserNameAction = async () => {
    let result: { code?: number; data?: any; msg?: string } = await queryUserName()
    if (result?.code && result?.code === 200) {
      userName.value = result.data.userName
    } else {
      alert(result.msg)
    }
  }

  return { logoutAction, queryUserNameAction, userName }
})
