<template>
  <div>
    <h2>{{message}}</h2>
    <home></home>
  </div>
</template>

<script>
import Home from './Home.vue'
export default {
  data() {
    return {
      message:'我是父组件',
      lists:['n','b','c']
    }
  },
  components:{
    Home
  },
  provide:{
    name:message,
    age:19
  }
}
</script>

<style scoped>

</style>