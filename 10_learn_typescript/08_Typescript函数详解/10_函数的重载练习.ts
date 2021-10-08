// 1.联合类型
// function getLength(args:string | any) {
//   return args.length
// }

// console.log(getLength('aaa'))
// console.log(getLength(['a','b']))

// 使用联合类型可以实现的简单，就可以使用联合类型
// 实现的比较麻烦的时候 ，就是用函数的重载

// 2.函数重载
function getLength(args:string):number
function getLength(args:any[]):number

function getLength(args:any):number {
  console.log(args.length)
  return args.length
}
console.log(getLength('aaa'))
console.log(getLength(['a','b']))
