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
import { mapActions } from 'vuex'
import Show from './Show.vue'
import axios from 'axios'
export default {
  // methods: {
  //   add() {
  //     // this.$store.dispatch('addAction')
  //     this.$store.dispatch('getHomeMultiData', { counter: 100 })
  //   },
  //   sub() {
  //     // this.$store.dispatch('subAction', { name: 'whu' })
  //     // 派发风格：对象类型
  //     this.$store.dispatch({
  //       type: 'subAction'
  //     })
  //   },
  //   ...mapActions(['addAction', 'subAction']),
  //   ...mapActions({
  //     addOther: 'addAction',
  //     subOther: 'subAction'
  //   })
  // },
  setup() {
    const actions = mapActions(['addAction', 'subAction'])
    const actions2 = mapActions({
      addOther: 'addAction',
      subOther: 'subAction'
    })
    return { ...actions, ...actions2 }
  },
  components: {
    Show
  },
  mounted() {
    this.$store.dispatch('getHomeMultiData')
    // axios.get('http://123.207.32.32:8000/home/multidata').then(res => {
    //   console.log(res.data.data.banner.list)
    //   this.$store.commit('addBannerData', res.data.data.banner.list)
    // })
  }
}
</script>

<style scoped></style>
