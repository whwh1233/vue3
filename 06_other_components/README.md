## render 函数
template -> compiler (render 函数)  -> Vnode -> DOM
### 我们可以不编写 template，使用 h 函数   （hyperscript）
### 直接在template 中写入 js 代码，也可以变成 VNode
### 更准确的命名是 createVNode 函数

<!-- 1.标签名字（必须），2.属性，3.文本或子组件  -->
h('div',{props},'String')