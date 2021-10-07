// never 表示永远不会发生值 的类型
// never 一般写在这些地方
function foo():never {
  // 死循环
  while(true) {
  }
}

function bar():never {
  throw new Error()
}

// never 到底用在什么地方
// 联合类型 |
// 封装一个核心函数，别人都会调用 
function handleMessage(message:string | number ) {
  switch(typeof message) {
    case 'string' : 
      console.log("string 类型")
      break
    case 'number':
      console.log('number 类型')
      break
    // 如果加了 boolean 但是没有处理，，default 的 赋值就会失败，这就是never 的用处所在
    default:
      const check:never = message
  }
}
handleMessage('ac')
handleMessage(123)
// handleMessage(false)