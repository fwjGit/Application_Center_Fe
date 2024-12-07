<script setup lang="ts">
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import { ref } from 'vue'
import { useLoginStore } from '../stores/login'
import { watchEffect } from 'vue'
const userName = ref<string>('')
const password = ref<string>('')
let buttonDisabled = ref<boolean>(true)
const loginStore = useLoginStore()

const loginHandler = () => {
  loginStore.loginAction({ userName: userName.value, password: password.value })
}

watchEffect(() => {
  buttonDisabled.value = userName.value.trim() === '' || password.value.trim() === ''
})

watchEffect(() => {
  if (!loginStore.isLogin) {
    alert('用户名或密码错误')
    loginStore.isLogin = true
  }
})
</script>

<template>
  <div class="container">
    <div class="loginBox">
      <span class="topLeft"></span>
      <span class="topRight"></span>
      <div class="content">
        <div class="box">
          <p>用户登录</p>
          <a-input v-model:value="userName" placeholder="请输入用户名">
            <template #prefix>
              <user-outlined />
            </template>
          </a-input>
          <a-input-password v-model:value="password" placeholder="请输入密码">
            <template #prefix>
              <LockOutlined />
            </template>
          </a-input-password>
          <a-button type="primary" @click="loginHandler" :disabled="buttonDisabled">登录</a-button>
        </div>
      </div>
      <span class="bottomLeft"></span>
      <span class="bottomRight"></span>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-image: url('@/assets/login.jpg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loginBox {
  min-width: 400px;
  min-height: 300px;
  background-color: transparent;
  opacity: 0.3;
  display: grid;
  grid-template-columns: 20px auto 20px;
  grid-template-rows: 20px auto 20px;
  border: 1px solid green;
  color: aliceblue;
}

.topLeft {
  grid-row: 1/2;
  grid-column: 1/2;
  border-top: 3px solid grey;
  border-left: 3px solid grey;
}

.topRight {
  grid-row: 1/2;
  grid-column: 3/4;
  border-top: 3px solid grey;
  border-right: 3px solid grey;
}

.bottomLeft {
  grid-row: 3/4;
  grid-column: 1/2;
  border-bottom: 3px solid grey;
  border-left: 3px solid grey;
}

.bottomRight {
  grid-row: 3/4;
  grid-column: 3/4;
  border-bottom: 3px solid grey;
  border-right: 3px solid grey;
}
.content {
  grid-row: 2/3;
  grid-column: 2/3;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  width: 300px;
  height: 200px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
}

.box >>> .ant-input-prefix {
  margin-left: 10px;
}
.box >>> .ant-input-suffix {
  margin-right: 10px;
}

.box >>> .ant-btn-primary {
  width: 100%;
}

.box >>> * {
  font-size: 1.05rem;
}

.box >>> .ant-btn-primary:disabled {
  color: white;
  background-color: gray;
}
</style>
