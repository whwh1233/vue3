<template>
<div>
    <div>{{message}}</div>  
  <h2>{{counter}}</h2>
  <counter-operation @add="addOne" @sub="subOne" @addN="addNum"></counter-operation>
</div>
</template>

<script>
import CounterOperation from './CounterOperation.vue'

export default {
  data() {
    return {
      message:'根组件',
      counter:0
    }
  },
  components:{
    CounterOperation
  },
  methods:{
    addOne() {
      this.counter++
    },
    subOne() {
      this.counter--
    },
    addNum(num,age) {
      console.log(num,age)
      this.counter += num
    }
  }
}
</script>

<style scoped>

</style>