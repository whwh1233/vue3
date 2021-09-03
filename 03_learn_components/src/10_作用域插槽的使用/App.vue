<template>
  <div>
    <!-- 演示编译作用域 -->
    <!-- <child-cpn>
      <button>哈哈哈</button>
    </child-cpn> -->

    <!-- 演示作用域插槽 -->
    <show-name :names="names">
      <template v-slot="slotProps">
        <strong>{{slotProps.item}} - {{slotProps.index}}</strong>
      </template>
    </show-name>
    <show-name :names="names">
      <template v-slot="slotProps">
        <button>{{slotProps.item}} - {{slotProps.index}}</button>
      </template>
    </show-name>

      <!-- 独占具名插槽，不可以有其他的插槽 -->
     <show-name :names="names" v-slot="slotProps">
        <i>{{slotProps.item}} - {{slotProps.index}}</i>
      </show-name>
  </div>
</template>

<script>
// vue 有 编译作用域的区别
// 父级作用域里编译父级模板里的所有内容
// 子级作用域里编译子级模板里的所有内容
// 即：父  无法访问子组件里的 {{相关数据}}
// 但如果真的想访问，就需要 作用域插槽
import ChildCpn from './ChildCpn.vue'
import ShowName from './ShowName.vue'
export default {
  data() {
    return {
      names:['james','kobe','curry','jordan']
    }
  },
  components:{
    ChildCpn,ShowName
  }  
}
</script>

<style scoped>

</style>