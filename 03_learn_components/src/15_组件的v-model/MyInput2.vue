<template>
  <div>
    <!-- input v-model触发 通过计算属性来实现  -->
    <input type="text" v-model="value">
    <input type="text" v-model="wh">

    <!-- 绑定两个v-model -->
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
    },
    wh:{
      set(title) {
        this.$emit("update:title",title)
      },
      get() {
        return this.title
      }
    }
  },
  props:{
    modelValue:{
      type:String
    },
    title:String
  },

  emits:["update:modelValue","update:title"],
  methods:{
   
  }
}
</script>

<style scoped>

</style>