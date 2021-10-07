const info = {
  name:'wh',
  age:18
}
info.name = 'james'


type Method= 'GET' | 'POST'
function request(url:string,method:Method) {

}

type Request = {
  url:string,
  method:Method
}

// 1. const options:Request = {}  在这里直接限定死 method 的类型
// 是最推荐的做法 
const options = {
  url:'ww,aaa0',
  method:'POST'
} as const 
// 2. as const 也可以额进行 
// method 不会默认推断 为 Method 类型
// 3. 也可以使用 as Method 直接转换
request(options.url,options.method as Method)




export{}