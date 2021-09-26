
<template>
  <div>
    <h3>{{info.name}}</h3>
    <button @click="changeInfo">修改age</button>
  </div>
</template>

<script>
import { shallowRef,ref, triggerRef } from 'vue'

export default {
  setup() {
    // 浅层的响应式
    const info = shallowRef({
      name:'wh',
      age:'18'
    })
    const changeInfo = () => {
      info.value.name = 'james'
      // 强制响应式
      triggerRef(info)
    }
    return {
      info,
      changeInfo
    }
  }
}
</script>