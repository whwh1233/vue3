<template>
  <div>
    <h2>{{ $store.state.counter }}</h2>
    <button @click="add">+1</button>
    <button @click="sub">-1</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      message: 'hello vuex'
      // counter: 0
    }
  },
  methods: {
    add() {
      // this.counter++
      this.$store.commit('add')
    },
    sub() {
      this.$store.commit('sub')
      // this.counter--
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
