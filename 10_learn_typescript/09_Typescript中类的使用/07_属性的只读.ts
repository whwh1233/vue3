class Person {
  // 可以访问但是不可以修改
  readonly name:string = '1243'
  age?:number = 18
  readonly friend?:Person 
  // 只读属性可以在构造器里赋值，但是之后就不可以修改了
  // 属性本身不可以修改，但是属性如果是个对象，那么它里面的值可以被修改
  // 类似于 const 定义了 一个对象
  constructor(name:string,friend?:Person) {
    this.name = name
    this.friend = friend
  }
}

const p = new Person('whwh',new Person("james"))
console.log(p.name)
console.log(p.friend)
// p.name = 'wh'
if(p.friend) {
  p.friend.age = 390
}
console.log(p.friend)


export{}