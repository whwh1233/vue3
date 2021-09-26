<template>
  <div class="app">
    <input type="number" step="100" v-model="counter">
    <h3>{{counter}}</h3>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
  data() {
    return {
      counter:0,
      showNumber:0
    }
  },
  copmuted:{
    showCounter() {
      return this.showNumber;
    }
  },
  watch:{
    counter(newValue){
      gsap.to(this,{
        duration:1,
        showNumber:newValue
      })
    }
  }


}
</script>

<style scoped>

</style>
