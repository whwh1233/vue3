<template>
  <div>
    <h2>我是category</h2>
    <h2>{{counter}}</h2>
    <button @click="counter++">++++</button>
  </div>
</template>

<script>
export default {
  name:'category',
  data() {
    return {
      counter: 0
    }
  }
}
</script>

<style scoped>

</style>