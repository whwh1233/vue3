<template>
  <div>
    <h2>当前计数：{{ $store.state.counter }}</h2>
    <button @click="add">+1</button>
    <button @click="sub">-1</button>
    <Show :counter="$store.state.counter"></Show>
  </div>
</template>

<script>
import Show from './Show.vue'
import axios from 'axios'
export default {
  methods: {
    add() {
      // this.$store.dispatch('addAction')
      this.$store.dispatch('getHomeMultiData', { counter: 100 })
    },
    sub() {
      // this.$store.dispatch('subAction', { name: 'whu' })
      // 派发风格：对象类型
      this.$store.dispatch({
        type: 'subAction'
      })
    }
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
