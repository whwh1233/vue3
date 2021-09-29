class Dep {
  constructor() {
    this.name = '123'
    // Set 和 Array 的区别是 Set 中的元素不会重合
    this.subscriber = new Set();

  }

  addEffect(effect) {
    this.subscriber.add(effect)
  }
  notify() {
    this.subscriber.forEach(effect => effect())
  }
}

const dep = new Dep()
const info = {counter:100}

dep.addEffect(doubleCounter)
dep.addEffect(powerCounter)

function doubleCounter() {
  console.log(info.counter * 2)
}
function powerCounter() {
  console.log(info.counter * info.counter)
}

info.counter ++
dep.notify()
info.counter ++
dep.notify()
// deps 数组