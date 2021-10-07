const info = {
  name:'wh',
  eating:eating
}

type ThisType = {name:string}
// 因为this 不明确了，ts推导不出来 所以现在的this 不能乱用

// 需要指定一下 this 的类型，以及内部的参数
function eating(this:ThisType) {
  console.log(this.name + 'eating')
}

info.eating()

eating.call(info)

eating.call({name:'jamase'})
eating.apply({name:'jamase'})

export {}