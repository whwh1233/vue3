<template>
  <div>
    <!-- <input type="text" v-model="message"> -->
    <!-- v-model的含义 -->
    <!-- <input type="text" :value="message" @input="message = $event.target.value"> -->
    <h2>{{message}}</h2>
    <h2>{{title}}</h2>


    <!-- 组件中怎么使用v-model -->
    <!-- <my-input v-model="message"></my-input> -->
    <!-- <my-input :modelValue="message" @update:model-value="message=$event"></my-input> -->

    <my-input2  v-model="message" v-model:title="title"> </my-input2>
  </div>
</template>

<script>
import MyInput from './MyInput.vue'
import MyInput2 from './MyInput2.vue'
export default {
  data(){
    return {
      message:'hahah',
      title:'titleahhh '
    }
  },
  components:{
    MyInput,MyInput2
  }
}
</script>

<style scoped>

</style>