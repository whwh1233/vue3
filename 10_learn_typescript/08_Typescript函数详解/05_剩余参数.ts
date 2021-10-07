

function sum (initalNum:number,...nums:number[]) {
  let total = 0
  for(const num of nums) {
    total += num
  }
  console.log('initalNum',initalNum)
  return total
}


console.log(sum(20,30,70))
console.log(sum(20,30,70,20))
