<script setup lang="ts">
import Login from './views/Login.vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import { ref } from 'vue'
import theme from './theme'
import { RouterView } from 'vue-router'
const locale = ref(zhCN)
</script>

<template>
  <a-config-provider
    :locale="locale"
    :theme="{
      token: theme,
    }"
  >
    <div class="container">
      <RouterView />
    </div>
  </a-config-provider>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat('auto-fill', 100%);
  grid-template-rows: repeat('auto-fill', 100%);
}
</style>
