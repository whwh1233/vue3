// type CalcType = (n1:number,n2:number) => number

// 是一个可调用接口
// 接口定义函数类型，这样的阅读性比较差，推荐使用 type alias 
interface CalcType {
  // 这个类型表示一个函数
  (n1:number,n2:number) : number
}
function calc (num1:number,num2:number,calcFn: CalcType):number {
  return calcFn(num1,num2)
}

const add:CalcType = (n1,n2) => {
  return n1 + n2
} 