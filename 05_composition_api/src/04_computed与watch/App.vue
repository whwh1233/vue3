<template>
  <div>
    <h2>{{ info.name }}</h2>
    <h2>{{ info.age }}</h2>
    <h2>{{ info.friends }}</h2>
    <button @click="changeData">看看会不会改</button>
  </div>
</template>

<script>
import { ref, watch, reactive } from 'vue'
export default {
  setup() {
    // 定义可响应式的对象
    const info = reactive({
      name: 'why',
      age: 18,
      friends: ['a', 'b', 'cc']
    })
    const changeData = () => {
      info.friends.push('ddd')
    }
    watch(
      { ...info },
      (newValue, oldValue) => {
        console.log(newValue)
        console.log(oldValue)
      },
      { deep: true, immediate: true }
    )

    return {
      info,
      changeData
    }
  }
}
</script>

<style scoped></style>
