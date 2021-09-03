<template>
  <div>
    <h2>{{message}}</h2>
    <HomeContent></HomeContent>
  </div>
</template>

<script>
import HomeContent from './HomeContent.vue'
export default {
  data() {
    return {
      message:'我是Home'
    }
  },
  components:{
    HomeContent
  }
  
}
</script>

<style scoped>

</style>