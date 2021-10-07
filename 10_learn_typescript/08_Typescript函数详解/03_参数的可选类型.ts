// 可选参数必须写在必选参数的后面
// y => number | undefined  但如果这么写的话， y 不能不传，只能传 undefined
function foo(x:number,y?:number) {

}

foo(20,30)
foo(50)

export {}