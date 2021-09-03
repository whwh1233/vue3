<template>
  <div>
    <h2>{{message}}</h2>
    <home></home>
    <about></about>
    <button @click="incre">增加</button>
    <h2>{{lists.length}}</h2>
  </div>
</template>

<script>
import Home from './Home.vue'
import About from './About.vue'
import {computed} from 'vue'
export default {
  data() {
    return {
      message:'我是父组件',
      lists:['n','b','c']
    }
  },

  methods:{
    incre() {
      this.lists.push('z')
    }
  },
  components:{
    Home,About
  },
  // provide:{
  //   name:message,
  //   age:19
  // }
  // 如果provide中需要引用data  则需要provide变成一个函数，而不是一个对象
  // 通过computed来实现响应式
  provide() {
    return {
      // name:this.lists.length,
      name:computed(() => this.lists.length),
      age:19
    }
  }
}
</script>

<style scoped>

</style>