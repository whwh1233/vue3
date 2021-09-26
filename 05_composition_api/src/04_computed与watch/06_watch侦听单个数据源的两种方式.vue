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
    // watch 是惰性的，需要指定数据源，
    // 1.第一次不会执行
    // 2.具体说明那个状态发生了变化
    // 3.访问侦听前后的值

    // 只能传入两种参数
    // 1.传入一个 getter 函数，即侦听 reactive 中的某个属性
    // 2.传入一个可响应对象， ref 对象 / reactive 对象，
    // 2.1 reactive对象 返回值newValue,oldValue也是响应式对象
    const info = reactive({
      name: 'why',
      age: 18
    })
    let name = ref('wh')
    // 2.2 ref 对象返回的是value 值本省
    const changeData = () => {
      info.name = 'whywhy'
      name.value = 'whwh1233'
    }
    watch(name, (newValue, oldValue) => {
      console.log(newValue)
      console.log(oldValue)
    })
    // 2.1.2 使用解构也可以让 reactive 对象返回的 newValue 和 oldValue 变成普通的对象
    watch(
      // () => info.name,
      () => {
        return { ...info }
      },
      (newValue, oldValue) => {
        console.log(newValue)
        console.log(oldValue)
      }
    )
    return {
      info,
      changeData,
      name
    }
  }
}
</script>

<style scoped></style>
