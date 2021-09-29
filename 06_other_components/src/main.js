import { createApp } from 'vue'
import App from './03_自定义指令/App.vue'
import registerDirectives from './directives'
import plugin_object from './plugins/plugins_object'
import plugins_function from './plugins/plugins_function'
// 全局自定义指令
// app.directive("focus",{
//   mounted(el,bindings,vnode,preVnode) {
//     // 相应的元素挂载后，就会执行这个生命周期
//     console.log("focus mounted")
//     el.focus()
//   }
// })



const app = createApp(App)
app.use(plugin_object)
registerDirectives(app)

app.use(plugins_function)
app.mount('#app')

