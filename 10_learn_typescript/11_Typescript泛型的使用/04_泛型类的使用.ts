class Point<T> {
  x:T
  y:T
  z:T

  constructor (x:T,y:T,z:T) {
    this.x = x
    this.y = y
    this.z = z
  }
}

const p = new Point(1,2,3)
const p1 = new Point<string>('1','1','3')
const p2:Point<string> = new Point('s','s','s')


const names:string[] = ['a','d','cv']
const name2:Array<string> = ['as','sad','sadf']