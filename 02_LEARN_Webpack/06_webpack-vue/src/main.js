import { sum } from './js/math'
const priceFormat = require('./js/format')
// 形成依赖关系图再开始进行打包
import ele from './js/element'
// 把vue当做一个模块来导入
import { createApp } from 'vue'
console.log(sum(220, 30))
console.log(priceFormat)
const message = 'hello world'
const names = ['a', 'b', 'c']
names.forEach(item => console.log(item))

console.log(message)

// vue 代码
const app = createApp({
  template: `<h2>我是 vue 渲染的</h2>`,
  data() {
    return {
      title: '我是 vue 返回的 title'
    }
  }
})
app.mount('#app')
