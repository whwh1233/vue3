import { sum } from './js/math'
const priceFormat = require('./js/format')
// 形成依赖关系图再开始进行打包
// 把vue当做一个模块来导入
import { createApp } from 'vue'
import ele from './js/element'

import App from './vue/APP'
import axios from 'axios'

console.log(sum(220, 30))
console.log(priceFormat)
const message = 'hello world'
const names = ['a', 'b', 'c']
names.forEach(item => console.log(item))

console.log(message)

// vue 代码
const app = createApp(App)
app.mount('#app')

console.log('abc')
console.log('abc')

// 在配置跨域而不写成对象的情况下下， webpack会自动给api前面加上 777端口的前缀，所以要写一个pathRewrite的对象结构

axios.get("/api/moment").then(res => {

}).catch(err => {
  console.log(err);
})
