<template>
  <div>
    <h2>App</h2>
    <Home></Home>
    <button @click="increment">+++</button>
  </div>
</template>

<script>
import Home from './Home.vue'
import { provide, ref, readonly } from 'vue'
export default {
  setup() {
    const counter = ref(100)
    const name = ref('why')
    provide('name', readonly(name))
    provide('counter', readonly(counter))
    // provide('counter', counter)
    const increment = () => {
      counter.value++
    }
    return {
      increment
    }
  },
  components: {
    Home
  }
}
</script>

<style scoped></style>
