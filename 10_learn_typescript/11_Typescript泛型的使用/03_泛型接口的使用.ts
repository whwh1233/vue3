interface IPerson<T1=string,T2=number> {

  name:T1,
  age:T2
}

// 泛型接口
// 没有类型推导,不给默认值得时候必须写
const p:IPerson = {
  name:'sad',
  age:23
}

export {}