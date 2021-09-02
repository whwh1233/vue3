<template>
  <div>
    <h2>父组件</h2>
    <ShowMessage title="我是标题" content="我是内容"></ShowMessage>
    <show-message :title="title" :content="content" class="why"></show-message>
    <MultiRootElement class="why" ></MultiRootElement>
  </div>
</template>


<script>
// props 相当于 attribute
// 还存在 非props的attribute   
//  如果组件有根节点，会把这个attribute传递给组件的根节点
//  也可以禁用继承（需要将attribute给另一个元素来用  可以通过$attr来访问所有的非props的attr）
// props的命名，由于浏览器对于html是大小写不敏感的，
// 所以建议使用驼峰写法，然后在传值得时候用-来连接
import ShowMessage from './ShowMessage.vue'
import MultiRootElement from './MultiRootElement.vue'
export default {
  data() {
    return {  
      title:'我是data中的标题',
      content:'我是data中的内容'
    }
  }  ,
  components:{
    ShowMessage,
    MultiRootElement
  }
}
</script>

<style scoped>

</style>