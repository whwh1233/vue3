
// 不做类型判断会报错

// 通过联合类型，有很多缺点：
// 1.需要进行很多类型缩小
// 2.返回值的类型也不能确定（别人无法确定）
function add (num1: string | number ,num2:string | number) {
  // return num1 + num2
}

export {}