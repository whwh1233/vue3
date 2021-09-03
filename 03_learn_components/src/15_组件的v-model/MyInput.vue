<template>
  <div>
    <h2>myinput</h2>
    <!-- 默认事件触发 -->
    <!-- <button @click="btnClick">按钮</button> -->
    <h2>{{modelValue}}</h2>
    
    <!-- input 触发 -->
    <input type="text" :value="modelValue" @input="btnClick">

    <!-- input v-model触发 通过计算属性来实现  -->
    <input type="text" v-model="value">
  </div>

</template>

<script>
export default {
  data() {
    return {

    }
  },
  computed:{
    value:{
      set(value) {
        this.$emit("update:modelValue",value)
      },
      get() {
        return this.modelValue
      }
    }
  },
  props:{
    modelValue:{
      type:String
    }
  },

  emits:["update:modelValue"],
  methods:{
    btnClick(event) {
      console.log('时间点击')
      this.$emit("update:modelValue",event.target.value)
    }
  }
}
</script>

<style scoped>

</style>