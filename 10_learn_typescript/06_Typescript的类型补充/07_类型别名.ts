type UnionType = string | number | boolean

type PointType = {
  x:number,
  y:number,
  z?:number 
}
// type 是类型别名的 关键字，用于定义类型别名  (type alias)

function printPoint(point:PointType) {
  console.log(point.x)
  console.log(point.y)
  console.log(point.z)
}

printPoint({x:0,y:0,z:0})
printPoint({x:0,y:0})