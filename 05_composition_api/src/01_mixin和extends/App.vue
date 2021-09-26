<template>
  <div>
    <home></home>
  </div>
</template>

<script>
//  Options API  转换成 Composition API
//  只需要编写一个  setUp()
//  不需要编写 data methods computed created watch
import Home from './pages/Home.vue'
export default {
  components:{
    Home
  }
}
</script>