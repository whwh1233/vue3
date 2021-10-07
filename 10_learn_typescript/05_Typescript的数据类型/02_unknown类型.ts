function foo() {
  return 'abc'
}

function bar() {
  return 13
}
let flag = true
let result:unknown   
// unknown 类型只能赋值给 any 和 unknown 类型
// any 类型可以赋值给任意类型
// 防止一个 不确定类型的变量去乱用
// 最好不要使用any
if(flag){
  result = foo()
}else {
  result = bar()
}

console.log(result)
// let f:string = result
export {}