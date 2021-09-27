<template>
  <div>
    <h2>Hello World</h2>
    {{ message }}
  </div>
</template>

<script>
import { ref, onMounted, onUpdated, onActivated } from 'vue'
// 直接导入 onX 来导入生命周期钩子函数
// 然后调用 传入回调函数
export default {
  setup() {
    console.log('setup')
    const message = ref('title')
    // 多个生命周期 会依次调用
    // 方便 hooks 的封装 mixin
    // 没有了 beforeCreate 和 created 的生命周期
    // 直接在 setup 中执行就可以
    onMounted(() => {
      console.log('mounted')
    })
    setTimeout(() => {
      message.value = '123123123'
    }, 2000)
    onUpdated(() => {
      console.log('Updated')
    })
    return { message }
  }
}
</script>

<style scoped></style>
