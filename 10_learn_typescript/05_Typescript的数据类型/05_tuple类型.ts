// tuple 多种元素的组合
// const info:any[] = ["why",18,188]
const infoObj= {
  name:'why',
  age:18,
  height:188
}
// 数组的弊端：取出来的name1 也是 any 类型
// const name1 = info[0]

// 元组类型
// 元组必须先幅值
const info:[string,number,number] = ["abc",18,188]

// 元组可以确定每个元素的类型，取出来的时候也知道
const name1 = info[0]