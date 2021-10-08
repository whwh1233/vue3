class Animal {
  action() {
    console.log('running')
  }

}

class Dog extends Animal {
  action() {
    console.log('dog running  ')
  }
}

class Fish extends Animal {
  action() {
    console.log('fish swimming ')
  }
}

class Bird extends Animal {
  action() {
    console.log('flying ')
  }
}

function makeAction (animal:Animal[]) {
  animal.forEach(animal => {
    animal.action()
  })
}
// 多态的目的是为了写出更有通用性的代码 

// 父类引用指向子类对象 是多态的前提
// 因此可以调用不同的子类方法，这就是多态
// const animal1:Animal = new Dog()
makeAction([new Dog(),new Fish()])