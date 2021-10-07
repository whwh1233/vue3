// hooks:useState
// 返回值一个 number  一个 function  使用对象会把名字锁死，所以使用 tuple 更加合适
// const [counter,setCounter] = useState(10)
function useState(state:any) {
  let currentState = state
  const changeState = (newState:any) => {
    currentState = newState
  }
  const arr:any[] = [currentState,changeState]
  // 第二个是函数类型
  const tuple:[any,(newState:any) => void] = [currentState,changeState]
  return tuple
}

// 如果使用数组返回，只会是any 类型
const [counter,setCounter] = useState(13)
setCounter('ac')
const [title,setTitle] = useState('abc')

export{}