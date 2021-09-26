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
    // 3.ref对象
    const info3 = ref("why")
    //readonly 方法 也是创建一个 Proxy
    // 劫持 set 和 get 方法
    // get 方法正常
    // set 方法 爆出 warning
    // 可以使用  isProxy 来判断 是否是由 reactive和readonly创建的Proxy
    //          isReactive    如果readonly包裹了reactive  那么也会返回 true
    //          readonly
    //          toRaw   返回 reactive 和 readonly 代理的原始对象
    //  shallowReactive 创建一个浅层响应式代理，跟踪自身property的响应性，但不执行嵌套对象的深层响应式转换  
    //   深层还是原生对象
    // shallowReadonly  同上，深层依然可读可写
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