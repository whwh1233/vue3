更新浏览器不会重新请求服务器资源的两种方法：
## #+url（#/home） 不会再次请求资源
## url的hash 模式，相当于改变锚点  hash_demo.html
##  使用 H5 的 history 模式也不会请求资源
### HTML5 提供了六种改变URL而不刷新页面的操作
1. replaceState 替换原来的路径
2. pushState  使用新的路径
3. popState  路径的回退
4. go 向前或向后改变
5. forward 向前
6. back 向后


vue-router:使用步骤
1. 创建pages
2. 创建映射表  router/index.js   routes Array
3. 创建路由对象 router Object
4. app.use(router)
5. 使用 router-link router-view
