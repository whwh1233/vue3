class Person {
  // 私有属性一般用 _ 来开头
  private _name:string = '12'
  constructor(name:string) {
    this._name = name
  }
  // 访问器 getter / setters\
  // setter
  set name (newName) {
    this._name = newName
  }
  // getter
  get name() {
    return this._name
  }
}


const p = new Person('wh')
p.name = 'coderwhy'
console.log(p.name)
export {}