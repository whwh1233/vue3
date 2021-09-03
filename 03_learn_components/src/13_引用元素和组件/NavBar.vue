<template>
  <div>
    <h2>NavBar</h2>
    <h2>{{message}}</h2>
    <button @click="getParent">获取父组件 根组件</button>
    </div>  
</template>

<script>
export default {
  data() {
    return {
      message:'woshi navbar'
    }
  },
  methods:{
    haha() {
      console.log('haha s')
    },
    getParent() {
      console.log(this.$parent)
      console.log(this.$root)
    }
  },

}
</script>
<style scoped>

</style>