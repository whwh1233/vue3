// 类的定义必须初始化
class Person {
  name:string
  age:number
  constructor(name:string,age:number){
    this.age = age
    this.name = name
  }
  eating() {
    console.log(this.name + 'eating')
  }
}

const p = new Person('wh',29)
// cosnt p = new Person()
console.log(p)
p.eating
export{}