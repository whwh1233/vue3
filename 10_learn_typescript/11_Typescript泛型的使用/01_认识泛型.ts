// 类型 参数化
// 在定义函数时候，不决定参数的类型
// 而是让调用者 用参数来告知，这里的函数参数类型应该是什么

// function add(num1:number,num2:number):number {
//   return num1 + num2
//   // return 50
// }

function add<Type>(num1:Type):Type {
  console.log(num1)
  return num1
}

add<number>(1)
add<number>(10)

add<string>('3')
add<any[]>([1,2,3])
// 也会进行类型推导
add({'a':'asd'})
// 泛型：参数的类型由调用显示