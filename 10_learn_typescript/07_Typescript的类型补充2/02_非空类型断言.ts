function printMessage(message?:string) {
  // message:aaa
  // message:undefined   就无法通过 ts-node 的编译了 ts-node运行时有自带的tsconfig.js
  // if(message) {
    // console.log(message.length)
  // }
  // ! 非空断言，这东西一定有值，跳过 ts 编译阶段对于他的检查，但在本质上代码仍然是不严谨的
  console.log(message!.length)
}

// printMessage('hllo')
// printMessage('hllohelloword')
// printMessage()

// optional chain 可选链   看 03
// 作用是 对象属性不存在时，他会短路，直接返回 undefined 存在的话才会继续执行