<template>
  <div>
    <!-- <h2>{{title}}</h2> -->
    <div>{{content}}</div>
  </div>
</template>

<script>
export default {
  
  data() {
    return {
      title:'我是页面'
    }
  },
  props:{
    content:String
  }
}
</script>

<style scoped>

</style>