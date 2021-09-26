<template>
  <div>
    <h3>{{name}}</h3>
    <h3>{{age}}</h3>
    <button @click="changeAge">修改age</button>
  </div>
</template>

<script>
import { reactive,toRefs,toRef,ref, isRef, unref } from 'vue'
// toRefs 对一个对象里所有的属性
// toRef 对一个reactive对象其中的一个属性进行转换且建立连接
// toRef 而且不需要 {}  需要传入一个 reactive 对象与键值
export default {
  setup() {
    // 直接进行解构 ，就会丢失响应式
    const info = reactive({
      name:'why',
      age:18
    })
    // 相当于重新赋值，所以没有响应式
    // let {name,age} = info
    // 使用 toRefs函数,这样界面就是响应式的了，
    // 相当于重新创建了两个 refs 的响应式数据
    // 甚至 改变 info.age 也可以更改到age.value,
    // 相当于他们引用着同一个地方
    let age  = toRef(info,"age")
    let { name } = info
    const changeAge = () => {
      info.age ++
      console.log(age)
    }
    const name2 = ref('why')
    // unref 的语法糖本质
    let value2 = unref(name2)
    let value = isRef(name2)?name2.value:name2

    return {
      name,
      age,
      changeAge
    }


  }
}
</script>
