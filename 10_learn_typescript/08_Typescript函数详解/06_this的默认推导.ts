// this 是可以被推导出来的  info 对象， ts 推导出来的
const info = {
  name:'wh',
  eating() {
    console.log(this.name + 'eating')
  }
}

info.eating()
export {}