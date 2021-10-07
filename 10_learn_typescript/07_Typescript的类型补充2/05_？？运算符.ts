// let message:string | null = 'hello world'
let message:string | null = null

// ?? 前面有值，返回前面，无值，返回后面的默认值
//   合并空值操作符
const content = message ?? "Nihaoa 李银河"
console.log(content)

export {}