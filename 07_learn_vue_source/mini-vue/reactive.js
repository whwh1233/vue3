class Dep {
  constructor() {
    this.name = '123'
    // Set 和 Array 的区别是 Set 中的元素不会重合
    this.subscriber = new Set()
  }
  depend(){
    if(activityEffect) {
      this.subscriber.add(activityEffect)
    }
  }
  notify() {
    this.subscriber.forEach(effect => effect())
  }
}

let activityEffect = null
function watchEffect(effect) {
  activityEffect = effect
  effect()
  activityEffect = null
}

// Map({key:value})     key 是个字符串 
// WeakMap({key:value})  key是个对象，弱引用，通过管理target来让垃圾销毁机制销毁weakmap

const targetMap = new WeakMap()
// 根据不同的 target 的 key 来获取 不同的 dep

function getDep(target,key) {
  //1.根据对象（target）取出对应的map 对象 
  let depsMap = targetMap.get(target)
  if(!depsMap) {
    depsMap = new Map()
    targetMap.set(target,depsMap)
  }
  // 2.取出具体的dep 对象
  let dep = depsMap.get(key)
  if(!dep) {
    dep = new Dep()
    depsMap.set(key,dep)
  }
  return dep
}

// vue2 永远返回的是同一个对象，但 vue3 返回的是一个 Proxy 对象，不是同一个对象了
// vue3对raw进行数据劫持
function reactive(raw) {
  // raw 就是里面的target
  return new Proxy(raw,{
    get(target,key) {
      const dep = getDep(target,key)
      dep.depend()
      return target[key]
    },  
    set(target,key,newValue) {
      const dep = getDep(target,key)
      target[key] = newValue
      dep.notify
    }
  })  
}

