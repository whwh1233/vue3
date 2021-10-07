
// point：x/y -> 对象类型
// 对象类型   z为可选类型 加个问号
function printPoint(point:{x:number,y:number,z?:number}) {
  console.log(point.x)
  console.log(point.y)
  console.log(point.z)
}

// printPoint('orin')
// printPoint({x:0})

printPoint({x:0,y:0,z:0})
printPoint({x:0,y:0})

export{}