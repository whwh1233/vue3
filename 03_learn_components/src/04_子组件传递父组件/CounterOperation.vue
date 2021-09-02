<template>
  <div>
    <h2>{{message}}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <input type="number" v-model="number">
    <button @click="incrementN">+N</button>
  </div>
</template>

<script>
export default {
  // emits:["add","sub","addN"],
  // 可以换成对象写法，
  // 用于参数的验证
  emits:{
    add:null,
    sub:null,
    addN:(num,name) => {
      console.log(num,name)
      if(num > 10) {
        return true
      }
      return false
    }
  },
  data() {
    return {
      message:'子组件',
      number:0
    }
  },
  methods:{
    increment() {
      console.log('增加')
      this.$emit("add")
    },
    decrement() {
      console.log('减少')
      this.$emit("sub")

    },
    incrementN() {
      this.$emit("addN",this.number,"why")
    }
  }
}
</script>

<style scoped>

</style>