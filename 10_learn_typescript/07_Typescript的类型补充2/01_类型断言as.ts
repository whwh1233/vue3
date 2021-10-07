// 推导为 HTMLElement 元素
// <img src="" id="why">

// 类型断言：把一个相对普遍的类型转变为一个更为具体的类型  Type Assertions
// const el = document.getElementById("why") as HTMLImageElement

// el.src = "url地址"

// 2. Person 是 Student 的父类
class Person {
}

class Student  extends Person {
  studying() {

  }
}
function sayHello(p:Person) {
  // p as student
  // 具体用法
  // p as person 无法调用 studying
  (p as Student).studying()
}

const stu = new Student()
sayHello(stu)


// 3.最好不这样做，会造成类型混乱
const message:string = 'je'
const num :number = (message as any) as number

export{}