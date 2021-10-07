const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode:'development',
  entry:'./src/main.ts',
  output:{
    path:path.resolve(__dirname,"./dist"),
    filename:"bundle.js"
  },
  resolve:{
    extensions:[".ts",".js"]
  },
  module:{
    rules:[
      {
        test:/\.ts$/,
        loader:'ts-loader'
        // 缺少 tsconfig.js文件
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:"./index.html"
    })
  ]
}