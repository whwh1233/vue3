
// 没有返回值就是void   ():void
// 在开发中，我们通常不写 返回值的类型，，，让他进行推导
function sum(num1:number,num2:number) {
  return num1 + num2
}

// 只传一个参数也会报错
// sum(123)