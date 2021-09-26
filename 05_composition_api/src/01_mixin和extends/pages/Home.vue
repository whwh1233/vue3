<template>
  <div>
    <button @click="bar">测试extends的bar</button>
    <h3>{{title}}</h3>
  </div>
</template>

<script>
import BasePage from './BasePage.vue'
export default {
  extends:BasePage  
}
</script>

<style scoped>

</style>