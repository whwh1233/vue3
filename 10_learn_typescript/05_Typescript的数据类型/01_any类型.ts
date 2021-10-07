let message:any = 'hello world'
message = 2
message = false
message = {}
// any 的类型可以随意更改
// 当进行一些类型断言， as any
// 在不想给某些js 数据添加具体的数据类型时候， 就使用 any
// 慢慢的从 ts 过渡到 js 时候，可以使用 any

// any甚至可以调用各种方法，只是会失败
function foo(payload:any) {
  console.log('foo')
}
console.log(message)
const arr:any[] = []

export{}