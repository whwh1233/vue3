<template>
  <div>
    <h3>{{title}}</h3>
    <h3>{{big}}</h3>
    <button @click="foo">测试mixin的button</button>
    <h3>{{message}}</h3>
  </div>
</template>

<script>
import {demoMixin} from './mixins/demoMixin'
// mixin 的合并规则
// 如果 mixin 的选项和组件中的选项发生了冲突
// data 冲突，保留组件
// 生命周期： 组件在mixin之后调用，两个生命周期都会被调用，相当于放入了一个数组，依次调用
// methods（对象类型、也包括computed）：保留组件 
// 全局混入将会影响每一个组件
export default {
  mixins:[demoMixin],
  data() {
    return {
      title:'学习mixin',
      message:'我是优先级'
    }
  },
  methods:{
    foo() {
      console.log('我优先级')
    }
  },
  created() {
    console.log('我哦是优先级')
  }
}
</script>

<style scoped>

</style>