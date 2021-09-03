<template>
  <div>
    <h2>我是App</h2>
    <my-slot-cpn>
      <button>我是slot</button>
    </my-slot-cpn>
    <my-slot-cpn>
      <h2>我是普通的标题</h2>
    </my-slot-cpn>
    <my-slot-cpn>
      <my-button></my-button>
    </my-slot-cpn>
    <my-slot-cpn></my-slot-cpn>
    <my-slot-cpn>
      <h2>我是第一个</h2>
      <h2>我是第二个</h2>
      <h2>我是第三个</h2>
    </my-slot-cpn>
  </div>
</template>

<script>
import MySlotCpn from './MySlotCpn.vue'
import MyButton from './MyButton.vue'
export default {
  components:{
    MySlotCpn,MyButton
  }
}
</script>

<style scoped>

</style>