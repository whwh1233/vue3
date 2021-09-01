const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  devServer:{
    hot:true,
    // host:'0.0.0.0',
    port:777,
    open:true,
    // proxy:{
    //   '/api':{
    //     target:'http://localhost:8080',
    //     pathRewrite:{
    //       "^/api":""
    //     },
    //     secure:false,
    //     changeOrigin:true
    //   }
    // }
  },
  plugins:{
    

  }
}