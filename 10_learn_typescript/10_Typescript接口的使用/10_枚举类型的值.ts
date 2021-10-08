// 定义一组常量并放到一个类型里去
enum Direction {
  LEFT = "left",
  RIGHT="right",
  TOP='top',
  BOTTOM='bottom'
}

// 枚举类型也有自己的默认值 0 1 2 3
function turnDirection(direction: Direction) {
  console.log('赚到了哪个方向')   
  console.log(direction)
  switch(direction) {
    case Direction.LEFT:
      console.log('LEFT')
  
      break;
    default:
      console.log('NOT LEFT')
    break
  }
}

turnDirection(Direction.LEFT)
turnDirection(Direction.RIGHT)
turnDirection(Direction.TOP)
turnDirection(Direction.BOTTOM)