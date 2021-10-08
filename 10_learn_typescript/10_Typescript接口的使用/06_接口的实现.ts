interface ISwim {
  swimming: () => void
}

interface IEat {
  eating:() => void
}

// 类实现接口
class Animal {

}

// 继承只能实现单继承，但可以实现多个接口
class Fish extends Animal implements ISwim,IEat{
  eating() {
    console.log('fish eating')
  }
  swimming() {
    console.log('fish swimming')
  }
}
class Person implements ISwim {
  swimming() {
    console.log('swimming')
  }
}
// 编写一些公共的API ，可以面向接口编程
function swimAction(swimable:ISwim) {
  swimable.swimming()
}

// 1.所有实现了 接口的对象都可以被传入这个函数
swimAction(new Fish())
swimAction(new Person())
// swimAction(['adsfd'])







// const a:ISwim = {
//   swimming() {

//   }
// }

// function foo(swim:ISwim) {

// }