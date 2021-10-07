// symbol 能创建出 独一无二 的符号
const title1 = Symbol("title")
const title2 = Symbol("title")

// 对象中不能用 两个相同的键值
const info = {
  [title1]:'coder',
  [title2]:'老师',
  age:18,
}
console.log(info)
export {}