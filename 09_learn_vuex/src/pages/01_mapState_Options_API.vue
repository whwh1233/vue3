<template>
  <div>
    <h2>Home:{{ counter }}</h2>
    <h2>Home:{{ sCounter }}</h2>
    <h2>Home:{{ name }}</h2>
    <h2>Home:{{ age }}</h2>
    <h2>Home:{{ height }}</h2>
    <h2>Home:{{ sCounter }}</h2>
  </div>
</template>

<script>
// 对 state 做一个映射，mapState的辅助函数
import { mapState } from 'vuex'
export default {
  computed: {
    sCounter() {
      return this.$store.state.counter
    },
    // 不能一直这么写啊 太多了
    // 其他计算属性
    ...mapState(['counter', 'name', 'age', 'height']),
    // 也可以传入一个对象,键值对，可以重命名
    ...mapState({
      sCounter: state => state.counter
    })
  }
  // 如果没有其他的计算属性的话 可以直接这么写
  // computed:mapState(["counter","name","age","height"])
}
</script>
