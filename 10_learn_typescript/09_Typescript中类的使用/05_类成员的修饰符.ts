class Person {
  // public name:string = ''
  // private name:string = '2'
  protected name:string = '2'
  getName() {
    return this.name
  }
  setName(name:string) {
    this.name = name
  }
}
class Student extends Person{
  getName() {
    return this.name
  }
}

// protected 子类以及内部可以访问，但是外部不可以访问
const p = new Student()
// private 不能取值，也不能赋值
// console.log(p.name)
console.log(p.getName())
p.setName('wh')
console.log(p.getName())

export{}

