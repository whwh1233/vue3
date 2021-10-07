// hooks:useState
// 返回值一个 number  一个 function  使用对象会把名字锁死，所以使用 tuple 更加合适
// const [counter,setCounter] = useState(10)

// T 是 泛型， 就是把传入参数的类型传给了 T
function useState<T>(state:T) :[T,(newState:T) => void] {
  let currentState = state
  const changeState = (newState:T) => {
    currentState = newState
  }
  // 第二个是函数类型
  const tuple:[T,(newState:T) => void] = [currentState,changeState]
  return tuple
}

// 这是 函数的类型注解 
//   () => void

// 如果使用数组返回，只会是

const [counter,setCounter] = useState(13)
setCounter(100)
const [title,setTitle] = useState('abc')
const [flag,setFlag] = useState(false)