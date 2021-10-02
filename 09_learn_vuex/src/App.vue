<template>
  <div>
    <h2>{{ $store.state.counter }}</h2>
    <button @click="add">+1</button>
    <button @click="sub">-1</button>
    <home></home>
  </div>
</template>

<script>
import Home from './pages/Home.vue'
export default {
  name: 'App',
  data() {
    return {
      message: 'hello vuex'
    }
  },
  components: {
    Home
  },
  methods: {
    add() {
      // commit 提交 mutation
      this.$store.commit('add')
    },
    sub() {
      this.$store.commit('sub')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
