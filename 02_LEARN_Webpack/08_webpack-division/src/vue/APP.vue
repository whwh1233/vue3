<style scoped>
h2 {
  color: red;
}
</style>

<template>
  <div>
    <h2>我是shishishishiapp.vue文件</h2>
    <hello-world></hello-world>
    <h2>欢迎光临</h2>
  </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue'
export default {
  data() {
    return {
      message: '我是模板文件 APP.vue'
    }
  },
  components: {
    HelloWorld
  },
  methods: {}
}
</script>
