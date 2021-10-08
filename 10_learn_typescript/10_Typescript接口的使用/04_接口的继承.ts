interface ISwim {
  swimming:() => void
}

interface IFly {
  flying:() => void
}

// 把接口组合在一起

interface IAction extends IFly,ISwim {
  eating :() => void
}

const action:IAction = {
  swimming() {},
  eating() {},
  flying() {}
}