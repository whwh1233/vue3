<template>
  <div>
    <h2>我是home</h2>
    <h2 @click="pageClick()">{{name}}</h2>

    <h2>{{age}}</h2>
  </div>
</template>
<script>
export default {
  name:'home',
  props:{
    name:String,
    age:String
  },
  methods:{
    pageClick() {
      this.$emit("homeClick")
    }
  }
}
</script>

<style scoped>

</style>