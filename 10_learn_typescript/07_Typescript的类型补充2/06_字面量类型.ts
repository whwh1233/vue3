const  message:'hello world' = 'hello world'

// 'hello world' 也可以作为类型， 123也可以额  叫做字面量类型
let num:123 = 123
// 字面量类型的意义，就是必须结合联合类型

// align 就只会有三个值，这就是作用
let align:'left' | 'right' | 'center' = "left"
align = "right"
// align = 'kkk'