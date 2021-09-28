

<script>
import { h,ref } from 'vue'
export default {
  setup() {
    const counter = ref(0)
    // return {counter}
    return () => {
      return h("div",{class:'title'},[
      h("h2",null,`当前计数：${counter.value}`),
      h("button",{
        onClick:() => counter.value++
      },"+1"),
      h("button",{
        onClick:() => counter.value--
      },"-1")
    ])
    }
  },
  // render 里面有绑定this
  // render 也可以写进 setup 中s
 
}
</script>

<style scoped>

</style>