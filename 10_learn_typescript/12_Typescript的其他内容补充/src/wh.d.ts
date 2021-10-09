// 声明可以直接在 ts 中使用，不需要 import
// 声明了一个模块
declare module 'lodash' {
  export function join(arr:any[]) {
    return arr
  }
}

// 也可以声明 变量，函数，类
declare let whyname:string
declare let age : number
declare function foo():void 
declare class Person {
  name:string
  age:number
  constructor(name:string,age:number)
}

// 声明文件
// 把 这类文件当做一个模块来导入
declare module  '*.jpg'
declare module  '*.jpeg'
declare module  '*.png'

// 声明命名空间
declare namespace $ { 
  export function ajax(setting:any):any {

  }
}