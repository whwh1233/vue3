<template>
  <div>
    <h1>我是About</h1>  
    <button @click="btnClick">点击</button>
  </div>  
</template>

<script>
import emitter from './utils/eventBus'
export default {
  data() {

  },
  methods:{
    btnClick() {
      console.log('About按钮被点击了')
      emitter.emit("why",{name:'wh',age:'18'})
      // emitter.emit("kobe",{name:'kobe ',age:'18'})
    }
  }
}
</script>

<style scoped>

</style>