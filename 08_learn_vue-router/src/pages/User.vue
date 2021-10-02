<template>
  <div>
    <h2>User</h2>
    <h2>number:{{ $route.params.username }}</h2>
    <h2>id:{{ $route.params.id }}</h2>
  </div>
</template>

<script>
import { created } from 'vue'
import { useRoute } from 'vue-router'
export default {
  created() {
    console.log(this.$route)
  },
  setup() {
    // 这里的route 会自动获取 当前页面的路由对象
    const route = useRoute()
    console.log('route', route)
    console.log(route.params.username)
  }
}
</script>

<style scoped></style>
