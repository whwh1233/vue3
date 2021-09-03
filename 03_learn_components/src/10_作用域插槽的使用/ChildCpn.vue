<template>
  <div>
    <h2>{{title}}</h2>
    <slot></slot>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title:'我是子组件的title'
    }
  }

}
</script>

<style scoped>

</style>