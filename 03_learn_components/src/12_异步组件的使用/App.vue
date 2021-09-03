<template>
  <div>
    <h2>你好啊</h2>
    <home></home>
    <async-category></async-category>
    <!-- suspense   悬而未决的 根据底下的进行选择 -->
    <suspense>
      <template #default>
        <async-category></async-category>
      </template>
      <template #fallback>
        <loading></loading>
      </template>
    </suspense>
  </div>
</template>

<script>
// 如何实现分包异步加载组件呢  asynccategory
import {defineAsyncComponent} from 'vue'

import Home from './Home.vue'
import Loading from './Loading'
// import AsyncCategory from './AsyncCategory.vue'
const AsyncCategory = defineAsyncComponent(() => import("./AsyncCategory.vue"))
// const AsyncCategory = defineAsyncComponent({
//   loader:() => import ('./AsyncCategory.vue'),
//   loadingComponent:Loading,
//   dalay:2000,
//   // err:错误信息
//   // retry：处理函数 重新加载
//   // attempts：记录重试的次数
//   onError:function(err,retry,attempts) {

//   }
// })

export default {
  components:{
    Home,AsyncCategory,Loading
  }
}
</script>

<style scoped>

</style>