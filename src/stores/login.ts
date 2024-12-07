import { defineStore } from 'pinia'
import { login } from '@/services/login'
import { useRouter } from 'vue-router'
import { cacheToken } from '@/utils/tool'
import { ref } from 'vue'
import CryptoJS from 'crypto-js'

export const useLoginStore = defineStore('login', () => {
  const isLogin = ref(true)
  const router = useRouter()

  const loginAction = async (params: { userName: string; password: string }) => {
    const { userName, password } = params
    let result: { code?: number; data?: any } = await login({
      userName,
      password: CryptoJS.SHA256(password).toString(CryptoJS.enc.Base64),
    })

    if (result?.code && result?.code === 200) {
      const { token } = result.data
      cacheToken(token, params.userName)
      isLogin.value = true
      router.push({ path: '/detail' })
    } else {
      isLogin.value = false
    }
  }

  return { isLogin, loginAction }
})
