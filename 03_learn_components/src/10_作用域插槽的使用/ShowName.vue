<template>
  <div>
    <!-- <span v-for="(name,index) in names" :key="index">
      {{name}}
    </span> -->
    <template v-for="(name,index) in names" :key="name">
      <!-- <span>{{name}}</span> -->
      <!-- 这里slot中定义的变量可以通过 slotProps 取到 -->
      <slot :item="name" :index="index"></slot>
    </template>
    
  </div>
</template>

<script>
export default {
  props:{
    names:{
      type:Array,
      default:() => []
    }
  }
}
</script>

<style scoped>

</style>