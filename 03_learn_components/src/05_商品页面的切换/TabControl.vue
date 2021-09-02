<template>
  <div>
    <div v-for="(list,index) in lists" :key="index" @click="changeTab(index)" :class="this.index===index?'yes':''">
      {{list}}
    </div>
  </div> 
</template>

<script>
export default {
  data() {
    return {
      index:0
    }
  },
  emits:['tabClick'],
  props:{
    lists:Array
  },
  methods:{
    changeTab(index) {
      this.index = index
      this.$emit("tabClick",index)
    }
  }
}
</script>
<style scoped>
.yes {
  color:red;
  border-bottom: red solid 2px;
}
</style>