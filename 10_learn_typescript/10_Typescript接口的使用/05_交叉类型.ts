type WhyType = number | string
type Direction = 'left' | 'right' | 'top' | 'bottom'

// 除了联合类型
// 还有交叉类型

// 两种条件都要符合  所以定义的 AType 是 never 类型
type AType = number & string
interface ISwim {
  swimming:() => void
}

interface IFly {
  flying:() => void
}

type MyType1 = ISwim | IFly
type MyType2 = ISwim & IFly   // 相当于生成了一个新的类型
// 仅满足一个即可
const obj:MyType1 = {
  flying() {

  }
}
// 必须要有两个接口中的所有属性才可以
const obj2:MyType2 = {
  swimming() {

  },
  flying() {

  }
}

export {}