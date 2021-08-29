// 内联样式指明loader
// import "css-loader!../css/style.css"
import "../css/style.css"
import "../css/title.less"

const divEl = document.createElement("div")
divEl.className = "title"
divEl.innerHTML = "hello world"

document.body.appendChild(divEl)