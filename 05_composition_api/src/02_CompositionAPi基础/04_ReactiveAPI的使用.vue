<template>
  <div>
    <h3>{{message}}</h3>
    <h3>{{title}}</h3>
    <h3>当前计数：{{state.counter}}</h3>
    <button @click="increment">+++</button>
  </div>
  
</template>

<script>
import {reactive} from 'vue'
export default {

  // props,父组件传递过来的属性
  // setup 函数有哪些返回值 
  // 
  // setup的返回值可以在模板的template中被使用
  // 也就是说 我们可以用setup的返回值 替代 data 选项,而且必须返回对象
 
  setup() {
    // reactive 必须传入对象或数组
    const state = reactive({
      counter:100
    })
    const increment = () => {
      console.log('++++')
      state.counter++
      console.log(state.counter)

    }
    return {
      title:'hello home',
      state,
      increment,
    }
  },
  props:{
    message:{
      type:String,
      default:'whhwh123',
      required:true
    }
  },
  
}
</script>