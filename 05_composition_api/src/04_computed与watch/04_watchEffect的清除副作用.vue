<template>
  <div>
    <h2>{{ name }} - {{ age }}</h2>
    <button @click="changeName">修改name</button>
    <button @click="changeAge">修改age</button>
  </div>
</template>

<script>
import { ref, watchEffect, watch } from 'vue'
export default {
  // watchEffect 会自动收集响应式的依赖
  // watch 需要手动指定响应式的依赖
  setup() {
    const name = ref('why')
    const age = ref(18)
    const changeName = () => (name.value = 'whywhy')
    const changeAge = () => {
      age.value++
      // 满足一定的条件，停止侦听
      if (age.value > 25) stop()
    }
    const stop = watchEffect(oninvalidate => {
      const timer = setTimeout(() => {
        console.log('请求成功')
      }, 1000)
      oninvalidate(() => {
        // 在这个函数中，清楚额外的副作用
        // 比如说取消额外的网络请求
        // request.cancel()
        // 多次改变时候，会被调用
        clearTimeout(timer)
        console.log('-------')
      })
      // 根据 name 与 age 两个变量发送网络请求
      console.log(name.value, age.value)
    })
    return {
      name,
      age,
      changeName,
      changeAge
    }
  }
}
</script>

<style scoped></style>
