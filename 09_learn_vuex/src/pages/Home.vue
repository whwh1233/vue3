<template>
  <div>
    <h2>当前计数：{{ $store.state.counter }}</h2>
    <button @click="add">+1</button>
    <button @click="sub">-1</button>
    <button @click="addAction">+1</button>
    <button @click="subAction">-1</button>
    <button @click="addOther">+1</button>
    <button @click="subOther">-1</button>
    <Show :counter="$store.state.counter"></Show>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { mapActions, useStore } from 'vuex'
import Show from './Show.vue'
import axios from 'axios'
export default {
  setup() {
    // 组件如何知道请求是否结束了
    const store = useStore()
    onMounted(() => {
      const promise = store.dispatch('getHomeMultiData')
      promise // res 是 resolve中传递的参数
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    })
    // const actions = mapActions(['addAction', 'subAction'])
    // const actions2 = mapActions({
    //   addOther: 'addAction',
    //   subOther: 'subAction'
    // })
    // return { ...actions, ...actions2 }
  },
  components: {
    Show
  }
  // mounted() {
  //   this.$store.dispatch('getHomeMultiData')
  // }
}
</script>

<style scoped></style>
