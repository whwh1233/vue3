class Person {
  name:string = '123'
  eating() {
    console.log('ea')
  }
}

const p = new Person()

// 以类作为类型必须有类 中 定义的 各种属性，包括函数
const p1:Person = {
  name:'123',
  eating() {
    console.log('eating')
  }
}