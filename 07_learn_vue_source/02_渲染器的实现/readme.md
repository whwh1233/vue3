## vue 的插件
1. 一个对象，必须包含install 函数，会在安装函数时执行
2. 一个 function 会在安装插件时自动执行

## 插件完成的功能
1. 添加全局功能 、  property   （config.globalProperties）
2. 添加全局资源：指令，过滤器，过渡
3. 通过全局mixin添加组件选项
4. 一个库，提供自己的api
