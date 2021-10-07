// 通常情况下，定义一个函数都会给这个函数的参数加上类型注解 
function foo(message:string) {

}

const names = ['a','b','v']

// 这里可以不写 item 的类型，因为他是从数组中取出来的 
//  item 可以通过上下文环境推导出来，可以不添加类型注解
names.forEach((item) => { 
  console.log(item.length)
})

names.forEach(function(item:string) {
  console.log(item.length)
})
