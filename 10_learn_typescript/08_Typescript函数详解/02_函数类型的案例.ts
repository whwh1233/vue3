// 参数名称不可以省略
function calc (a1: number,a2: number,fn: (n1:number,n2: number) => number) {
  return fn(a1,a2)
}


const r1 = calc(20,30,function (a1,a2) {
  return a1 + a2
})
const r2 = calc(20,30,function (a1,a2) {
  return a1 * a2
})

// function add(a1:number,a2:number) {
//   return a1 + a2
// }

// function mul(a1:number,a2:number) {
//   return a1 * a2
// }

console.log(r1)
console.log(r2 )