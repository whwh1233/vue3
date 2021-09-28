
<script>

import HelloWorld from './HelloWolrd.vue'
export default {
  data() {
    return {
      counter:0
    }
  },
  render() {
    const add = () => this.counter++
    const sub = () => this.counter--
    return (
      <div>
        <h2>当前计数：{this.counter}</h2>
        <button onClick={add}>+1</button>
        <button onClick={sub}>-1</button>
        <HelloWorld>
          {{default:props => <button>我是按钮</button>}}
        </HelloWorld>
      </div>
    )
  }
}
</script>