

<script>
import { h } from 'vue'
import HelloWorld from './HelloWorld.vue'
export default {
  
  render() {
    return  h(HelloWorld,null,{
      default:props => h("span",null,{})    //default对应一个函数
    })
  }
}
</script>

<style scoped>

</style>