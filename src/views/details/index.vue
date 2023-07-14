<template>
  <div>明细</div>
  <button @click="login">登录</button>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs, onMounted, getCurrentInstance, computed } from 'vue'
import { testApi, testLogin } from '@/request/api/user'

onMounted(() => {
  testApi().then(res => {
    console.log('testApi', res)
  })
})

const login = ()=>{
  testLogin('zhangsan','123')
}

</script>
<style scoped lang="scss"></style>