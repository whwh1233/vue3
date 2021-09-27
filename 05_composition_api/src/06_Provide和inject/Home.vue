<template>
  <div>
    <h2>{{ name }} - {{ counter }}</h2>
    <button @click="increment">子组件+++</button>
  </div>
</template>

<script>
import { inject } from 'vue'
// 子组件不应该修改 父组件 传过来的 值
export default {
  setup() {
    const name = inject('name')
    const counter = inject('counter')
    const increment = () => {
      counter.value++
    }
    return { name, counter, increment }
  }
}
</script>

<style scoped></style>
