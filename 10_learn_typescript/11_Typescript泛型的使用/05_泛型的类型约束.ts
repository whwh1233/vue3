function getLength<T extends ILength >(arg:T) {
  return arg.length
}


interface ILength{
  length:number
}

getLength('asd')
getLength(['asd','asd'])
getLength({1:9,length:9})