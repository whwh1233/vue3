<template>
  <div>
    <h2>
      {{ counter }}
    </h2>
    <h2>
      {{ double }}
    </h2>
    <button @click="add">+++</button>
    <button @click="sub">---</button>
    <h2>{{ data }}</h2>
    <button @click="changeData">修改data</button>

    <p class="content"></p>
    <div class="scroll">
      <div class="scroll-x">scrollX:{{ scrollX }}</div>
      <div class="scroll-y">scrollY:{{ scrollY }}</div>
      <div class="scroll-y">mouseX:{{ mouseX }}</div>
      <div class="scroll-y">mouseY:{{ mouseY }}</div>
    </div>
  </div>
</template>

<script>
import { useCounter, useTitle, useMousePosition, useScrollPosition, useLocalStorage } from './hooks/index'
import { ref } from 'vue'
export default {
  setup() {
    const { counter, double, add, sub } = useCounter()
    const titleRef = useTitle('whwh1233')
    setTimeout(() => {
      titleRef.value = '我是新的标题'
    }, 2000)
    const { scrollX, scrollY } = useScrollPosition()
    const { mouseX, mouseY } = useMousePosition()
    const data = useLocalStorage('info', { name: 'why', age: 18 })
    // const data = useLocalStorage('info')
    const changeData = () => {
      data.value = 'hahah'
    }
    return { double, counter, add, sub, scrollX, scrollY, mouseX, mouseY, data, changeData }
    // 下方代码阅读性太差
    // return {
    //   ...useCounter()
    // }
  }
  // data() {
  //   return {
  //     counter: 0
  //   }
  // },
  // computed: {
  //   double() {
  //     return 2 * this.counter
  //   }
  // },
  // methods: {
  //   add() {
  //     this.counter++
  //   },
  //   sub() {
  //     this.counter--
  //   }
  // },
  // watch: {},

  // created() {}
}
</script>

<style scoped>
.content {
  width: 2000px;
  height: 3000px;
}
.scroll {
  position: fixed;
  right: 20px;
  bottom: 20px;
}
</style>
