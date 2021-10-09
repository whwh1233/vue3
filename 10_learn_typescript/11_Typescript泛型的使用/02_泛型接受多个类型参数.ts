function foo<T,E,O>(arg1:T ,arg2: E,arg3:O) {

}

// 泛型传入多个参数
foo<number,string,string[]>(10,'adf',['asd'])
// 缩写的认识
// T:Type
// K:Key
// V:Value
// E:Element
// O:Object
