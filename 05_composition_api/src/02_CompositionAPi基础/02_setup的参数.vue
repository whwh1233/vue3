<template>
  <div>
    <h3>{{message}}</h3>
    <h3>{{title}}</h3>
    <h3>当前计数：{{counter}}</h3>
  </div>
  
</template>

<script>
export default {
  // setup 函数有哪些参数  props,context
  // props,父组件传递过来的属性
  // setup 函数有哪些返回值 
  // setup无法使用this ，所有参数里有props
  // context 中有三个属性
  // 1. attr  所有非props的attribute
  // 2. slots  
  // 3. emits  因为没办法使用this.$emit方法， 
  // 
  // setup的返回值可以在模板的template中被使用
  // 也就是说 我们可以用setup的返回值 替代 data 选项,而且必须返回对象
  data() {
    return {
      counter:1111,
    }
  },
  setup(props,{attrs,slots,emit}) {
    console.log(attrs)
    console.log(slots)
    console.log(emit)
    return {
      title:'hello home',
      counter:10
    }
  },
  props:{
    message:{
      type:String,
      default:'whhwh123',
      required:true
    }
  },
  
}
</script>