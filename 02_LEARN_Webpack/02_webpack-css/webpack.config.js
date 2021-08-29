const path = require('path')
module.exports = {
  entry:'./src/main.js',
  output:{
    // path:'E:\CodingGit\vue3\02_LEARN_Webpack\01_basic_webpack'
    path:path.resolve(__dirname,"./build"),
    filename:'bundle.js'
  },
  // 配置方式指明loader
  module:{
    rules:[
      {
        test:/\.css$/, // 根据正则进行匹配
        // 1.loader 语法糖
        // loader:"css-loader"
        // 2.完整写法  可以多个 可以加参数
        // 使用顺序：从后往前
        use:[
          // {loader:"css-loader",options:{}},
          "style-loader",
          "css-loader",
          {
            loader:"postcss-loader",
          }
        ]
      },{
        test:/\.less$/,
        use:[
          "style-loader",
          "css-loader",
          "less-loader"
        ]
      }
    ]
  }
}