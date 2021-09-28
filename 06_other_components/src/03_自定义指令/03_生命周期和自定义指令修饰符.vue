<template>
  <div>
    <input type="text" v-focus>
    <h2></h2>
    <button @click="add" v-why.aaa.bbb="counter" v-if="counter < 2">当前计数： {{counter}}</button>
  </div>  
</template>

<script>
import {ref} from 'vue'
export default {
  // 对 DOM 进行底层操作时，需要用到 自定义指令
  // 局部自定义指令
  // 自定义指令里有什么生命周期
  // created  在绑定元素attribute或事件监听器之前调用
  // beforeMount   在指令第一次绑定到元素并且挂载在父组件之前调用
  // mounted   被挂载后使用
  // beforeUpdate  更新Vnode 前调用
  // updated    包含组件的Vnode 及其子组件Vnode 更新后调用
  // beforeUnmount  卸载之前调用
  // unmounted    指令与元素解绑 且父组件卸载时，只调用一次
  directives:{
    focus:{
      mounted(el,bindings,vnode,preVnode) {
        console.log("focus mounted")
        el.focus()
      }
    },
    //  v-why.aaa.bbb="counter"  这些参数 放在 bindings 中
    // 修饰符 放在 modifiers对象中  是键值， 传了的话  就是 true
    why:{
      created(el,bindings,vnode,preVnode) {
        console.log('created')
        console.log(el)
        console.log(bindings)
        console.log(vnode)
        console.log(preVnode)
      },
      beforeMount() {
        console.log('beforeMount')
      },
      mounted(el,bindings,vnode,preVnode) {
        console.log(bindings)

        console.log('mounted')
      },
      beforeUpdate() {
        console.log('beforeUpdate')
      },
      updated(el,bindings,vnode,preVnode) {
        console.log('updated')
        console.log(vnode)
        console.log(preVnode)
      },
      beforeUnmount() {
        console.log('beforeUnmount')
      },
      unmounted() {
        console.log('unmounted')
      },
    }

  },
  setup() {   
    const counter  = ref(0)
    const add = () => counter.value ++
    return {counter,add}
  }
}
</script>

<style scoped>

</style>