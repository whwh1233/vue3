class Person {
  name:string = ''
  age:number = 0
}

// 静态属性  可以直接通过类来访问
class Student {
  static time:string = '2021-02' 
  static attentClass() {
    console.log('去上学了')
  }
}

console.log(Student.time)
Student.attentClass()

export{}