<template>
  <div>
    <button v-for="(tab,index) in tabs" :key="index"
      @click="tabClick(index)"
    :class="{'active':currentTab === tab}">
      {{tab}}
    </button>
    <!-- 动态组件 -->
    <!-- 可以是子组件，也可以是全局注册的组件 -->
    <!-- keep-alive 缓存组件内的数据 -->
    <keep-alive include="about">
      <component :is="currentTab" name="wh" age="18" @homeClick="pageClick"></component>
    </keep-alive>
  </div>
</template>

<script>
import Home from './Home.vue'
import About1 from './About1.vue'
import Category from './Category.vue'
export default {
  data() {
    return {
      tabs:["home","about1","category"],
      currentTab:'home',

    }
  },
  components:{
    Home,Category,About1
  },
  methods:{
    tabClick(index) {
      console.log(index)
      this.currentTab = this.tabs[index]
    },
    pageClick() {
      console.log('被点击了')
    }
  }
}
</script>

<style scoped>
.active {
  color:red;
}

</style>