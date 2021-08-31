import { sum } from './js/math'
const priceFormat = require('./js/format')
// 形成依赖关系图再开始进行打包
import ele from './js/element'
// 把vue当做一个模块来导入
import { createApp } from 'vue/dist/vue.esm-bundler'

import App from './vue/APP.vue'

console.log(sum(220, 30))
console.log(priceFormat)
const message = 'hello world'
const names = ['a', 'b', 'c']
names.forEach(item => console.log(item))

console.log(message)

// vue 代码
const app = createApp(App)
app.mount('#app')
