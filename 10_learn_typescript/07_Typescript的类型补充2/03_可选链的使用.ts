type Person = {
  name:string,
  friend?:{
    name:string,
    age?:number
  },
  girlFriend?:{
    name:string
  }
}

const info:Person = {
  name:'why',
  friend:{
    name:'james'
  },
  girlFriend:{
    name:'lili'
  }
}

// 另一个文件里
console.log(info.name)
// console.log(info.friend!.name)

// info.friend 存在吗，不存在返回 undefined  存在再取 info.friend.name
console.log(info.friend?.name)
console.log(info.friend?.age)
console.log(info.girlFriend?.name)

// if(info.friend) {
//   console.log(info.friend.name)
// }

export {}