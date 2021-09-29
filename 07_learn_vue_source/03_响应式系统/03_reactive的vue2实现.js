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
// vue2 中的问题以及 vue2和vue3的不同
// 1.如果新增元素
// 如果对象新增元素，就无能为力了，需要再次调用 defineProperty
// 但Proxy 可以劫持整个对象，不需要做特殊处理

// 2.修改对象的不同
// 使用defineProperty时,我们修改原来的obj对象就可以触发拦截
// 使用proxy，就必须修改代理对象，即Proxy的实例才可以触发拦截
// 3.proxy能观察的类型比 defineProperty更丰富
// has：in操作符的捕获器
// deleteProperty：delete的捕获器
// 4.作为新标准，受到浏览器的重视及持续优化
// 5.但不兼容 IE

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

// vue2对raw进行数据劫持
function reactive(raw) {
  Object.keys(raw).forEach(key => {
    const dep = getDep(raw,key)
    let value = raw[key]
    Object.defineProperty(raw,key,{
        get() {
          dep.depend()
          // console.log('huoqu ')
          return value
        },
        set(newValue) {
          if(value !== newValue){
            value = newValue
            dep.notify()
          }
          
        }
    })
  })
  return raw
}

// 测试代码
const info = reactive({counter:100,name:'whwh1233'})
const foo = reactive({height:199})


// watchEffect1
watchEffect(function () {
  console.log("effect1:" + info.counter * 2,info.name)
})
// watchEffect2
watchEffect(function () {
  console.log("effect2:" + info.counter * info.counter)
})
// watchEffect3
watchEffect(function () {
  console.log("effect3:" + info.counter + 10,info.name)
})
watchEffect(function () {
  console.log("effect4:" + foo.height)
})

// info.counter ++

info.name = 'whwh1233'
foo.height = 200
