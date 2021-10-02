<template>
  <div id="app">
    <!-- <router-link>的其他参数：replace （即不可以返回） -->
    <!-- active-class 被激活时候的样式 默认是 router-link-active -->
    <!-- router-link 可以写组件，甚至可以写多个元素 -->
    <!-- props 里包含很多元素 -->
    <!-- custom 完全自定义，没有了外部添加的a元素，可以使用props.navigate -->
    <!-- props:isActive -->
    <!-- props:isExactActive  是否精确匹配 -->
    <!-- v-slot是作用域插槽 -->
    <!-- v-slot="props" custom -->
    <router-link to="/home" active-class="why">
      <!-- <nav-bar title="首页"></nav-bar> -->
      <!-- <button>{{ props.href }}</button>
      <button @click="props.navigate">导航函数</button>
      可以用来添加动态class 
      <p>{{ props.isActive }}</p>
      <p>{{ props.route }}</p>-->
      <span>哈哈哈</span>
    </router-link>
    <router-link to="/about" active-class="why" replace>关于</router-link>
    <!-- :to to 也可以进行动态绑定 -->
    <router-link to="/user/kobe/id/123" active-class="why" replace>用户</router-link>
    <router-link to="/category" active-class="why" replace>分类</router-link>
    <router-link to="/login" active-class="why" replace>登录</router-link>

    <!-- r如果 router-view 想 加上动画，需要使用 transition 包裹操作 -->
    <router-view v-slot="props">
      <transition name="why">
        <keep-alive>
          <component :is="props.Component"></component>
        </keep-alive>
      </transition>
    </router-view>

    <!-- 编程式跳转 -->
    <button @click="jumpToAbout">
      guanyu
    </button>
    <button @click="forwardOneStep">前进一步</button>
    <!-- 当匹配到不存在的路由时，显示某一个组件 -->
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import NavBar from './components/NavBar.vue'
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
    const forwardOneStep = () => {
      router.go(1)
    }
    return { jumpToAbout, forwardOneStep }
  },
  components: {
    NavBar
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
.why-enter-from,
.why-leave-to {
  opacity: 0;
}
.why-enter-active,
.why-leave-active {
  /* transition: opacity 1s ease; */
}
</style>
