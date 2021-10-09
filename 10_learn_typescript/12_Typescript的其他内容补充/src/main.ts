import {add , sub} from './utils/math'
import {time,price } from './utils/format'
import nhltImage from './img/nhlt.jpg'
// 模块能否被找到，跟模块是否被声明过， 有关

// .ts  编写ts代码的地方
// .d.ts 做类型声明的地方，仅仅用来做类型检测，用来告知 ts 我们有哪些类型  declare
// 1.内置类型声明           ducument.getElementById  ts自带的，math date document window
// 2.外部定义类型声明       使用第三方库，需要.d.ts   @types/lodash
// 3.自己定义类型声明       自定义编写 wh.d.ts
import axios from 'axios'
import lodash from 'lodash'

console.log(add(20,30))
console.log(sub(20,30))

console.log(price.format('asd'))
console.log(time.format('asd'))

console.log(lodash.join(['abc','ac']))

axios.get('http://123.207.32.32:8000/home/multidata').then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})

console.log(age)
console.log(whyname);
foo()

// document.getElementById()