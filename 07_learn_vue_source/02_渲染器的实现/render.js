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
  // 2.给 vnode 相对应的 element 添加 props 中的属性和方法
  // TODO 如果有多个 class 好像只会保存一个class
  if (vnode.props) {
    for (const key in vnode.props) {
      const value = vnode.props[key]
      // 对事件监听的判断  button  onClick
      if (key.startsWith('on')) {
        el.addEventListener(key.slice(2).toLowerCase(), value)
      } else {
        console.log(key, value)

        el.setAttribute(key, value)
      }
    }
  }
  // 3.处理 children
  // 3.1 如果是字符串，直接插入内容即可
  // 3.2 如果是孩子节点，把它继续挂载到我现在的 element 上
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

// 给 patch 函数传入两个 vnode

const patch = (n1, n2) => {
  // 1. tag 不相等直接，卸载旧的，挂载新的
  if (n1.tag !== n2.tag) {
    const n1ElParent = n1.el.parentElement
    console.log(n1ElParent)
    n1ElParent.removeChild(n1.el)
    mount(n2, n1ElParent)
  } else {
    // 1. 取出 element对象，并且在 n2 中进行保存
    const el = (n2.el = n1.el)
    // 2.准备好对比新旧节点的 props 的差别
    const oldProps = n1.props || {}
    const newProps = n2.props || {}
    // 2.1 获取 newProps ，遍历添加到element上
    for (const key in newProps) {
      const oldValue = oldProps[key]
      const newValue = newProps[key]
      if (newValue !== oldValue) {
        if (key.startsWith('on')) {
          el.addEventListener(key.slice(2).toLowerCase(), value)
        } else {
          el.setAttribute(key, value)
        }
      }
    }
    // 2.2 删除新的不存在的旧的 props
    for (const key in oldProps) {
      if (!(key in newProps)) {
        if (key.startsWith('on')) {
          const value = oldProps[key]
          el.removeEventListener(key.slice(2).toLowerCase(), value)
        } else {
          el.removeAttribute(key)
        }
      }
    }

    // 3.处理 children
    const oldChildren = n1.children || []
    const newChildren = n2.children || []
    if (typeof newChildren === 'string') {
      // 属于边界判断， edge case 边界情况的判断
      // 情况一，newChildren本身是一个 string
      if (typeof oldChildren === 'string') {
        if (newChildren !== oldChildren) {
          el.textContent = newChildren
        }
      } else {
        el.innerHTML = newChildren
      }
      //情况二，newChildren 是个数组
    } else {
      if (typeof oldChildren === 'string') {
        el.innerHTML = ''
        newChildren.forEach(item => {
          mount(item, el)
        })
      } else {
        // oldChildren:[n1,n2,n3]
        // newChildren:[n5,n6,n4,n3]
        // 1.前面有相同节点的元素进行patch操作
        const commonLength = Math.min(oldChildren.length, newChildren.length)

        for (let i = 0; i < commonLength; i++) {
          patch(oldChildren[i], newChildren[i])
        }
        // 2.newChildren.length > oldChilidren.length
        if (newChildren.length > oldChilidren.length) {
          newChildren.slice(oldChildren.length).forEach(item => {
            mount(item, el)
          })
        }
        // 3. newChildren.length < oldChilidren.length
        if (newChildren.length > oldChilidren.length) {
          oldChildren.slice(newChildren.length).forEach(item => {
            el.removeChild(item.el)
          })
        }
      }
    }
  }
}
