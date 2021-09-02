<template>
  <div>
    <tab-control :lists="lists" @tabClick="changeTab"></tab-control>
    
    <h2>{{content}}</h2>
  </div>
</template>

<script>
import TabControl from './TabControl.vue'
export default {
  data() {
    return {
      lists:['衣服','鞋子','厨具'],
      content:'nothing',
      index:0
    }
  },
  methods:{
    changeTab(index) {
      console.log('切换啦')
      console.log(index)
      this.index = index
      this.content = this.lists[index]
    }
  },
  components:{
   TabControl
  },
  mounted(){ 
    this.content = this.lists[0]
  }
}
</script>

<style scoped>


</style>