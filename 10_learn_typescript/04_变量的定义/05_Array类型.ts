// 如何确定 数组中元素的类型
// 一个数组里 尽量只存放一种类型的数据

// 类型注解，type annotation
// 第一种写法不推荐在开发中使用，与jsx是冲突的  <> 太多了
const names:Array<string> = []

// 第二种写法更推荐在开发中使用
const names2 : string[] = []

names.push('avc')
// names.push(132)



// 这是很不好的习惯
// names.push('abc')
// names.push(13)
console.log(names)