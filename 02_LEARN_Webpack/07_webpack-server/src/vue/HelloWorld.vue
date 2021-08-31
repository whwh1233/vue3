<style scoped>
h2 {
  color: blue;
}
</style>

<template>
  <div>
    <h2>
      {{ message }}
    </h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '我是hello world组件'
    }
  }
}
</script>
