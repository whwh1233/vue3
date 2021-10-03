<template>
  <div>
    <h2>当前计数：{{ $store.state.counter }}</h2>
    <button @click="$store.commit('add')">+1</button>
    <button @click="$store.commit('sub')">-1</button>
    <button @click="$store.commit('addN', 10)">+10</button>
    <button @click="$store.commit('subN', 5)">-5</button>
    <button @click="addTen">+10</button>
  </div>
</template>

<script>
import { ADD_N } from '../store/mutation-types'
// mutation 传递参数
export default {
  setup() {},
  methods: {
    addTen() {
      // this.$store.commit('addN', 10)
      this.$store.commit('addN', { n: 10, name: 'why' })
      // 另外一种提交风格 ， 使用type
      this.$store.commit({ type: ADD_N, n: 10, name: 'why' })
    }
  }
}
</script>

<style scoped></style>
