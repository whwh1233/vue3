interface IFoo {
  name:string
}
interface IFoo {
  age:number
}
// ts允许定义两个相同名称的接口,是合并的作用

const foo:IFoo = {
  name:'wh',
  age:1
}

// 这些类型来自 tslib  typescript内置的一些类型
document.getElementById('wh') as HTMLDivElement
window.addEventListener

// 给 window 添加属性
interface Window {
  age:number
}

window.age = 18

type IBar = {
  name:string
  age:number
}
// 但 type 不可以重复声明，会报错

// type IBar {
//   age:number
// }

// 建议使用 interface
interface IPerson {

}