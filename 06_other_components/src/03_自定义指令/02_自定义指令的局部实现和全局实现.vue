<template>
  <div>
    <input type="text" v-focus>
  </div>  
</template>

<script>
export default {
  // 对 DOM 进行底层操作时，需要用到 自定义指令
  // 局部自定义指令
  directives:{
    focus:{
      mounted(el,bindings,vnode,preVnode) {
        console.log("focus mounted")
      el.focus()
      }
    },

  },
}
</script>

<style scoped>

</style>