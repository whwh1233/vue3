<template>
  <div>
    <h2>{{ info.name }}</h2>
    <h2>{{ info.age }}</h2>
    <h2>{{ name }}</h2>
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
      age: 18
    })
    let name = ref('wh')
    const changeData = () => {
      info.name = 'whywhy'
      name.value = 'whwh1233'
    }
    watch([name, info], (newValue, oldValue) => {
      console.log(newValue)
      console.log(oldValue)
    })

    return {
      info,
      changeData,
      name
    }
  }
}
</script>

<style scoped></style>
