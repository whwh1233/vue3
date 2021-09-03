<template>
  <div>
      <h2>
        哈哈哈
      </h2>
      <h2>{{message}}</h2>
      <button @click="message='newnewnwe';isShow=true">更新</button>
     
    </div>  
</template>

<script>
export default {
  data() {
    return {
      message:'hahah',
      isShow:false
    }
  },
  beforeCreate() {
    console.log('Home beforeCreate')
  }, 
  created() {
    console.log('Home created')
  }, 
  beforeMount() {
    console.log('Home beforeMount')
  }, 
  mounted() {
    console.log('Home mounted')
  }, 
 
  beforeunMount() {
    console.log('Home beforunmount')
  },
  unmounted() {
    console.log('Home unmounted')
  }, 
   beforeUpdate() {
    console.log('Home beforeUpdate')
  }, 
  updated() {
    console.log('Home updated')
  }, 

}
</script>


<style scoped>

</style>