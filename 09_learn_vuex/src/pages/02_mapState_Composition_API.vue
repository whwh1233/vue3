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
import { mapState, useStore } from 'vuex'
import { computed } from 'vue'
export default {
  setup() {
    const store = useStore()
    const sCounter = computed(() => store.state.counter)
    // 展开运算符 是展开的 键值对  值是function ，所以...storeState得到了四个函数
    // 这个函数 正好可以被 computed 包裹，返回值给到对应的变量就可以了
    const storeState = mapState(['counter', 'age', 'name', 'height'])
    const storeFn = []
    // name:function,age:function,height:function
    // => name:ref,age:ref,height:ref
    Object.keys(storeState).forEach(fnKey => {
      const fn = storeState[fnKey].bind({ $store: store })
      storeFn[fnKey] = computed(fn)
    })
    return { sCounter, ...storeFn }
  }
}
</script>
