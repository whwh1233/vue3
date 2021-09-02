<template>
  <div>
    <h2>{{message}}</h2>
    <h2>{{name}}</h2>
    <h2>{{age}}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message:'我是HomeContent'
    }
  },
  inject:["name","age"]
}
</script>

<style scoped>

</style>