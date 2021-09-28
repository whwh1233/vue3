

<script>
import {h} from 'vue'
export default {
  render() {
    return h("div",null,[
      h("h2",{},"hell0 world"),
      this.$slots.default ? this.$slots.default() : h("span",null,"我是默认的")
    ])
  }
}
</script>

<style scoped>

</style>