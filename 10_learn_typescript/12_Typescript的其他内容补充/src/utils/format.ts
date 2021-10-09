export  namespace time {
  export function format(time:string) {
    return '2222-02-22'
  }
  export const name = '123'
  export function foo() {

  }
  let age = 18
}
export namespace price {
  export function format(price:string) {
    return '$23'
  }
}

// 命名空间里的东西只有 导出之后才可以使用 export
time.format
time.name
time.foo
