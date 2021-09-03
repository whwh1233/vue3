<template>
  <div>
    <!-- 动态决定插槽名字 -->
    <!-- 在navbar中通过props传过去 -->
    <!-- props中接受，定义为插槽的名称 -->
    <!-- 在这里v-slot:[] 来调用响应的插槽 -->
    <nav-bar  :name="name">
      <template #left>
        <button>左边的按钮</button>
      </template>
      <template v-slot:mid>
        <h2>中间的标题</h2>
      </template> 
      <template v-slot:right>
        <i>右边的i元素</i>
      </template>
      <template v-slot:[name]>
       <h2> wh里的元素</h2>
      </template>
     
    </nav-bar>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
export default {
  components:{
    NavBar
  },
  data() {
    return {
      name: 'whwh1233'
    }
  }

}
</script>

<style scoped>

</style>