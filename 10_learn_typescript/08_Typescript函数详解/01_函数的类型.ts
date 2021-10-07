// 1. 函数作为参数时，在参数中编写类型
function foo() {
  return '123'
}

// void 可以返回其他类型，null 和 undefined 都可以
type FooType = () => void
function bar(fn:FooType) {
  fn()
}

bar(foo)

// 2.定义常量时，编写函数的类型
// const add:(num1:number,num2:number)=>void = (num1:number, num2:number) => {
//   return num1+ num2
// }
type AddType = (num1:number,num2:number)=> number
const add: AddType = (num1:number, num2:number) => {
  return num1+ num2
}

export{}