<template>
  <div>
    <!-- 绑定ref 可以取到DOM -->
    <h2 ref="title">哈哈哈</h2>
    <button @click="btnClick">按钮</button>
    <nav-bar ref="navbar"></nav-bar>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
export default {
  data() {
    return {
      name:['a','b','c']
    }
  },
  components:{
    NavBar
  },
  methods:{
    btnClick() {
      console.log('按钮被点击了')
      console.log(this.$refs.title.innerHTML)
      console.log(this.$refs.navbar.message)
      console.log(this.$refs.navbar.haha)
      console.log(this.$refs.navbar.$el)
    }
  }
}
</script>

<style scoped>

</style>