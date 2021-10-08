interface IPerson {
  name:string,
  age:number,
  height:number
}

const p1:IPerson = {
  name:'sd',
  age:1,
  height:1223,
  // address:'12'
}


const info = {
  name:'why',
  age:1,
  height:199,
  address:'beijing'
}

// 这是把对象的引用赋值到了这个p上，
// 会做一个 freshness 擦除的操作
// 擦除多余的属性，但不能少了必须的属性
// 这样赋值竟然不报错
const p:IPerson = info
console.log(info)
console.log(p)