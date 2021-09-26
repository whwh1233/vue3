<template>
  <div>
    <h2 ref="title">hahahah</h2>
    <button @click="show">看看title</button>
  </div>
</template>

<script>
import { ref, watchEffect, watch } from 'vue'
export default {
  // 如何在setup中通过ref取得组件
  setup() {
    // title 在组件挂载后会自动指向 title 的元素
    const title = ref(null)
    watchEffect(
      () => {
        console.log(title.value)
      },
      {
        flush: 'post'
      }
    )
    // flush  pre 直接执行一次  post dom挂载完毕执行
    return { title }
  }
  // methods: {
  //   foo() {
  //     this.$refs.title
  //   }
  // }
}
</script>

<style scoped></style>
