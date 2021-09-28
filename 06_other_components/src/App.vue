<template>
  <img alt="Vue logo" src="./assets/logo.png" />
</template>

<script>
import { getCurrentInstance } from 'vue'
export default {
  name: 'App',
  mounted() {
    console.log(this.$name)
  },
  //  在setup 里拿到 插件中定义的 config.globalProperties
  setup() {
    const instance = getCurrentInstance()
    console.log(instance.appContext.config.globalProperties.$name)
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
