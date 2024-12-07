<script setup lang="ts">
import SubApp from '@/components/SubApp.vue'
import { ref, reactive } from 'vue'
import App1 from '@/assets/app1.jpeg'
import App2 from '@/assets/app2.jpg'
import App3 from '@/assets/app3.jpeg'
import { useDetailStore } from '@/stores/detail'
import UserLogo from '@/components/UserLogo.vue'
import { onMounted } from 'vue'
import { sendToken } from '@/utils/tool'
import { host, port } from '@/utils/utils'
const list = ref<{ title: string; src: any }[]>([
  {
    title: 'App 1',
    src: App1,
  },
  {
    title: 'App 2',
    src: App2,
  },
  {
    title: 'App 3',
    src: App3,
  },
])

const urlList = reactive({
  'App 1': 'http://localhost:5174',
  'App 2': 'https://www.google.com/',
  'App 3': 'https://www.taobao.com/',
})

const clickHandler = (e) => {
  const key = e.target.innerText || e.target.alt

  sendToken({ host, port })

  window.open(urlList[key])
}

const detailStore = useDetailStore()

onMounted(() => {
  detailStore.queryUserNameAction()
})
</script>

<template>
  <div class="container">
    <div class="header">
      <UserLogo :user-name="detailStore.userName" @click-handler="detailStore.logoutAction" />
    </div>
    <div class="content">
      <sub-app v-for="{ title, src } in list" :title="title" @click="clickHandler">
        <img :src="src" :alt="title" width="100px" height="100px" />
      </sub-app>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px auto;
}

.header {
  background-color: black;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
}

.content {
  grid-row: 2/3;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  gap: 50px;
}
</style>
