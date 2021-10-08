//  函数的重载，名称相同，但是参数不同（个数 、 类型）的几个函数
function add(num1:number , num2: number):number 
function add(num1:string , num2:string):string


// 上面写具体函数声明
// 下面写函数实现
function add(num1:any,num2:any) : any {
  if(typeof num1 === 'string') {
    return num1.length + num2.length
  }else {
    return num1 + num2
  }
}
const result = add(2,1)
const result2 =  add ('wssss','gh')

// 在函数重载中，实现函数无法被随便调用，只能匹配到类型后才能开始调用
// add({},{})

console.log(result)
console.log(result2)

export{}