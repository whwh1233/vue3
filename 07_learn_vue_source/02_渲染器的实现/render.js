const h = (tag, props, children) => {
  // vnode -> JS 对象 = {}
  // vnode 的核心就是这三个东西 tag  props  children
  return {
    tag,
    props,
    children
  }
}

const mount = (vnode, container) => {
  // vnode -> DOM
  // 1.创建出真实的DOM，并且在 vnode 上保留 el
  const el = (vnode.el = document.createElement(vnode.tag))
  // 2.处理 props
  if (vnode.props) {
    for (const key in vnode.props) {
      const value = vnode.props[key]
      // 对事件监听的判断  button  onClick
      if (key.startsWith('on')) {
        el.addEventListener(key.slice(2).toLowerCase())
      } else {
        el.setAttribute(key, value)
      }
    }
  }
  // 3.处理 children
  if (vnode.children) {
    if (typeof vnode.children === 'string') {
      el.textContent = vnode.children
    } else {
      vnode.children.forEach(item => {
        mount(item, el)
      })
    }
  }
  // 4.将el挂载到 container 中
  container.appendChild(el)
}
