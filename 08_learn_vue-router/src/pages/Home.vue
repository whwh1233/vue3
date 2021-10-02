<template>
  <div>
    <h2>Home</h2>
    <h2>我是首页hahhaha</h2>
    <router-view></router-view>

    <router-link to="/home/message">消息</router-link>
    <router-link to="/home/shops">商品</router-link>
  </div>
</template>

<script>
export default {}
</script>
<style scoped>
.router-link-active {
  color: pink;
}
</style>
