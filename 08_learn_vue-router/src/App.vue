<template>
  <div id="app">
    <!-- <router-link>的其他参数：replace （即不可以返回） -->
    <!-- active-class 被激活时候的样式 默认是 router-link-active -->
    <router-link to="/home" active-class="why">首页</router-link>
    <router-link to="/about" active-class="why" replace>关于</router-link>
    <!-- :to to 也可以进行动态绑定 -->
    <router-link to="/user/kobe/id/123" active-class="why" replace>用户</router-link>
    <router-view></router-view>

    <!-- 编程式跳转 -->
    <button @click="jumpToAbout">
      guanyu
    </button>
    <!-- 当匹配到不存在的路由时，显示某一个组件 -->
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  setup() {
    const router = useRouter()
    const jumpToAbout = () => {
      // router.push('/about')
      router.push({
        path: '/about',
        query: {
          name: 'why',
          age: '18'
        }
      })
    }
    return { jumpToAbout }
  }
  // methods: {
  //   jumpToAbout() {
  //     console.log('About')
  //     console.log(this.$router.push('/about'))
  //   }
  // }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* router-link-exact-acitve  包含子组件的精准匹配 */
.router-link-active {
  color: pink;
}
.why {
  color: pink;
}
</style>
