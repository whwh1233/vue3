let message1:string = 'hello world'
let message2:string = "hello world"
const name:string = 'why'
const age:number= 18
// 类型默认也可以不加，自己推导
// 默认情况，可以推断（infer）出来对应标识符的类型，一般情况不加标识符

// 模板字符串也可以使用

let message3 = `name:${name}-age:${age}`
console.log(message3)
// 这种未知的情况就可以先加上
let result:boolean
export{}