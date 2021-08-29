const path = require('path')
module.exports = {
  entry:'./src/main.js',
  output:{
    publicPath: './',
    // path:'E:\CodingGit\vue3\02_LEARN_Webpack\01_basic_webpack'
    path:path.resolve(__dirname,"./build"),
    filename:'bundle.js'
    // 也可以写这里面 下面的assets中的filename属性
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
      },
      // {
      //   test:/\.(jpg|png|gif|svg|jpe?g)$/,
      //   use:{
      //     loader:"url-loader",
      //     options:{
      //       outputPath:'img',
      //       name:"[name]-[hash:6].[ext]",
      //       limit:10 * 1024
      //       // name:"img/[name]-[hash:6].[ext]"   也可以  不写outputPath的话
      //     }
      //   }
      // },
      {
        test:/\.(jpg|png|gif|svg|jpe?g)$/,
        type:"asset",
        // 也可以写在output里
        generator:{
          filename:"img/[name]_[hash:10][ext]"
        },
        parser:{
          dataUrlCondition:{
            maxSize:100*1024
          }
        }
      },{
        test:/\.(eot|ttf|woff2?)$/,
        use:{
          loader:"file-loader",
          options:{
            name:"font/[name]_[hash:10].[ext]"
          }
        }
      }
    ]
  }
}