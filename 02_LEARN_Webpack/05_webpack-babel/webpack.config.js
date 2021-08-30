const path = require('path')
const {CleanWebpackPlugin}= require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
// 允许在定义全局变量
const {DefinePlugin} = require('webpack')

module.exports = {
  // 解决 bundle.js 代码看不懂的问题  设置开发模式  production
  // mode 的设置其实代表了更多  development也代表了devtool:eval模式，所以要在后面更改一下devtool:source-map中
  mode:"development",
  // 报错的地方可以找到源代码  建立js映射文件，方便调试代码的错误
  devtool:"source-map",
  entry:'./src/main.js',
  output:{
    publicPath: './',
    // path:'E:\CodingGit\vue3\02_LEARN_Webpack\01_basic_webpack'
    path:path.resolve(__dirname,"./build"),
    filename:'js/bundle.js'
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
        test:/\.(eot|ttf|woff2?)$/,
        use:{
          loader:"file-loader",
          options:{
            name:"font/[name]_[hash:10].[ext]"
          }
        }
      },
      {
        test:/\.(jpg|png|gif|svg|jpe?g)$/,
        type:"asset",
        // 也可以写在output里
        generator:{
          filename:"img/[name]_[hash:10][ext]"
        },
        parser:{
          dataUrlCondition:{
            maxSize:10*1024
          }
        }
      },
    ]
  },
  // 数组中放入一个个的插件对象
  // for 循环来进行一个一个的注入
  plugins:[
    new CleanWebpackPlugin(),
    // 引入想自定义的模板文件
    new HtmlWebpackPlugin({
      template:'./public/index.html',
      title:'哈哈哈'
      
    }),
    // 他还会去找这个变量 所以双层引号
    new DefinePlugin({
      title:'"abcd"'
    }),
    new CopyWebpackPlugin({
      patterns:[
        {
          from:"public",
          to:"./",
          globOptions:{
            ignore:[
              "**/index.html"
            ]
          }
        }
      ]
    })

  ]
}