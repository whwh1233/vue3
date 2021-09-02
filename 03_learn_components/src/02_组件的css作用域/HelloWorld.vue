<template>
  <div>
    <h2>hello world组件</h2>
    <h2>
      {{message}}
    </h2>
  </div>
</template>

<script>
export default {
  
  data() {
    return {
      message:'这是hello world组件'
    }
  }
}
</script>

<style scoped>


</style>