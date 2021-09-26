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
    const stop = watchEffect(() => {
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
