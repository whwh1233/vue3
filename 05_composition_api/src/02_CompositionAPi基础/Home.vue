<template>
  <div>
    <h3>{{info3}}</h3>
    
    <button @click="updateState">修改状态</button>
  </div>
  
</template>

<script>
// readonly 会返回原生对象的只读代理，（我们希望传给某个组件的值不被修改，只能被使用）
import {  ref,readonly, reactive } from 'vue'
export default {
  setup() {
    // 1.普通对象
    const info1 = {
      name:'why'
    }
    // 2.响应式对象
    const info2 = reactive({
      name:'why2'
    })
    const info3 = ref("why")
    const readOnlyInfo3 = readonly(info3)
    const readOnlyInfo2 = readonly(info2)
    const readOnlyInfo1 = readonly(info1)
    const updateState = () => {
      readOnlyInfo3.value = 'wh'
      info3.value = 'gaigia'
    }
    
    return {
      updateState,
      info3
    }
  },
 
  
}
</script>