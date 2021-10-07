function foo(message?:string) {
  console.log(message)
}

// function foo(message:string | undefined) {
//   console.log(message)
// }


// 当一个参数是可选类型时候， 其实是该参数和 undefined 的联合类型
foo()