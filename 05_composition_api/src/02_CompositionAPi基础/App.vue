<template>
  <div>
    <home :message="'hahahahha'"  id="123"></home>
  </div>
  
</template>

<script>
import Home from './Home.vue'
export default {
  // setup 函数有哪些参数  props,context
  // setup 函数有哪些返回值 
  // setup 不可以使用this，他不指向组件实例
  // setup 的调用发生在 data methods computed解析之前
  setup() {

  },
  components:{
    Home
  }
}
</script>