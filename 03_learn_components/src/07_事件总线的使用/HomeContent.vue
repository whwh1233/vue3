<template>
  <div>
    <h2>{{message}}</h2>
    <h2>{{name}}</h2>
    <h2>{{age}}</h2>
  </div>
</template>

<script>
import emitter from './utils/eventBus'
export default {
  data() {
    return {
      message:'我是HomeContent'
    }
  },
  inject:["name","age"],
  created() {
    console.log('HomeContent被创建额')
    // emitter.on("why",(info) => {
    //   console.log("why" + info)
    // }),
    // emitter.on("kobe",(info) => {
    //   console.log(info)
    // })

    emitter.on("*", (info) => {
      console.log(info)
    })
    // 取消监听
    emitter.all.clear()
}
}
</script>

<style scoped>

</style>