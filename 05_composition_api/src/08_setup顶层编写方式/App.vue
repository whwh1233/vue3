<template>
  <div>
    <h2>当前计数:{{counter}}</h2>
    <button @click="incre">+++</button>
    <hello-world message="whwh2333" @increment="getCounter"></hello-world>
  </div>
</template>


<script setup>
// 实验性的setup 的 顶层写法
import {ref} from 'vue'

// 报错注释
// import HelloWorld from './HelloWorld.vue'
const counter = ref(100)
const incre = () => {
  counter.value ++
}
const getCounter = (payload) => {
  console.log(payload)
}
</script>

<style scoped>

</style>