// 实现多态的时候，父类不写具体的方法实现，就叫做抽象类

function makeArea(shape:Shape) {
  return shape.getArea()
}

// 这个叫做抽象类
// 抽象方法必须存在于抽象类中
// 而且抽象类不能被实例化
// 抽象方法必须被子类实现
abstract class Shape {
  abstract getArea()
}

// const shape = new Shape()

class Rectangle  extends Shape{
  private width:number = 0
  private height:number = 0
  constructor (width:number,height:number) {
    super()
    this.width = width
    this.height = height
  }
  getArea() {
    console.log(this.width * this.height)
    return this.width * this.height
  }
}

class Circle extends Shape{
  private r : number =  0
  constructor (r:number) {
    super()
    this.r = r
  }
  getArea() {
    console.log(4*this.r)
    return (4 * this.r)
  }
}


const rectangle = new Rectangle(20,30)
const circle = new Circle(4)
makeArea(rectangle)
makeArea(circle)