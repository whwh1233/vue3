interface IndexLanguage {
  [index:number]:string
}

// indexlanguage 要求了索引类型必须是 number 类型
const frontLanguage:IndexLanguage = {
  0:'HTML',
  1:'CSS',
  2:'JAVASCRIPT',
  3:'VUE',
  // "acc":'css'
}

interface YearCount {
  [name:string] : number
}
// 用于确定对象中的数据的类型规定
const languageYear:YearCount = {
  'c':1972,
  'js':1999,
  // 11:'wed'
}