
// point：x/y -> 对象类型
// 对象类型
function printPoint(point:{x:number,y:number}) {
  console.log(point.x)
  console.log(point.y)
}

// printPoint('orin')
// printPoint({x:0})

// printPoint({x:0,y:0,z:0})
printPoint({x:0,y:0})

export {}