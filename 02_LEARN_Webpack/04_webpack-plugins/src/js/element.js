// 内联样式指明loader
// import "css-loader!../css/style.css"
import "../css/style.css"
import "../css/title.less"
import "../css/image.css"
import "../font/iconfont.css"
import bgImg from "../img/3.png"
// 图片资源也要作为模块来导入
const divEl = document.createElement("div")
divEl.className = "title"
divEl.innerHTML = "hello world"

const bgDivEl = document.createElement('div')
bgDivEl.className = "image-bg"

const imgEl = document.createElement('img')
imgEl.src = bgImg

const iEl = document.createElement("i")
iEl.className = "iconfont icon-ashbin"

console.log(content.length)

document.body.appendChild(divEl)
document.body.appendChild(bgDivEl)
document.body.appendChild(imgEl)
document.body.appendChild(iEl)