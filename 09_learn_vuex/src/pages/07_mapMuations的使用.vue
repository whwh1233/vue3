<template>
  <div>
    <h2>当前计数：{{ $store.state.counter }}</h2>
    <button @click="add">+1</button>
    <button @click="sub">-1</button>
    <button @click="addTen">+10</button>
    <button @click="addN({ n: 2 })">+2</button>
    <button @click="subN(5)">-5</button>
    <button @click="subN(10)">-10</button>
  </div>
</template>

<script>
import { ADD_N } from '../store/mutation-types'
import { mapMutations } from 'vuex'
// mutation 传递参数
export default {
  setup() {
    const storeMutations = mapMutations(['add', 'sub', 'subN', ADD_N])
    return { ...storeMutations }
  }
  // methods: {
  //   addTen() {
  //     this.addN({ n: 10 })
  //   },

  //   ...mapMutations(['add', 'sub', ADD_N, 'subN'])
  // }
}
</script>

<style scoped></style>
