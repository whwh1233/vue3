<template>
  <div>
    <h2>我是子组件</h2>
    <h2 :class="$attrs.class">{{title}}</h2>
    <h2>{{content}}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message:'我是子组件',
    }
  },
  inheritAttrs:false,
  props:{
    title:String,
    content:{
      type:String,
      required:true,
      default:1223
    },
    counter:{
      type:Number
    },
    multi:[String,Number],
    // 对象/数组的default必须是 return的工厂函数
    obj:{
      type:Object,
      default() {
        return {
          name:'wh',
          height:180
        }
      }
      
    }
  }  
  // props:['title','content']
}
</script>

<style scoped>

</style>