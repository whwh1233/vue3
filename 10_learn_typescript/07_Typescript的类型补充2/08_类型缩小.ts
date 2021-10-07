// type IdType= number | string
// // 1.typeof 的类型缩小
// function  printId(id:IdType) {
//   if(typeof id === 'string') {
//     console.log(id.toUpperCase())
//   }else {
//     console.log(id)
//   }
// }

// 2.平等类型的缩小 （=== !== != / switch）
// type Direction = 'left' | 'right' | 'top' | 'bottom'
// function printDirection(direction:Direction) {
//   if(direction === 'left') {
//     console.log(direction)
//   }else {

//   }
//   switch(direction) {
//     case 'left':
//       console.log(direction)
//   }
// }

// 3. instaneof
// function printTime(time:string | Date) {
//   if(time instanceof Date) {
//     console.log(time.toUTCString())
//   }else {
//     console.log(time)
//   }
// }

// class Student {

// }
// class Teacher {

// }
// function work(p:Student|Teacher) {
//   if(p instanceof Teacher) {
//     console.log(p)
//   }else {
//     console.log(p)
//   }
// }

// 4. in 操作符
type Fish = {
  name:string
  age:number
  // 这里定义函数类型
  swimming:() => void
}

type Dog = {
  running:() => void
}

const fish:Fish = {
  name:'wh',
  age:18,
  swimming:function() {
    console.log('swimming')
  }
}

function walk(animal:Fish | Dog) {
  if('swimming' in animal) {
    animal.swimming()
  }else {
    animal.running()
  }
}