<template>
  <div>
    <h2>首页</h2>
    <Home></Home>
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
