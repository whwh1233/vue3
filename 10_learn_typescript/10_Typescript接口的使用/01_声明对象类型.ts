// type InfoType = {name:string,age?:number}
// 1. 通过类型别名（type）声明对象类型
interface InfoType  {
  readonly name:string
  age?:number
  friend?:{
    name:string
  }
}
const info:InfoType = {
  name:'wh',
  age:18,
  friend:{
    name:'james'
  }
}
console.log(info.name)
// info.name = 'whwh'
// 2.接口 interface , 官网建议使用 interface
// 也可以定义可选属性
