class Person{
  name:string
  age: number
  constructor(name:string,age:number) {
    this.name = name
    this.age = age
  }
  eating() {
    console.log('eating')
  }
}
class Student  extends Person{
  sno:number
  constructor(name:string,age:number,sno:number) {
    // 直接调用父类的构造器,并传入参数
    super(name,age) 
    this.sno = sno
  }
  // 子类可以对父类的方法进行重写
  // 也可以执行父类中被复写 overwrite 的方法
  eating() {
    super.eating()
    console.log('eeeeating')
  }
  studying() {
    console.log('studying')
  }
}

const stu = new  Student('wh',18,111)
console.log(stu.name)
console.log(stu.age)
stu.eating()
stu.studying()

export {
  
}