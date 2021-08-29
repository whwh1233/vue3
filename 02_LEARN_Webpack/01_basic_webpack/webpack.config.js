const path = require('path')
module.exports = {
  entry:'./src/main.js',
  output:{
    // path:'E:\CodingGit\vue3\02_LEARN_Webpack\01_basic_webpack'
    path:path.resolve(__dirname,"./build"),
    filename:'bundle.js'
  }
}