<template>
  <div>
    <h2>呵呵呵</h2>
    <button @click="isShow=!isShow">切换</button>
   
     <template v-if="isShow">
         <Home></Home>
      </template>
    <template v-else>
        <h2>wuwuwu </h2>
    </template>
  </div>
</template>


<script>
import Home from './Home.vue'
export default {
  components:{
    Home
  },
  data() {
    return {
      isShow:false
    }
  }
}
</script>