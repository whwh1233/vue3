<template>
  <div>
    <h3>{{message}}</h3>
    <h3>{{title}}</h3>
    <!-- 当在 template 里使用ref对象时，他会自动进行解包  所以不需要加.value -->
    <!-- 但这个是一个浅层的解包 -->
    <h3>当前计数：{{counter}}</h3>
    <h3>当前计数：{{info.counter.value  }}</h3>
    <h3>当前计数：{{info2.counter  }}</h3>
    <button @click="increment">+++</button>
  </div>
  
</template>

<script>
import { reactive, ref } from 'vue'
export default {
  setup() {
    // counter 变成了 ref 的可响应式的引用
    let counter = ref(100)
    const info = {
      counter
    }
    const info2 = reactive({
      counter
    })
    console.log(info)
    const increment = () => {
      // 但是 setup 里的 counter 不会自动解包，所以要加上 .value
      counter.value++
      console.log(counter)
    }
    return {
      title:'hello home',
      counter,
      increment,
      info,
      info2
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