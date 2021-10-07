// 多选一

// 联合类型，使用需要小心 
function printId (id:number|string) {
  console.log(id)
  // narrow 缩小，帮助确定一下参数的类型
  if(typeof id === 'string') {
    console.log(id.toUpperCase())
  }else {
    console.log(id)
  }
}

printId(122223)
printId('ad')
// printId(false)